
export default function ProjectLayoutComponent({children}) {
    return (
        <div className="ProjectPage bg-white pb-10">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                {children}
            </div>
        </div>
    )
}

