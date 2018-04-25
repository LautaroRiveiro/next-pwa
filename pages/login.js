import { redirectIfAuth, signIn } from "../lib/auth";
import Head from "../components/Head";
import Navbar from "../components/Navbar";

export default class extends React.Component {
  static getInitialProps(context) {
    console.info("Login getInitialProps: context ", context);
    redirectIfAuth(context);

    return{};
  }

  state = {
    nombre: ""
  };

  enviar(email){
    signIn(email,"1234")
  }

  render() {
    return (
      <div>
        <Head titulo="Calculadora" />
        <div className="login">
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={this.state.nombre}
            onChange={e => this.setState({ nombre: e.target.value })}
          />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button onClick={e => this.enviar(this.state.nombre)}>
            {" "}
            Ingresar{" "}
          </button>
        </div>
        <style jsx>{`
          .login {
            background-color: rgb(100, 100, 250);
            height: 96vh;
            width: 30%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}
