import ScrollToTop from './components/ScrollToTop';
import Allroutes from './routes/Allroutes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter basename='neosaoweb'>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} />
      <Allroutes />
    </BrowserRouter>
  );
}

export default App;
