
export default function ProjectLayoutComponent({bgColor = "white", children}) {
    return (
        <div className="ProjectPage mobile:pt-28 pb-10" style={{ backgroundColor: bgColor }}>
            <div className=" mobile:p-2 mobileToTabloid:p-10 max-w-screen-lg m-auto">
                {children}
            </div>
        </div>
    )
}

