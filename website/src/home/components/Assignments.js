import React from "react";
import Radium from "radium";

import Container from "~/home/components/Container";
import styles from "~/home/styles";
import { updateStatus } from "~/project/actions";
import { completeAssignment } from "~/home/actions";
import { connect } from "react-redux";

@Radium
class Assignments extends React.Component {

    render() {
        return (
            <Container title="Assignments">
                {this.props.assignments.map(assignment => (
                    <div style={{}}>
                        <div style={{}}>
                            <Button
                                style={{}}
                                text="Completed"
                                onClick={dispatch(completeAssignment(assignment.id))}
                            />
                            <Button
                                style={{}}
                                text="Work In Progress"
                                onClick={updateStatus("designing", assignment.part)}
                            />
                        </div>
                        <p style={{}} tooltip={assignment.description}>
                            {assignment.name}
                        </p>
                        <div style={{}}>
                            <p style={{}}>{assignment.path}</p>
                            <p style={{}}>{assignment.part._id}</p>
                        </div>
                    </div>
                ))}
            </Container>
        );
    }
}

const getAssignmentsDue = assignments => []; // (assignments || [])
// .filter(assignment => assignment.done)
// .sort(assignment => assignment.date)
// .reverse();

const mapStateToProps = state => ({
    assignments: getAssignmentsDue(state.assignments),
});

export default connect(mapStateToProps)(Assignments);
