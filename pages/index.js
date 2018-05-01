import { redirectIfNotAuth } from "../lib/auth";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class extends React.Component {
  static async getInitialProps(context) {
    console.info("Home - getInitialProps: context ", context);
    redirectIfNotAuth(context);
    return{};
  }

  componentDidMount () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render () {
    return (
      <div>
      <Head titulo="Inicio" />
      <Navbar />
      <h3>Inicio</h3>
      <hr />
    </div>
    )
  }
}