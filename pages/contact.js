import dynamic from "next/dynamic";
import Head from "next/head";
import DefaultLayoutComponent from "../components/default/default-layout.component";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Contact() {
    return <>
        <Head>
            <title>Mineurs de fond | Exploration</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
                  rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        </Head>
        <NavComponent mode="light" />
        <div style={{background: "#0d0d0d"}} className="pb-10 pt-20 h-screen bg-cover">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                <h1 className="text-6xl text-center white">CONTACT</h1>
                    <div style={{height: "246px"}} className="flex justify-center items-center">
                        <a className="white text-6xl" href="mailto:c.mineursdefond[at]gmail.com">c.mineursdefond[at]gmail.com</a>
                    </div>
                <img className="m-auto max-w-full" width="600px" src="images/contact-center.png" alt=""/>
            </div>
        </div>
    </>
}

export default Contact
