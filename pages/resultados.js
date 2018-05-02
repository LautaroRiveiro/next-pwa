import Head from "../components/Head";
import Link from "next/link";
import { redirectIfNotAuth } from "../lib/auth";

export default class extends React.Component {
    static async getInitialProps(context) {
        console.info("Resultados - getInitialProps: context ", context);
        redirectIfNotAuth(context);
        return {};
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
                      cellspacing="0"
                      width="100%"
                      role="grid"
                      style={{width: "100%", backgroundColor: "rgba(255,255,255,0.7)", padding:"10px"}}
                    >
                      <thead>
                        <tr role="row">
                          <th
                            tabindex="0"
                            aria-controls="table-despachos-busqueda"
                            rowspan="1"
                            colspan="1"
                            aria-label="Cond: activate to sort column ascending"
                            style={{width: "55.3333px"}}
                          >
                            Cond
                          </th>
                          <th
                            tabindex="0"
                            aria-controls="table-despachos-busqueda"
                            rowspan="1"
                            colspan="1"
                            aria-label="Remito: activate to sort column ascending"
                            style={{width: "46.6667px"}}
                          >
                            Remito
                          </th>
                          <th
                            tabindex="0"
                            aria-controls="table-despachos-busqueda"
                            rowspan="1"
                            colspan="1"
                            aria-label="Razón Social: activate to sort column ascending"
                            style={{width: "150px"}}
                          >
                            Razón Social
                          </th>
                          <th
                            tabindex="0"
                            aria-controls="table-despachos-busqueda"
                            rowspan="1"
                            colspan="1"
                            aria-label="Producto: activate to sort column ascending"
                            style={{width: "156px"}}
                          >
                            Producto
                          </th>
                          <th
                            tabindex="0"
                            aria-controls="table-despachos-busqueda"
                            rowspan="1"
                            colspan="1"
                            aria-label="Cantidad: activate to sort column ascending"
                            style={{width: "50.6667px"}}
                          >
                            Cantidad
                          </th>
                          <th
                            tabindex="0"
                            aria-controls="table-despachos-busqueda"
                            rowspan="1"
                            colspan="1"
                            aria-label="Destino: activate to sort column ascending"
                            style={{width: "126px"}}
                          >
                            Destino
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" className="odd" data-despacho-idx="0">
                          <td className="border-right">
                            <span className="square-env bg-red">CIF</span>
                          </td>
                          <td>0011R00000003</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CEMENTO CPF40 IRAM 50000 GR</td>
                          <td className="align-right strong">300,00</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                        </tr>
                        <tr role="row" className="even" data-despacho-idx="1">
                          <td className="border-right">
                            <span className="square-env bg-red">CIF</span>
                          </td>
                          <td>0011R00000004</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CEMENTO CPF40 IRAM 50000 GR</td>
                          <td className="align-right strong">100,00</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
                        <tr role="row" className="odd" data-despacho-idx="2">
                          <td className="border-right">
                            <span className="square-env bg-red">FOB</span>
                          </td>
                          <td>0002R00000138</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CEMENTO CPF40 IRAM 50000 B50 KG</td>
                          <td className="align-right strong">8,00</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
                        <tr role="row" className="even" data-despacho-idx="3">
                          <td className="border-right">
                            <span className="square-env bg-red">CIF</span>
                          </td>
                          <td>0002R00000124</td>
                          <td>Construcciones Majestic S.A.</td>
                          <td>CEMENTO CPF40 IRAM 50000 B50 KG</td>
                          <td className="align-right strong">0,05</td>
                          <td>Construcciones Majestic S.A.</td>
                        </tr>
                        <tr role="row" className="odd" data-despacho-idx="4">
                          <td className="border-right">
                            <span className="square-env bg-red">FOB</span>
                          </td>
                          <td>0002R00000130</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CAL HIDRAT EXTRA B25 KG</td>
                          <td className="align-right strong">6,00</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
                        <tr role="row" className="odd" data-despacho-idx="10">
                          <td className="border-right">
                            <span className="square-env bg-red">CIF</span>
                          </td>
                          <td>0002R00000328</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CEMENTO CPN40 (ARS) IRAM 50001 GR</td>
                          <td className="align-right strong">30,00</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                        </tr>
                        <tr role="row" className="even" data-despacho-idx="15">
                          <td className="border-right">
                            <span className="square-env bg-red">CIF</span>
                          </td>
                          <td>0076R00000001</td>
                          <td>Prueba Despacho 1</td>
                          <td>CEMENTO ALBAÑILERIA IRAM 1685 B40 KG</td>
                          <td className="align-right strong">2,00</td>
                          <td>Prueba Despacho 1</td>
                        </tr>
                        <tr role="row" className="odd" data-despacho-idx="16">
                          <td className="border-right">
                            <span className="square-env bg-red">FOB</span>
                          </td>
                          <td>0002R00000279</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CEMENTO CPF40 IRAM 50000 B50 KG</td>
                          <td className="align-right strong">4,00</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
                        <tr role="row" className="even" data-despacho-idx="17">
                          <td className="border-right">
                            <span className="square-env bg-red">FOB</span>
                          </td>
                          <td>0002R00000279</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CAL HIDRAT EXTRA B25 KG</td>
                          <td className="align-right strong">6,00</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
                        <tr role="row" className="odd" data-despacho-idx="18">
                          <td className="border-right">
                            <span className="square-env bg-red">FOB</span>
                          </td>
                          <td>0002R00000278</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CEMENTO CPF40 IRAM 50000 B50 KG</td>
                          <td className="align-right strong">2,00</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
                        <tr role="row" className="even" data-despacho-idx="19">
                          <td className="border-right">
                            <span className="square-env bg-red">FOB</span>
                          </td>
                          <td>0002R00000278</td>
                          <td>CORTI ANDREA Y CORTI DILLMAN Mº CEC</td>
                          <td>CAL HIDRAT EXTRA B25 KG</td>
                          <td className="align-right strong">4,50</td>
                          <td>Destinatario 1 para cliente 1</td>
                        </tr>
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
