import { MidSection } from './components/MidSection'
import { Nav } from './components/Nav'
import { TopSection } from './components/TopSection'

export const App = () => {
  return (
    <div className="m-8">
      <Nav />
      <TopSection />
      <MidSection />
    </div>
  )
}
