import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../Components/Header";

const Layout = styled.main`
    max-width: 70%;
    margin: 0 auto;
    padding: 5rem 0;

    @media (max-width: 850px) {
        max-width: 90%;
    }
`;

function Root() {

    return (
        <Fragment>
            <Header />
            <Layout>
                <Outlet />
            </Layout>
        </Fragment>
    );
}

export default Root;