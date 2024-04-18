const Overlay = () => {
    return (
        <div
            className="absolute responsive:bg-small-banner w-full h-full">
            <div className="flex h-full flex-col responsive:hidden">
                <div className="h-auto w-full flex-grow bg-gradient-to-t from-banner-center to-banner-top"></div>
                <div className="h-24 w-full bg-gradient-to-t from-banner-bottom to-banner-center"></div>
            </div>
        </div>
    )
}

export default Overlay;