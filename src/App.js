import Landing from './pages/Landing'
import Pricing from './pages/Pricing'
import GalleryIndex from './pages/GalleryIndex'
import Gallery1 from './pages/Gallery1'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import { Route } from 'react-router'



function App() {
  return (
    <>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/investment'>
        <Pricing />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/collections'>
        <GalleryIndex />
      </Route>
      <Route path='/collection1'>
        <Gallery1 />
      </Route>
      <Route path='/testimonials'>
        <Testimonials />
      </Route>
    </>
  );
}

export default App;
