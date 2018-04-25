import { redirectIfNotAuth } from "../lib/auth";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Home = () => (
    <div>
      <Head titulo="Inicio" />
      <Navbar />
      <h3>Inicio</h3>
      <hr />
    </div>
);

Home.getInitialProps = async function(context){
  console.info("Home - getInitialProps: context ", context);
  redirectIfNotAuth(context);
  return{};
}

export default Home;