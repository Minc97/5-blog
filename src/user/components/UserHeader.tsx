import React from 'react'

import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";

class UserHeader extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.fetchUser(this.props.userId)
    }
    render(): any {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return { user: state.users.find((user: any) =>  user.id === ownProps.userId)}
};

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);
