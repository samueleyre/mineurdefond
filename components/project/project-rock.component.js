import dynamic from "next/dynamic";
import HeadComponent from "../main/head.component";

const NavComponent = dynamic(() => import('../main/nav.component'), {ssr: false})

export default function ProjectRockComponent({title, bgMobileClass="bg-white", description, meta_description = null, image_name = "projectPage_rock.webp", children}) {
    return (
        <>
            <HeadComponent title={title} meta_description={meta_description}/>
            <NavComponent mode="dark" sm_mode="light" position="fixed"/>
            <div className={"h-screen w-full mobile:pb-56 " + bgMobileClass}>
                <div className="h-full flex justify-center items-center">
                    <div
                        className="animate-fadeIn max-h-screen max-w-full mobile:bg-cover sm:bg-contain bg-center bg-no-repeat flex justify-center flex-col"
                        style={{height: "800px", width: "800px", backgroundImage: `url(/images/${image_name})`, rotate: "-9deg"}}>
                        {children ?
                            children :
                                <>
                                    <h1 className="font-cameo sm:pr-32 sm:pl-32 pt-5 pb-5 text-center mobile:text-5xl sm:text-7xl text-gradient-color">{title}</h1>
                                    <p className="mobile:pl-5 mobile:pr-5 sm:pr-32 sm:pl-32 pt-1 pb-1 text-center text-xl text-white">{description}</p>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}



