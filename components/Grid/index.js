// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const ItemStyles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    // paddingRight: "15px",
    // paddingLeft: "15px",
    flexBasis: "auto"
  }
}

function Item(props) {
  const classes = makeStyles(ItemStyles)()
  const { children, className, ...rest } = props
  return (
    <Grid item {...rest} className={classes.grid + " GridItem " + className}>
      {children}
    </Grid>
  )
}

Item.defaultProps = {
  className: ""
}

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

const ContainerStyles = {
  grid: {
    // marginRight: "-15px",
    // marginLeft: "-15px",
    width: "auto"
  }
}

function Container(props) {
  const classes = makeStyles(ContainerStyles)()
  const { children, className, ...rest } = props
  return (
    <Grid container {...rest} className={classes.grid + " Grid " + className}>
      {children}
    </Grid>
  )
}

Container.defaultProps = {
  className: ""
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export {Container as Grid, Item as GridItem}