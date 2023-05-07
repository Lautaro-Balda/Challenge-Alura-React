import Footer from './components/Footer';
import Header from './components/Header';
import './normalize.css';
import GlobalStyle from './Global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import Page404 from './pages/Page404';
import NuevaCategoria from './pages/NuevaCategoria';

function App() {
  return (
    <Router>
      <ThemeProvider theme={{}}>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Nuevo_video' element={<NuevoVideo/>} />
        <Route path='/Nueva_Categoria' element={<NuevaCategoria/>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
      <GlobalStyle/>
      </ThemeProvider>
    </Router>
    
  )


}

export default App;
