import {HomeHeaderComponent} from "../components/home/home-header.component";
import HomeMainComponent from "../components/home/home-main.component";
import Head from "next/head";

function Index() {
    return (
        <>
            <Head>
                <title>Mineurs de fond</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="bg-no-repeat w-full bg-cover " style={{backgroundImage: "url(/images/home_bg.png)"}}>
                <HomeHeaderComponent/>
                <HomeMainComponent/>
            </div>
        </>

    )
}

export default Index
