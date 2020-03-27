import React from "react";
import {Link} from "gatsby";

import {MainLayout, Text, MarginLayout, Seo} from "components";

const IndexPage = () => (
    <MainLayout>
        <Seo title="Home" />

        <MarginLayout>
            <Text value="content" bold fontSize={Text.SIZE.SIZE_36} paragraphs />
        </MarginLayout>

        <Link to="/page-2/">Go to page 2</Link>
    </MainLayout>
);

export default IndexPage;
