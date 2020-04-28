import classNames from "classnames";
import LocationOn from "@material-ui/icons/LocationOn";
// components
import {Grid, GridItem} from 'components/Grid'
import Section from 'components/Section'
import styles from "styles/RifleShotgun";

export default () => {
    const classes = styles()
    const imageClasses = classNames(
        "slick-image",
        classes.image
    )
    
    return (
        <Section>
        <Grid>
        <GridItem xs={12} sm={12} md={6} className="marginAuto">
            <div>
                <img src='/img/bg2.jpg' alt="First slide" className={imageClasses} />
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
                <img src='/img/bg.jpg' alt="Second slide" className={imageClasses} />
                <div className="slick-caption">
                    <h4>
                    <LocationOn className="slick-icons" />
                    Somewhere Beyond, United States
                    </h4>
                </div>
            </div>
        </GridItem>
        </Grid>
        </Section>
    )
}