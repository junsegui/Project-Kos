import "./App.css";

import { Layout } from "./Components/Layout/Layout";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes } from "./Components/Routes/Routes";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
