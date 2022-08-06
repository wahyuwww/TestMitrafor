import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Sidebar from '../components/module/Sidebar';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home';

export default function router() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route
          index
          element={
            <Sidebar>
              <Home />
            </Sidebar>
          }
        />
        <Route path="/product/:id">
          <Route
            index
            element={
              <Sidebar>
                <Detail />
              </Sidebar>
            }
          />
        </Route>
        <Route path="/about">
          <Route
            index
            element={
              <Sidebar>
                <About />
              </Sidebar>
            }
          />
        </Route>
        <Route path="/contact">
          <Route
            index
            element={
              <Sidebar>
                <Contact />
              </Sidebar>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
