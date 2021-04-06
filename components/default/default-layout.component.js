
export default function DefaultLayoutComponent({children}) {
    return (
        <div className="pb-10 pt-20">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                {children}
            </div>
        </div>
    )
}

