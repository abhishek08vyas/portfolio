// Card.tsx
import React, { Children, cloneElement, forwardRef, isValidElement, ReactElement, ReactNode, RefObject, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

export interface CardSwapProps {
	width?: number | string;
	height?: number | string;
	cardDistance?: number;
	verticalDistance?: number;
	delay?: number;
	pauseOnHover?: boolean;
	onCardClick?: (idx: number) => void;
	onCardChange?: (idx: number) => void;
	skewAmount?: number;
	easing?: "linear" | "elastic";
	children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
	<div
		ref={ref}
		{...rest}
		// Removed 'left-1/2' and 'transform' related classes for left alignment
		className={`absolute top-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
	/>
));
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
	x: number;
	y: number;
	z: number;
	zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
	// Invert x to position cards to the left
	x: -i * distX,
	y: -i * distY,
	z: -i * distX * 1.5,
	zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
	gsap.set(el, {
		x: slot.x,
		y: slot.y,
		z: slot.z,
		xPercent: 0, // Set xPercent to 0 for left alignment
		yPercent: -50,
		skewY: skew,
		transformOrigin: "center center",
		zIndex: slot.zIndex,
		force3D: true,
	});

const CardSwap: React.FC<CardSwapProps> = ({ width = 500, height = 400, cardDistance = 60, verticalDistance = 70, delay = 5000, pauseOnHover = false, onCardClick, onCardChange, skewAmount = 6, easing = "elastic", children }) => {
	const config =
		easing === "elastic"
			? {
					ease: "elastic.out(0.6,0.9)",
					durDrop: 2,
					durMove: 2,
					durReturn: 2,
					promoteOverlap: 0.9,
					returnDelay: 0.05,
			  }
			: {
					ease: "power1.inOut",
					durDrop: 0.8,
					durMove: 0.8,
					durReturn: 0.8,
					promoteOverlap: 0.45,
					returnDelay: 0.2,
			  };

	const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
	const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);

	const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));

	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const intervalRef = useRef<number | undefined>(undefined);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const total = refs.length;
		refs.forEach((r, i) => placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), -skewAmount));

		const swap = () => {
			if (order.current.length < 2) return;

			const [front, ...rest] = order.current;
			const elFront = refs[front].current!;
			const tl = gsap.timeline();
			tlRef.current = tl;

			// Invert drop direction if you want horizontal drop, otherwise keep vertical
			tl.to(elFront, {
				y: "+=500", // keep vertical drop, or change to x: "-=500" for horizontal left
				duration: config.durDrop,
				ease: config.ease,
			});

			tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
			rest.forEach((idx, i) => {
				const el = refs[idx].current!;
				const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
				tl.set(el, { zIndex: slot.zIndex }, "promote");
				tl.to(
					el,
					{
						x: slot.x,
						y: slot.y,
						z: slot.z,
						duration: config.durMove,
						ease: config.ease,
						skewY: -skewAmount,
					},
					`promote+=${i * 0.15}`,
				);
			});

			const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
			tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
			tl.call(
				() => {
					gsap.set(elFront, { zIndex: backSlot.zIndex });
				},
				undefined,
				"return",
			);
			tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
			tl.to(
				elFront,
				{
					y: backSlot.y,
					duration: config.durReturn,
					ease: config.ease,
					skewY: -skewAmount,
				},
				"return",
			);

			tl.call(() => {
				order.current = [...rest, front];
				if (onCardChange) {
					onCardChange(order.current[0]);
				}
			});
		};

		swap();
		intervalRef.current = window.setInterval(swap, delay);

		if (pauseOnHover) {
			const node = container.current!;
			const pause = () => {
				tlRef.current?.pause();
				clearInterval(intervalRef.current);
			};
			const resume = () => {
				tlRef.current?.play();
				intervalRef.current = window.setInterval(swap, delay);
			};
			node.addEventListener("mouseenter", pause);
			node.addEventListener("mouseleave", resume);
			return () => {
				node.removeEventListener("mouseenter", pause);
				node.removeEventListener("mouseleave", resume);
				clearInterval(intervalRef.current);
			};
		}
		return () => clearInterval(intervalRef.current);
	}, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, onCardChange]);

	const rendered = childArr.map((child, i) =>
		isValidElement<CardProps>(child)
			? cloneElement(child, {
					key: i,
					ref: refs[i],
					style: { width, height, ...(child.props.style ?? {}) },
					onClick: (e) => {
						child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
						onCardClick?.(i);
					},
			  } as CardProps & React.RefAttributes<HTMLDivElement>)
			: child,
	);

	return (
		<div
			ref={container}
			// Removed translate-x-[2%] and similar for left alignment
			className="absolute bottom-0 left-0 origin-bottom-left perspective-[900px] overflow-visible max-[768px]:translate-x-[1%] max-[768px]:translate-y-[-5%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[0%] max-[480px]:translate-y-[-2%] max-[480px]:scale-[0.55]"
			style={{ width, height }}
		>
			{rendered}
		</div>
	);
};

export default CardSwap;
