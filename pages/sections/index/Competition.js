import Section from 'components/Section'
import {Grid, GridItem} from 'components/Grid'
import Carousel from "react-slick"
import styles from 'styles/Competition'

export default () => {    
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: false,
    }

    const cs = styles()
    return (
        <Section className={cs.container}>
        <Grid>
        <GridItem xs={3}>
            <Carousel {...settings}>
                <div>
                    <img src="/img/bg4.jpg" />
                </div>
                <div>
                    <img src="/img/bg7.jpg" />
                </div>
            </Carousel>
        </GridItem>
        <GridItem xs={3}>
            <Carousel {...settings}>
                <div>
                    <img src="/img/bg.jpg" />
                </div>
                <div>
                    <img src="/img/bg2.jpg" />
                </div>
            </Carousel>
        </GridItem>
        <GridItem xs={3}>
            <Carousel {...settings}>
                <div>
                    <img src="/img/bg4.jpg" />
                </div>
                <div>
                    <img src="/img/bg7.jpg" />
                </div>
            </Carousel>
        </GridItem>
        <GridItem xs={3}>
            <Carousel {...settings}>
                <div>
                    <img src="/img/bg.jpg" />
                </div>
                <div>
                    <img src="/img/bg2.jpg" />
                </div>
            </Carousel>
       </GridItem>
        </Grid>
        </Section>
    )
}