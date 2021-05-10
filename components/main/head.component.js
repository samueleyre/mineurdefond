import Head from "next/head";

export default function HeadComponent({title}) {

    return <Head>
        <title>Mineurs de fond | {title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
    </Head>

}
