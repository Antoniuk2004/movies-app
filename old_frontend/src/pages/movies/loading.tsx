const Loading = () => {
    console.log("Loading...");

    return (
        <div className="loader-container h-screen flex items-center justify-center">
            <div className="loader h-16 w-16 border-4 rounded-full border-l-primaryColor animate-spin"></div>
        </div>
    )
}

export default Loading;