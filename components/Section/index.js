/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./style.js";

function Section(props) {
    const { style, className } = props;
    // if (style) import styles from style;
    const classes = styles();
    const sectionClasses = classNames(className, {
        [classes.section]: true
    });
    return (
        <main className={sectionClasses}>
            {props.children}
        </main>
    )
}

Section.propTypes = {
  style: PropTypes.string
}

export default Section