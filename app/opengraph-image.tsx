import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'linear-gradient(140deg, rgb(11, 18, 32) 0%, rgb(16, 36, 66) 45%, rgb(26, 89, 120) 100%)',
          color: 'white',
          padding: '56px 64px',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            opacity: 0.95,
          }}
        >
          UpShoot Marketing
        </div>

        <div
          style={{
            display: 'flex',
            maxWidth: '92%',
            fontSize: 64,
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: '-0.03em',
          }}
        >
          Modern B2B Marketing That Builds Trust and Drives Revenue
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            opacity: 0.9,
            letterSpacing: '-0.01em',
          }}
        >
          Strategy • Storytelling • Content Systems
        </div>
      </div>
    ),
    size,
  );
}
