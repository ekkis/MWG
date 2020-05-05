import Carousel from 'react-slick'
import Section from "components/Section"
import {Grid, GridItem} from 'components/Grid'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,

}

export default () => (
  <>
  <Section>
    <Carousel {...settings}>
      <div>
        <img src="/img/bg.jpg" />
      </div>
      <div>
        <img src="/img/bg2.jpg" />
      </div>
    </Carousel>
  </Section>
  <Section>
    <h1>More than a gun</h1>
    <p>
      Be more than just the weapons you carry.  Get know-how too.
      Learn to care for your custom gun and when and how to use it
      safely.  We create a safe, comfortable space for both new and
      seasoned shooters to practice armorer, combat and safety skills
      hands-on.  Courses happen in person at our Culver City showroom
      and workshop in Los Angeles
    </p>
    <a href="">see calendar</a>
  </Section>
  <Section>
    <h1>Combat &amp; certifications</h1>
    <p>
      Not just a piece of paper.  Being certified at Modern Warrior
      Guns means fully knowing a skill, whether it's being able to
      discreetly conceal carry your Warrior Series custom gun or
      wield a knife.  (We'll still give out the piece of paper)
    </p>
    <a href="">see calendar</a>
  </Section>
  <Section>
    <Grid>
      <GridItem xs={6}>
        <img src="/img/bg.jpg" />
      </GridItem>
      <GridItem xs={6}>
        <h1>armorer &amp; cleaning</h1>
        <p>
          Learn armorer skills first hand (from vetted expert armorers).
          Practice and perfect gun cleaning and maintenance, using MWG-selected
          tools and cleaning supplies
        </p>
        <a href="">see calendar</a>
      </GridItem>
    </Grid>    
  </Section>
  <Section>
    <h1>more about gun cleaning and maintenance</h1>
    <p>
      Lorem ipsum
    </p>
    <a href="">Custom gun guide</a>
  </Section>
  </>
)
