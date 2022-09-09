import Landing from './pages/Landing'
import Pricing from './pages/Pricing'
import GalleryIndex from './pages/GalleryIndex'
import Gallery1 from './pages/Gallery1'
import Contact from './pages/Contact'
import { Route } from 'react-router'


function App() {
  return (
    <>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/pricing'>
        <Pricing />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/gallery'>
        <GalleryIndex />
      </Route>
      <Route path='/gallery1'>
        <Gallery1 />
      </Route>
    </>
  );
}

export default App;
