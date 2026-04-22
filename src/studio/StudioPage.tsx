import {Studio} from 'sanity'
import {studioConfig} from './config'

// Reset all inherited styles so Sanity Studio renders correctly
// without interference from the app's global CSS / Tailwind resets
const studioWrapperStyle: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
}

export default function StudioPage() {
  return (
    <div style={studioWrapperStyle}>
      <Studio config={studioConfig} />
    </div>
  )
}
