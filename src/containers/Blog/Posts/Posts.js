import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import "./Posts.module.css";
// import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  postSelectedHandler = id => {
    this.props.history.push({pathname: "/posts/" + id});
    // idem: this.props.history.push({"/posts" + id});
};

  componentDidMount() {
    console.log(this.props);

    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
      });
    // this.setState({error:true})
  }
  render() {

    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
        //   <Link to={"/posts/" + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
              key={post.id}
            />
        //   </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
        {/* "/posts/:id" */}
        {/*   */}
      </div>
    );
  }
}
export default Posts;
