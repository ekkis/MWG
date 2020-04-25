import React from "react";
import classNames from "classnames";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// components
import Section from "components/Section";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import useStyles from "styles/RifleShotgun.js";

export default () => {
    const classes = useStyles()
    const imageClasses = classNames(
        "slick-image",
        classes.image
    )
    
    return (
    <Section>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6} className="marginAuto">
            <div>
                <img src={image1} alt="First slide" className={imageClasses} />
                <div className="slick-caption">
                    <h4>
                    <LocationOn className="slick-icons" />
                    Yellowstone National Park, United States
                    </h4>
                </div>
            </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} className="marginAuto">
            <div>
                <img src={image2} alt="Second slide" className={imageClasses} />
                <div className="slick-caption">
                    <h4>
                    <LocationOn className="slick-icons" />
                    Somewhere Beyond, United States
                    </h4>
                </div>
            </div>
        </GridItem>
        </GridContainer>
    </Section>
    )
}