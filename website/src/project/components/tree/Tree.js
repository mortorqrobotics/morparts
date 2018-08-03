import React from "react";
import Radium from "radium";

import MakePartModal from "~/project/components/tree/MakePartModal";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Button from "~/shared/components/Button";
import Part from "~/project/components/tree/Part";
import { modalProps } from "~/util/modal"
import styles from "~/project/styles/tree";
import { filterPartType } from "~/util/part";

import { connect } from "react-redux";

@Radium
class Tree extends React.Component {

    state = {
        isModalOpen: false,
        parentId: null,
    }

    renderAddPartButton(parent) {
        return (
            <div
                onClick={() => this.setState({
                        isModalOpen: true,
                        parentId: parent ? parent._id : null,
                })}
                style={styles.button}
            >
                <Glyphicon style={styles.glyph} glyph="plus" />
                Add Part
            </div>
        )
    }

    renderParts(parts) {
        return (
            <div>
                {parts.map(part => (
                    <div key={part._id}>
                        <Part part={part}>
                            {part.isAssembly && this.assemblyTree(part)}
                        </Part>
                    </div>
                ))}
            </div>
        )
    }

    findPart(partId) {
        return this.props.parts.find(part => part._id === partId);
    }

    findParts(partIds) {
        return partIds.map(id => this.findPart(id))
    }

    assemblyTree(assembly) {
        return (
            <div style={styles.assemblyDiv}>
                {this.renderParts(filterPartType(this.findParts(assembly.children.parts), true))}
                {this.renderParts(filterPartType(this.findParts(assembly.children.parts), false))}

                {this.props.selectedPart === assembly._id && this.renderAddPartButton(assembly)}
            </div>
        )
    }

    render() {
        return (
            <div style={styles.container}>
                {this.props.parts.length > 0 && this.renderParts([this.props.parts.find(part => part.isRootAssembly)])}
                <MakePartModal parentId={this.state.parentId} { ...modalProps(this, "isModalOpen") } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        parts: state.parts,
        selectedPart: state.selectedPart,
    }
}

export default connect(mapStateToProps)(Tree);
