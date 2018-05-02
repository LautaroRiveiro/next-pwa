import { redirectIfAuth, signIn } from "../lib/auth";
import Head from "../components/Head";

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
        <Head titulo="Login | eCementos" />

        <div id="login-header">
          <h1 id="logo">eCementos</h1>
        </div>

        <div id="login-area">
          <div id="login-form">
            <form action="/login" method="POST" data-ng-submit="ctrl.submit()" autoComplete="off" noValidate="1" className="ng-pristine ng-invalid ng-invalid-required">
              <div className="form-group">
                <label className="control-label ">Usuario </label>
                <input
                  type="text"
                  className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                  placeholder="Ingrese su Usuario"
                  value={this.state.nombre}
                  name="nombre"
                  id="nombre"
                  tabIndex="1"
                  onChange={e => this.setState({ nombre: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="control-label ">Contraseña </label>
                <input
                  type="password"
                  className="form-control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                  placeholder="Ingrese su contraseña"
                  value={this.state.pass}
                  name="pass"
                  id="pass"
                  tabIndex="2"
                  onChange={e => this.setState({ pass: e.target.value })}
                />
                {
                  //<a href="/recuperar" className="lost-pwd">Olvidé mi contraseña</a>
                }
              </div>
              <div className="center">
                <button
                  type="button"
                  className="btn btn-default btn-wide loading"
                  tabIndex="3"
                  onClick={e => this.enviar(this.state.nombre, this.state.pass)}
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>

        <style jsx global>{`
          body { 
            background: url('./static/bg-red.jpg');
            margin: 0;
          }
        `}</style>

        <style jsx>{`
          .form-control {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
            -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
            -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
            font-size: 18px;
            background: 0 0;
            border-left: 0;
            border-top: 0;
            border-right: 0;
            box-shadow: none;
            border-radius: 0;
            padding-left: 0;
            padding-right: 0;
            border-color: #fff;
          }

          .btn{
            border: 0px;
          }
          .btn:hover{
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
