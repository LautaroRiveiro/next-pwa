import { redirectIfAuth, signIn } from "../lib/auth";
import Head from "../components/Head";
import Navbar from "../components/Navbar";

export default class extends React.Component {
  static getInitialProps(context) {
    console.info("Login getInitialProps: context ", context);
    redirectIfAuth(context);
    return {};
  }

  state = {
    nombre: "test@test.com",
    pass: "1234",
    error: ""
  };

  enviar(email, pass) {
    const error = signIn(email, pass).then(res => {
      if (res) this.setState({ error: res });
    });
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
          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={this.state.pass}
            onChange={e => this.setState({ pass: e.target.value })}
          />
          <br />
          <button
            onClick={e => this.enviar(this.state.nombre, this.state.pass)}
          >
            {" "}
            Ingresar{" "}
          </button>
          <div> { this.state.error } </div>
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
