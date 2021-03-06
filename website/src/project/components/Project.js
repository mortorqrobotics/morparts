import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Tree from "~/project/components/tree/Tree";
import Middle from "~/project/components/middle/Middle";
import Heading from "~/project/components/Heading";
import styles from "~/project/styles";

import { makeStore } from "~/util/redux";
import reducers from "~/project/reducers";
import { initialActions } from "~/project/actions";

const store = makeStore(reducers);
initialActions(store.dispatch);

@Radium
class Project extends React.Component {
    render() {
        return (
            <Root pageName="project" store={store}>
                <Navbar />
                <Heading />
                <div style={styles.container}>
                    <Tree />
                    <Middle />
                </div>
            </Root>
        );
    }
}

export default Project;

pageInit(Project);
