import React from 'react';

import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions";

import UserHeader from "../../user/components/UserHeader";

interface MyProps {
    fetchPosts: Function
    posts: any
}

class PostList extends React.Component<MyProps, any> {
    componentDidMount(): void {
        this.props.fetchPosts();
    };
    renderList() {
        return this.props.posts.map((post: any) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        })
    };
    render(): any {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    };
}

const mapStateToProps = (state: any) => {
    return { posts: state.posts }
};

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList);


