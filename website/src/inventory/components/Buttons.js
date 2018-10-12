import React from "react";
import Radium from "radium";

import Button from "~/shared/components/Button";

@Radium
class FirstLoad extends React.Component {
    render() {
        return (
            <div>
                <Button text="Load from Template" />
                <Button text="Create from Scratch" />
            </div>
        );
    }
}

export default FirstLoad;
