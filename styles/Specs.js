import { makeStyles } from "@material-ui/core/styles";
export default makeStyles({
  leftPane: {
    backgroundColor: "white",
    padding: "2em 0",
    "& > ul": {
      listStyle: "none",
      textAlign: "center",
      width: "10em",
      margin: "0 auto",
      border: "none 2px blue",
      paddingLeft: 0
    },
    "& li": {
      width: "10em",
      textAlign: "center",
      border: "none 1px red"
    },
    "& img": {
      width: "50px",
      height: "50px",
      borderRadius: "25px"
    },
    "& .h1": {
      color: "wheat",
      fontWeight: "bold"
    }
  },
  rightPane: {
    backgroundColor: "black",
    padding: "2em 4em",
    "& h1": {
      borderTop: "solid 2px blue",
      marginTop: "6em",
      width: "400px"
    },
    "& p": {
      width: "400px"
    },
    "& img": {
      position: "absolute",
      marginLeft: "-250px",
      width: "500px"
    }
  },
})
