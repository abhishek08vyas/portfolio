import { ImageResponse } from 'next/og';

// Placed in the root app segment so every route inherits this branded card.
export const alt = "Abhishek Vyas — Full-Stack Developer — AI & RAG Pipelines · St. John's, NL";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#142240',
          padding: '96px',
        }}
      >
        {/* Accent rule */}
        <div
          style={{
            width: 120,
            height: 8,
            backgroundColor: '#7C96C4',
            borderRadius: 4,
            marginBottom: 48,
          }}
        />
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {'Abhishek Vyas'}
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: '#C9D4E8',
            marginTop: 28,
          }}
        >
          {'Full-Stack Developer — AI & RAG Pipelines'}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            color: '#8FA3C4',
            marginTop: 20,
          }}
        >
          {"St. John's, NL · Remote-ready"}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
