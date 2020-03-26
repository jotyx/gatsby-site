import React from "react";
import {Link} from "gatsby";

import {MainLayout, Text} from "components";
import SEO from "../components/seo";
import "../styles/index.scss";

const IndexPage = () => (
    <MainLayout>
        <SEO title="Home" />

        <Text value="content" />

        <Link to="/page-2/">Go to page 2</Link>
    </MainLayout>
);

export default IndexPage;
