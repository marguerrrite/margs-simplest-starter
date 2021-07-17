import React from "react";
import Layout from "components/Layout/Layout";
import MaxWidth from "components/_ui/MaxWidth/MaxWidth";
import "./index.scss";

const HomePage = () => (
    <Layout>
        <MaxWidth size="l" className="Home">
            <div className="Home__greeting">
                Hello! I'm Marguerite — a designer and software engineer.
            </div>
        </MaxWidth>
    </Layout>
)

export default HomePage;