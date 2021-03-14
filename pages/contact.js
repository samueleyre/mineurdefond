import dynamic from "next/dynamic";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Contact() {
    return <>
        <NavComponent mode="light" />
        <h1>PAGE CONTACT</h1>
    </>
}

export default Contact
