import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "gatsby";

import {MainLayout, Text, MarginLayout, Seo, VerticalSpace} from "components";

import {toggleDarkMode} from "../state/actions";
import {getIsDarkMode} from "../state/selectors";

const IndexPage = ({isDarkMode, toggleMode}) => (
    <MainLayout>
        <Seo title="Home" />
        <MarginLayout>
            <VerticalSpace />
            <Text value="content" bold fontSize={Text.SIZE.SIZE_36} paragraphs />

            <VerticalSpace />
            <button
                onClick={toggleMode}
                type="button"
                style={isDarkMode ? {backgroundColor: "black", color: "white", padding: "10px"} : {backgroundColor: "white", padding: "10px"}}
            >
                Change DarkMode
            </button>

            {/* <Link to="/secondPage/">Go to second page</Link> */}
        </MarginLayout>
    </MainLayout>
);

IndexPage.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isDarkMode: getIsDarkMode(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleMode: () => dispatch(toggleDarkMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
