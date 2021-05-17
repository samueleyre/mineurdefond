import Head from "next/head";

export default function HeadComponent({title}) {

    return <Head>
        <title>Mineurs de fond {title ? "|" : "" } {title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        <meta
            name="description"
            content={`Le collectif des mineurs de fond`}
        />
        <meta property="og:image" content="/images/contact.jpg"/>
    </Head>

}
