
export default function ProjectRockComponent({title, description}) {
    return (
        <div className="h-screen w-full bg-white">
            <div className="h-full flex justify-center items-center">
                <div className="max-w-full mobile:bg-cover sm:bg-contain bg-center bg-no-repeat flex justify-center flex-col" style={{height: "800px", width: "800px", backgroundImage: "url(/images/projectPage_rock.png)"}}>
                    <h1 className="font-amatic pr-32 pl-32 pt-5 pb-5 text-center text-8xl text-white">{title}</h1>
                    <p className="mobile:pr-4 mobile:pr-5 sm:pr-32 sm:pl-32 pt-1 pb-1 text-center text-xl text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}



