import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log("error", error);
    return <>
        <div>Something went wrong</div>
        <div>
            status : {error.status } status text : { error.statusText}
        </div>
    </>
}

export default Error;