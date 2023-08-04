import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Root() {

    return (
        <Fragment>
            <Outlet />
        </Fragment>
    );
}

export default Root;