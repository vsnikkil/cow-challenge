import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectCows } from "js/state/selectors";

const connectCowList = connect(state => ({
    cows: selectCows(state),
}));

const CowListItem = ({ cow }) => {
    const { name, breed } = cow;

    return (
        <li>
            {name} {breed}
        </li>
    );
};

CowListItem.propTypes = {
    cow: PropTypes.object.isRequired,
};

class CowList extends React.Component {
    render() {
        const { cows } = this.props;
        return (
            <ul>
                {cows.map(c => (
                    <CowListItem key={c.id} cow={c} />
                ))}
            </ul>
        );
    }
}

CowList.propTypes = {
    cows: PropTypes.array.isRequired,
};

export default connectCowList(CowList);
