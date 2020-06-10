import {Typography, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

import Section from 'components/Section'
import Button from 'components/Button/Outline'
import Link from 'components/Button/Link'
import { Grid, GridItem } from 'components/Grid'

const ImgDir = '/img/Contact/'
export default () => (
   <>
   <Contact />
   <RequestQuote />
   <Showrooms />
   </>
)

const styles = theme => ({
   contact: {
      backgroundColor: 'white',
      backgroundImage: `url(${ImgDir + 'samurai-san-watermark.png'})`,
      padding: '2em'
   },
   GridItem: {
      padding: '2em'
   }
})

function Contact() {
   const classes = makeStyles(styles)()
   return (
      <Section className={classes.contact}>
         <Typography variant="h4">
            Contact Us
         </Typography>
         <Grid>
            <GridItem xs={6} className={classes.GridItem} style={{borderRight: '1px solid black'}}>
               <Typography variant="h5">
                  Client support
               </Typography>
               <Typography variant="body1">
                  Check out the Custom Gun Guide to learn more about how to care 
                  for your Modern Warrior Guns custom firearms.
               </Typography>
               <Typography variant="h5">
                  Sales
               </Typography>
               <Typography variant="body1">
                  Explore Warrior Series custom guns or to start your fully custom 
                  gun project, request a quote below.
               </Typography>
            </GridItem>
            <GridItem xs={6} className={classes.GridItem}>
               <Typography variant="h5">
                  Education
               </Typography>
               <Typography variant="body1">
                  See available courses and sign up.
               </Typography>
               <Typography variant="h5">
                  Contact
               </Typography>
               <Typography variant="body1">
                  info@modernwarriorguns.com
                  855-MWG-1911 (855-694-1911) | phone hours: 9 am PT–6 pm PT
                  To ensure quality service, showrooms are by appointment only.
                  See locations &gt;
               </Typography>
            </GridItem>
         </Grid>
      </Section>
   )
}

function RequestQuote() {
   return (
      <>
      <Typography variant="h4">
         Request a Quote
      </Typography>
      <Typography variant="body1">
         To start your fully custom gun project, complete and send this form.
      </Typography>
      <TextField id="first-name" label="First name" />
      <TextField id="last-name" label="Last name" />
      <TextField id="e-mail" label="Email address" />
      <TextField id="phone-nbr" label="Phone number" />
      <TextField id="comments" multiline label="Message" />
      <Button>Send</Button>
      </>
   )
}

function Showrooms() {
   return (
      <>
      <Typography variant="h4">
         Showrooms
      </Typography>
      <Typography variant="body1">
         Get hands on with Warrior Series custom guns and discuss 
         your fully custom gun project with an MWG armorer in person. 
         Showrooms are open by appointment only.
      </Typography>
      <img src={ImgDir + 'samurai-san-watermark.png'} />
      <Typography variant="body1">
         Culver City, Los Angeles, CA
      </Typography>
      <Link>
         Visit us
      </Link>
      <Link>
         Courses at Culver City
      </Link>
      </>
   )
}