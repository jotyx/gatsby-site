import React from "react";

import {MainLayout, Seo} from "components";

const NotFoundPage = () => (
    <MainLayout>
        <Seo title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MainLayout>
);

export default NotFoundPage;
