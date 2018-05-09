import Router from "next/router";
import {redirectIfNotAuth} from "../lib/auth";
import {removeCookie} from "../lib/session";
import Head from "../components/Head";
import Appbar from "../components/Appbar";
import BannerInstalacion from "../components/BannerInstalacion";


export default class extends React.Component {

    static async getInitialProps(context) {
        console.info("Home - getInitialProps: context ", context);
        redirectIfNotAuth(context);
        return {};
    }
    
    state = {
        desde: "",
        hasta: "",
        familia: "",
        producto: "",
        puntoExpedicion: "",
        numero: "",
        CIF: false,
        FOB: false
    }
    componentDidMount() {
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.init({
              appId: "024583b3-6712-4994-9360-56e16fd8695c",
              autoRegister: false,
              notifyButton: {
                enable: true,
              },
              path:"/static/"
            });
          });
    }

    filtrar = () => {
        console.info(this.state);
        Router.push("/resultados");
    }

    salir = () => {
        removeCookie("jwt");
        Router.push("/login");
    }

    render() {
        const {desde, hasta, familia, producto, puntoExpedicion, numero, CIF, FOB} = this.state;
        return (
            <div>
                <Head titulo="Filtro | eCementos"/>
                <Appbar titulo="Turnos" boton="SALIR" onclick={ () => this.salir()}/>
                <BannerInstalacion/>
                <div className="filtros filters filter-despachos ng-scope" id="filtro-turnos">

                    <div className="campo">
                        <input
                            type="text"
                            className="date form-control ng-pristine ng-untouched ng-valid ng-empty"
                            placeholder="Desde"
                            readOnly=""
                            name="desde"
                            onChange={e => this.setState({desde: e.target.value})}
                            value={desde}/>
                    </div>
                    <div className="campo">
                        <input
                            type="text"
                            className="date form-control ng-pristine ng-untouched ng-valid ng-empty"
                            placeholder="Hasta"
                            readOnly=""
                            name="hasta"
                            onChange={e => this.setState({hasta: e.target.value})}
                            value={hasta}/>
                    </div>

                    <div className="campo">
                        <select
                            name="familia"
                            className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                            value={familia}
                            onChange={e => this.setState({familia: e.target.value})}>
                            <option value=""> Familias (Todas)</option>
                            <option value="2" className="ng-binding ng-scope"> Albañilería</option>
                            <option value="3" className="ng-binding ng-scope"> Cales</option>
                            <option value="1" className="ng-binding ng-scope"> Cementos</option>
                            <option value="4" className="ng-binding ng-scope"> Pegamentos</option>
                        </select>
                    </div>

                    <div className="campo">
                        <select
                            name="producto"
                            className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                            value={producto}
                            onChange={e => this.setState({producto: e.target.value})}>
                            <option value="">Producto (Todos)</option>
                            <option value="80008" className="ng-binding ng-scope"> CAL HIDRAT EXTRA B25 KG</option>
                            <option value="80019" className="ng-binding ng-scope"> CEMENTO ALBAÑILERIA IRAM 1685 B40
                                KG
                            </option>
                            <option value="80067" className="ng-binding ng-scope"> CEMENTO CPC40 IRAM 50000 B50 KG
                            </option>
                            <option value="80027" className="ng-binding ng-scope"> CEMENTO CPF40 IRAM 50000 B50 KG
                            </option>
                        </select>
                    </div>

                    <div className="campo">
                        <select
                            name="puntoExpedicion"
                            className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                            value={puntoExpedicion}
                            onChange={e => this.setState({puntoExpedicion: e.target.value})}>
                            <option value="">Pto. Expedición (Todos)</option>
                            <option value="AE10" className="ng-binding ng-scope"> Barranqueras</option>
                            <option value="AE11" className="ng-binding ng-scope"> Campana</option>
                            <option value="AE08" className="ng-binding ng-scope"> Cañuelas</option>
                            <option value="AE03" className="ng-binding ng-scope"> Colon</option>
                            <option value="AE06" className="ng-binding ng-scope"> Cordoba</option>
                        </select>
                    </div>

                    <div className="campo">
                        <input
                            type="text"
                            className="form-control ng-pristine ng-untouched ng-valid ng-empty"
                            placeholder="Número"
                            name="numero"
                            onChange={e => this.setState({numero: e.target.value})}
                            value={numero}/>
                    </div>

                    <div className="campo">
                        <div className="checkbox-outer">
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    value={CIF}
                                    name="CIF"
                                    id="CIF"
                                    className="ng-pristine ng-untouched ng-valid ng-empty"
                                    onChange={e => {
                                        this.setState(prev => {
                                            return {CIF: !prev.CIF}
                                        })
                                    }}/>
                                <label htmlFor="CIF"/>
                            </div>
                            <span>CIF</span>
                        </div>
                        <div className="checkbox-outer">
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    value={FOB}
                                    name="FOB"
                                    id="FOB"
                                    className="ng-pristine ng-untouched ng-valid ng-empty"
                                    onChange={e => {
                                        this.setState(prev => {
                                            return {FOB: !prev.FOB}
                                        })
                                    }}/>
                                <label htmlFor="FOB"/>
                            </div>
                            <span>FOB</span>
                        </div>
                    </div>

                    <div className="campo">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.filtrar}>
                            Filtrar
                        </button>
                    </div>
                </div>

                <style jsx global>{`
                  body {
                    background: url("./static/bg-red.jpg");
                    margin: 0;
                    padding: 0px;
                    touch-action: none;
                  }
                `}</style>

                <style jsx>{`
                  .filtros{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding: 10px;
                    padding-top:40px;
                    margin-top: 20px;
                  }
                  .filtros>div{
                    margin:10px;
                  }
                `}</style>
            </div>
        );
    }
}
