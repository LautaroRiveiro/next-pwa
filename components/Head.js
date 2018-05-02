import Head from "next/head";

export default (props) => (
    <div>
        <Head>
            <title>{ props.titulo }</title>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            <link href="./static/maquetas.css" rel="stylesheet"/>   
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
        </Head>
    </div>
)
