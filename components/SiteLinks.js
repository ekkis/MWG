/*eslint-disable*/
import React from "react";
import {List, ListItem} from "@material-ui/core";

export default function() {
    var links = [
        "Home", "Custom Guns", "Our Work", "Custom Services",
        "Courses", "Gun Guide", "Account Login", "Shipping & Returns",
        "Privacy Policy", "Terms & Conditions", "Contact"
    ]
    var ListItems = []
    for (var i = 0; i < links.length; i++) {
        ListItems.push(<ListItem>{links[i]}</ListItem>)
    }
    return (
        <>
        <List id="testlist">
            {ListItems}
        </List>
        <style jsx>
        {`
            List, #testlist {
                column-width: 14em
            }
            ListItem {
                border: solid 1px black
            }
        `}
        </style>
        </>
    )
}
