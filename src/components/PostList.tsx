import React from 'react';
import { connect } from "react-redux";

import { fetchPosts } from "../redux/actions";

interface MyProps {
    fetchPosts: Function
}

class PostList extends React.Component<MyProps, any> {
    componentDidMount(): void {
        this.props.fetchPosts();
    }

    render(): any {
        return <div>Post List</div>;
    }
}

export default connect(null, {fetchPosts: fetchPosts})(PostList);


