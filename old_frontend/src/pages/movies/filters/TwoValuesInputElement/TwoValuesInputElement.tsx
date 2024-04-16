const TwoValuesInputElement = () => {
    const inputContainerCSS = "input-container flex border bg-white border-borderColor rounded-xl w-1/2 px-4 py-2 items-center mb-2 relative";
    const inputCSS = "focus:outline-0 placeholder:capitalize w-full";

    return (
        <div className="from-to-input flex gap-x-2">
            <div
                className={inputContainerCSS}>
                <input placeholder="from" type="text" className={inputCSS}/>
            </div>
            <div className={inputContainerCSS}>
                <input placeholder="to" type="text" className={inputCSS}/>
            </div>
        </div>
    )
}

export default TwoValuesInputElement;