import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";

const NotFoundPage = () => (
    <Layout>
        <MaxWidth size="l" className="Home">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </MaxWidth>
    </Layout>
);

export default NotFoundPage;
