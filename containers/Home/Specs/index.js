
import { makeStyles } from '@material-ui/core/styles'

import { Grid, GridItem } from 'components/Grid'
import Section from 'components/Section'
import { Fragment } from 'react';

const useStyles = makeStyles(theme => ({
  leftPane: {
    backgroundColor: 'white',
    padding: '2em 0',
    '& > ul': {
      listStyle: 'none',
      textAlign: 'center',
      width: '10em',
      margin: '0 auto',
      border: 'none 2px blue',
      paddingLeft: 0
    },
    '& li': {
      width: '10em',
      textAlign: 'center',
      border: 'none 1px red'
    },
    '& img': {
      width: 50,
      height: 50,
      borderRadius: 25
    },
    '& .h1': {
      color: 'wheat',
      fontWeight: 'bold'
    }
  },
  rightPane: {
    backgroundColor: 'black',
    padding: '2em 4em',
    '& h1': {
      borderTop: 'solid 2px blue',
      marginTop: '6em',
      width: 400
    },
    '& p': {
      width: 400
    },
    '& img': {
      position: 'absolute',
      marginLeft: -250,
      width: 500
    }
  }
}));

const SPECS_ITEMS = [
  {
    imageUrl: '/img/bg.jpg',
    title: '2\' Handgun Accuracy',
    description: 'At 50 yards'
  },
  {
    imageUrl: '/img/bg.jpg',
    title: '1/4\' Rifle Accuracy',
    description: 'At 100 yards'
  },
  {
    imageUrl: '/img/bg.jpg',
    title: '5,000+ Rounds',
    description: '0 Malfunctions'
  },
  {
    imageUrl: '/img/bg.jpg',
    title: '20-50% Reduced Recoil',
    description: 'Than Factor Firearms'
  },
  {
    imageUrl: '/img/bg.jpg',
    title: '100% Custom Made',
    description: 'Made to Order'
  }
]

const Specs = () => {
  const classes = useStyles();

  return (
    <Section>
      <Grid>
        <GridItem xs={6} className={classes.leftPane}>
          <ul>
            {
              SPECS_ITEMS.map((item, index) => (
                <Fragment key={index}>
                  <li><img src={item.imageUrl} /></li>
                  <li className='h1'>{item.title}</li>
                  <li className='p'>{item.description}</li>
                </Fragment>
              ))
            }
          </ul>
        </GridItem>
        <GridItem xs={6} className={classes.rightPane}>
          <img src='/img/bg.jpg' />
          <h1>'AND,' NOT 'OR'</h1>
          <p>
            Some guns are reliable.  Others are about
            speed and top-tier performance Warrior Series
            guns are both -- because your custom gun
            should work just as well at the range and
            at home. That's our mission
          </p>
        </GridItem>
      </Grid>
    </Section>
  )
}

export default Specs;