
export default function ProjectLayoutComponent(
    {
        bgColor = "white",
        className = "ProjectPage mobile:pt-28 pb-10",
        subClassName = "mobile:p-2 mobileToTabloid:p-10 max-w-screen-lg m-auto",
        children
    }) {
    return (
        <div className={className} style={{ backgroundColor: bgColor }}>
            <div className={subClassName}>
                {children}
            </div>
        </div>
    )
}

