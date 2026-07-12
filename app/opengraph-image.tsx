import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 600 }}>Erdem Hacısalihoğlu</div>
        <div style={{ fontSize: 32, color: '#a3a3a3', marginTop: 24 }}>
          Software Developer · Amateur Radio Operator
        </div>
      </div>
    ),
    { ...size }
  )
}
