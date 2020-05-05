import { container } from "assets/jss/nextjs-material-kit.js";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    backgroundColor: "black"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  gridItem: {
    border: "none 1px red",
    padding: "0 3em"
  },
  gridContainer: {
    border: "none 1px blue",
    width: "100%"
  }
})