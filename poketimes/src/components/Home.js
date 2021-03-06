import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';

class Home extends Component {

    render() {
        const { posts } = this.props;

        let postList;

        if (posts.length) {
            postList = (
                posts.map(post => {
                    return (
                        <div className="post card" key={post.id}>
                            <div className="card-content">
                                <Link to={'/' + post.id}>
                                    <span className="card-title red-text">
                                        {post.title}
                                    </span>
                                </Link>
    
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
            );
        } else {
            postList = (
                <div className="center">
                    No posts yet!
                </div>
            );
        }

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);