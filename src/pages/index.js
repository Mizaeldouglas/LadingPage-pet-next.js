import NavBar from "src/components/NavBar";
import Head from "next/head";
import Header from "src/components/Header";
import About from "src/components/About";
import Separador from "src/components/separador";
import Services from "src/components/Services";
import Gallery from "src/components/Gallery";
import Depositions from "src/components/Depositions";
import Footer from "src/components/Footer";


export default function Home() {
  return (
    <>
      <Head >
        <title>Pet Care</title>
        <NavBar />
      </Head>
      <Separador />
      <main>
        <Header />

        <Separador />
        <About />

        <Separador />
        <Services />

        <Separador />
        <Gallery />

        <Separador />
        <Depositions />
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}
