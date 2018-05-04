import 'isomorphic-fetch'
import Router from "next/router";
import { redirectIfNotAuth } from "../lib/auth";
import Head from "../components/Head";
import Appbar from "../components/Appbar";
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

export default class extends React.Component {

  static async getInitialProps(context) {
      console.info("Resultados - getInitialProps: context ", context);
      redirectIfNotAuth(context);
      let req;
      //const req = await fetch("/static/data.json")
      if(process.browser){
        req = await fetch("https://www.mocky.io/v2/5aeb5d5730000062005754dc")
      }
      else{
        req = await fetch("http://www.mocky.io/v2/5aeb5d5730000062005754dc")
      }
      const turnos = await req.json()
      console.info("turnos", turnos);
      return { turnos: turnos.resultados };
  }

  onclick = () =>{
    Router.push("/")
  }

  render() {
    return (
      <div>
        <Head titulo="Resultados | eCementos" />
        <Appbar titulo="Resultados" boton="VOLVER" onclick={ () => this.onclick() }/>
        <section className="contenido ">
          {
            this.props.turnos.map((turno, index)=>(

              <div className="turno" key={index}>
                <div className="remitoContainer">
                  <Grid container spacing={24}>
                    <Grid item xs={10}>
                      <span className="remito">Remito {turno.remito}</span>
                    </Grid>
                    <Grid item xs={2}>
                      <span className="condicion">{turno.cond}</span>
                    </Grid>
                  </Grid>
                </div>
                <div className="itemContainer">
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <span className="etiqueta">Producto</span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="descripcion">{turno.producto}</span>
                    </Grid>
                  </Grid>
                </div>
                <div className="itemContainer">
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <span className="etiqueta">Cantidad</span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="descripcion">{turno.cantidad}</span>
                    </Grid>
                  </Grid>
                </div>
                <div className="itemContainer">
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <span className="etiqueta">Razón Social</span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="descripcion">{turno.razonSocial}</span>
                    </Grid>
                  </Grid>
                </div>
                <div className="itemContainer">
                  <Grid container spacing={24}>
                    <Grid item xs={4}>
                      <span className="etiqueta">Destino</span>
                    </Grid>
                    <Grid item xs={8}>
                      <span className="descripcion">{turno.destino}</span>
                    </Grid>
                  </Grid>
                </div>
                <Button color="inherit" onClick={ () => console.info("Detalle") }>
                  <div className="verDetalle">
                    <Icon color="default">
                      add_circle_outline
                    </Icon>
                    <span className="verDetalleTexto">Ver detalle</span>
                  </div>
                </Button>
              </div>
            ))
          }
        </section>

        <style jsx global>{`
          body { 
            margin: 0;
          }
        `}</style>

        <style jsx>{`
          .contenido{
            margin-top: 20px;
          }
          .turno{
            display: flex;
            flex-direction: column;
            margin: 10px;
          }
          .etiqueta{
            font-weight: bold;
            width: 50%;
          }
          .remitoContainer{
            background-color: lightgrey;
            padding: 8px;
            font-size: 1.4rem;
            margin-bottom: 5px;
          }
          .itemContainer{
            border-bottom: 0.5px solid grey;
            padding: 6px 0;
          }
          .condicion{
            background-color: white;
            padding: 2px;
            font-size: 1.2rem;
          }
          .verDetalle{
            font-size: 1.3rem;
            margin: 15px auto;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .verDetalle span{
            padding: 5px;
            text-transform: capitalize;
          }
        `}</style>
        
      </div>
    );
  }
}
