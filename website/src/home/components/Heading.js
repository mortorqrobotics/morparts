import React from "react";
import Radium from "radium";

import { currentUser } from "~/util";
import styles from "~/home/styles/heading";

@Radium
class Heading extends React.Component {

    render() {
        return (
            <div style={styles.heading}>
                <h1>MorParts</h1>
                <h5>Welcome, {currentUser.firstname}</h5>
            </div>
        )
    }
}

export default Heading;
