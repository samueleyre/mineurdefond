import dynamic from "next/dynamic";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Contact() {
    return <>
        <NavComponent mode="dark" />

        PAGE de Kolm
    </>
}

export default Contact
