import {Grid, GridItem} from 'components/Grid'
import styles from "styles/PartsCustom"

export default () => {
    const cs = styles()
    return (
        <Grid className={cs.container}>
        <GridItem xs={6} className={cs.imageContainer}>
            <img src='/img/bg.jpg' alt="" />
        </GridItem>
        <GridItem xs={6} className={cs.textContainer}>
            <h1>Parts</h1>
            <p>
                Your gun's only as reliable as the parts inside it
            </p>
            <a href="">Shop parts &gt;</a>
        </GridItem>
        <GridItem xs={6} className={cs.imageContainer}>
            <img src='/img/bg2.jpg' alt="" />
        </GridItem>
        <GridItem xs={6} className={cs.textContainer}>
            <h1>Customize</h1>
            <p>
                See, feel and trust each shot
            </p>
            <a href="">Learn more &gt;</a>
        </GridItem>
        <GridItem xs={6} className={cs.imageContainer}>
            <img src='/img/bg3.jpg' alt="" />
        </GridItem>
        <GridItem xs={6} className={cs.textContainer}>
            <h1>Gunsmithing</h1>
            <p>
                Gun repairs and detailed gun cleaning and maintenance
            </p>
            <a href="">Shop services &gt;</a>
        </GridItem>
        </Grid>
    )
}