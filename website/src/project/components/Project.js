import React from "react";
import Radium from "radium";

import Root, { pageInit } from "~/shared/components/Root";
import Navbar from "~/shared/components/navbar/Navbar";
import Tree from "~/project/components/tree/Tree";
import Middle from "~/project/components/middle/Middle";

import { makeStore } from "~/util/redux";
import reducers from "~/project/reducers";
const store = makeStore(reducers);
import { initialActions } from "~/project/actions";
initialActions(store.dispatch);

@Radium
export default class Project extends React.Component {

    render() {
        return (
            <Root pageName="project" store={store}>
                <Navbar />
                <div style={{ height: "100%" }}>
                    <Tree />
                    <Middle />
                </div>
            </Root>
        )
    }
}

pageInit(Project);
