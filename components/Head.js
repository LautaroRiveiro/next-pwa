import Head from "next/head";

export default (props) => (
    <div>
        <Head>
            <title>{ props.titulo }</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
        </Head>
    </div>
)
