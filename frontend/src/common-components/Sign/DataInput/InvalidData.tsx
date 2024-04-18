type InvalidDataProps = {
    wrong: boolean;
}

const  InvalidData = (props: InvalidDataProps) => {
    const {wrong} = props;

    return (
        <>
            {wrong ?
                <p className="text-red-400">Username or password is invalid.</p>
                : null}
        </>
    )
}

export default InvalidData;