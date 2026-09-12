import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.email("A valid email is required"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
	}

	const parsed = contactSchema.safeParse(body);
	if (!parsed.success) {
		return NextResponse.json({ error: "Invalid payload", issues: z.flattenError(parsed.error).fieldErrors }, { status: 400 });
	}

	const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
	if (!webhookUrl) {
		return NextResponse.json({ error: "Contact API not configured" }, { status: 503 });
	}

	try {
		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(parsed.data),
		});

		if (!response.ok) {
			return NextResponse.json({ error: "Failed to deliver message" }, { status: 502 });
		}

		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json({ error: "Failed to deliver message" }, { status: 502 });
	}
}
