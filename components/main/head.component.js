import Head from "next/head";

export default function HeadComponent({title, meta_description = "Le collectif des mineurs de fond"}) {

    return <Head>
        <title>Mineurs de fond {title ? "|" : "" } {title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet"/>
        <meta
            name="description"
            content= {meta_description}
        />
        <meta name="keywords" content="mineurs de fond, musique, concert, collectif, pantomines, festival"/>
        <meta property="og:image" content="/images/contact.jpg"/>
    </Head>

}
