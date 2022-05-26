import dynamic from "next/dynamic";

const NavComponent = dynamic(() => import('../main/nav.component'), {ssr: false})


export function HomeHeaderComponent() {
    return (
        <header>
                <div className="flex">
                    <div className="absolute md:top-5 top-5 w-full flex flex-col items-center">
                        <img alt="mineurs de fond" className='w-85 max-w-full' style={{filter: "invert(1)"}} src="images/logo-titre.webp"/>
                    </div>
                    <NavComponent mode="light" />
                </div>
            </header>
    )
}
