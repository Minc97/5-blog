import React from 'react'

import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";

class UserHeader extends React.Component<any, any> {
    componentDidMount(): void {
        this.props.fetchUser(this.props.userId)
    }

    render(): any {
        return <div>User Header</div>;
    }
}

export default connect(null, {fetchUser: fetchUser})(UserHeader);