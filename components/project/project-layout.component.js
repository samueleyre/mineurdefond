
export default function ProjectLayoutComponent({children}) {
    return (
        <div className="ProjectPage mobile:pt-36 bg-white pb-10">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                {children}
            </div>
        </div>
    )
}

