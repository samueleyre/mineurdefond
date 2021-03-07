import NavComponent from "../main/nav.component";

export function HomeHeaderComponent() {
    return (
        <header>
                <div className="flex">
                    <div className="absolute md:top-5 top-3 w-full flex flex-col items-center">
                        <img className='w-700 max-w-md' style={{filter: "invert(1)"}} src="images/logo-titre.png"/>
                    </div>
                    <NavComponent mode="light" />
                </div>
            </header>
    )
}
