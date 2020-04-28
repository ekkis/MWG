import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
  container: {
    padding: "2em 5em",
    backgroundColor: "black",
    '& > .MuiGrid-item': {
      border: "solid 1px pink",
      paddingBottom: "2em"
    }
  },
  imageContainer: {
    textAlign: "center",
    '& > img': {
      width: "400px"
    },
  },
  textContainer: {
    paddingLeft: "1em",
    '& > a': {
      textTransform: "uppercase"
    }
  },
})
