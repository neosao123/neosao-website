import ScrollToTop from './components/ScrollToTop';
import Allroutes from './routes/Allroutes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter basename='neosaoweb'>
      <ScrollToTop />
      <Allroutes />
    </BrowserRouter>
  );
}

export default App;
