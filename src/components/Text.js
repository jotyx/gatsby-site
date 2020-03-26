import React from "react";
import PropTypes from "prop-types";

import style from "./Text.module.scss";

export const Text = ({value}) => (
    <span className={style.root}>
        {value}
    </span>
);

Text.propTypes = {
    value: PropTypes.string.isRequired,
};
