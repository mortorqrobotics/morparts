import React from "react";
import Radium from "radium";

import { currentUser } from "~/util";
import styles from "~/home/styles";

@Radium
class Heading extends React.Component {
    render() {
        return (
            <div style={styles.heading}>
                <h1>MorParts</h1>
            </div>
        );
    }
}

export default Heading;
