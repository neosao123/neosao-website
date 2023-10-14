import ScrollToTop from './components/ScrollToTop';
import Allroutes from './routes/Allroutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoImg from './assets/images/logo-color.png';

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={logoImg} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Neosao Services Pvt Ltd.</title>
        <meta property="og:title" content="Neosao Services Pvt Ltd." />
        <meta property="og:description" content="A multi-services IT company provides solutions for customized app developement" />
        <meta property="og:image" content={logoImg} />
        <meta property="og:url" content="https://neosao.com/" />
        <meta property="og:site_name" content="Neosao" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ScrollToTop />
      <Allroutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
