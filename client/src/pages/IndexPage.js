import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/post").then((response) => {
            response.json().then((posts) => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <div className="post_grid">{posts.length > 0 && posts.map((post, index) => <Post key={index} {...post} />)}</div>
    );
};

export default IndexPage;
