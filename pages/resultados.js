import Head from "../components/Head";
import Link from "next/link";
import { redirectIfNotAuth } from "../lib/auth";
import 'isomorphic-fetch'

export default class extends React.Component {
    static async getInitialProps(context) {
        console.info("Resultados - getInitialProps: context ", context);
        redirectIfNotAuth(context);

        //const req = await fetch("/static/data.json")
        const req = await fetch("http://www.mocky.io/v2/5aeb5d5730000062005754dc")
        const turnos = await req.json()
        console.info("turnos", turnos);
        return { turnos: turnos.resultados };
    }

  render() {
    return (
      <div>
        <Head titulo="Resultados | eCementos" />
        <div className="header">
            <h2>Resultados</h2>
            <Link href={"/"}>
                <a>Volver</a>
            </Link>
        </div>
        <hr />

        <section className="contenido ">
          <div className="tabla-wrapper">
            <div>
              <div className="big-row row">
                <div className="col-md-12 col-xs-12">
                  <div
                    id="table-despachos-busqueda_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      id="table-despachos-busqueda"
                      className="display table table-striped dataTable no-footer"
                      cellSpacing="0"
                      width="100%"
                      role="grid"
                      style={{width: "100%", backgroundColor: "rgba(255,255,255,0.7)", padding:"10px"}}
                    >
                      <thead>
                        <tr role="row">
                          <th
                            tabIndex="0"
                            aria-controls="table-despachos-busqueda"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Cond: activate to sort column ascending"
                            style={{width: "55.3333px"}}
                          >
                            Cond
                          </th>
                          <th
                            tabIndex="0"
                            aria-controls="table-despachos-busqueda"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Remito: activate to sort column ascending"
                            style={{width: "46.6667px"}}
                          >
                            Remito
                          </th>
                          <th
                            tabIndex="0"
                            aria-controls="table-despachos-busqueda"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Razón Social: activate to sort column ascending"
                            style={{width: "150px"}}
                          >
                            Razón Social
                          </th>
                          <th
                            tabIndex="0"
                            aria-controls="table-despachos-busqueda"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Producto: activate to sort column ascending"
                            style={{width: "156px"}}
                          >
                            Producto
                          </th>
                          <th
                            tabIndex="0"
                            aria-controls="table-despachos-busqueda"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Cantidad: activate to sort column ascending"
                            style={{width: "50.6667px"}}
                          >
                            Cantidad
                          </th>
                          <th
                            tabIndex="0"
                            aria-controls="table-despachos-busqueda"
                            rowSpan="1"
                            colSpan="1"
                            aria-label="Destino: activate to sort column ascending"
                            style={{width: "126px"}}
                          >
                            Destino
                          </th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          this.props.turnos.map((turno, index)=>(
                            <tr role="row" className="odd" data-despacho-idx="0" key={index}>
                              <td className="border-right">
                                <span className="square-env bg-red">{ turno.cond }</span>
                              </td>
                              <td>{ turno.remito }</td>
                              <td>{ turno.razonSocial }</td>
                              <td>{ turno.producto }</td>
                              <td className="align-right strong">{ turno.cantidad }</td>
                              <td>{ turno.destino }</td>
                            </tr>
                          ))
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          body { 
            margin: 0;
          }
        `}</style>

        <style jsx>{`
          .header {
            margin: 0;
            padding: 15px;
            color: white;
            background: url('./static/bg-red.jpg');
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .header h2{
            margin: 0;
            padding: 5px;
            color: white
          }
          .header a{
            margin: 0;
            padding: 5px;
            color: white;
            text-decoration: none;
            font-size: 16px;
          }
          hr {
            background: url('./static/bg-red.jpg');
          }
        `}</style>
      </div>
    );
  }
}
