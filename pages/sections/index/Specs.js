import {Grid, GridItem} from 'components/Grid'
import Section from 'components/Section'
import styles from 'styles/Specs'

export default () => {
    const cs = styles()
    return (
        <Section>
        <Grid>
        <GridItem xs={6} className={cs.leftPane}>
            <ul>
                <li><img src='/img/bg.jpg' /></li>
                <li class='h1'>2' Handgun Accuracy</li>
                <li class='p'>At 50 yards</li>
                <li><img src='/img/bg.jpg' /></li>
                <li class='h1'>1/4' Rifle Accuracy</li>
                <li class='p'>At 100 yards</li>
                <li><img src='/img/bg.jpg' /></li>
                <li class='h1'>5,000+ Rounds</li>
                <li class='p'>0 Malfunctions</li>
                <li><img src='/img/bg.jpg' /></li>
                <li class='h1'>20-50% Reduced Recoil</li>
                <li class='p'>Than Factor Firearms</li>
                <li><img src='/img/bg.jpg' /></li>
                <li class='h1'>100% Custom Made</li>
                <li class='p'>Made to Order</li>
            </ul>
        </GridItem>
        <GridItem xs={6} className={cs.rightPane}>
            <img src='/img/bg.jpg' />
            <h1>"AND," NOT "OR"</h1>
            <p>
                Some guns are reliable.  Others are about
                speed and top-tier performance Warrior Series
                guns are both -- because your custom gun
                should work just as well at the range and
                at home.  That's our mission
            </p>
        </GridItem>
        </Grid>
        </Section>
    )
}