import ScrollToTop from './components/ScrollToTop';
import Allroutes from './routes/Allroutes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <BrowserRouter basename='neosaoweb'>
      <ScrollToTop />
      <Allroutes />
    </BrowserRouter>
  );
}

export default App;
