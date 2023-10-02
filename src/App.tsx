import Product from "./component/Product";
import Navbar from "./component/Navbar";
import Corousel from "./component/Corousel";
import About from "./component/About/About";
import Catalog from "./component/Catalog";
import Footer from "./component/Footer";
import IndexContact from "./component/Contact/IndexContact";

function App() {
  return (
    <>
      <Navbar />
      <Corousel />
      <About />
      <Product />
      <Catalog />
      <IndexContact />
      <Footer />
    </>
  );
}

export default App;
