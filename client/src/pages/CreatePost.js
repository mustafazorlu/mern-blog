import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
    ],
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
];

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async (e) => {
        e.preventDefault();

        if(!title || !summary || !content){
            return
        }
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", files[0]);

        console.log(files[0]);
        const response = await fetch("http://localhost:4000/post", {
            method: "POST",
            body: data,
            credentials:'include'
        });

        console.log(response);

        if (response.ok === true) {
            setRedirect(true);
        }
    };

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <form onSubmit={createNewPost}>
            <input
            className="border-black border-2 mb-3"
                type="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
            className="border-black border-2 mb-3"
                type="summary"
                placeholder="Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />
            <input className="border-black border-2 mb-3" type="file" onChange={(e) => setFiles(e.target.files)} />
            <ReactQuill
            className="border-black border-2 mb-3"
                value={content}
                modules={modules}
                formats={formats}
                onChange={(value) => setContent(value)}
            />
            <button className="bg-black text-white" style={{ marginTop: "5px" }}>Create Post</button>
        </form>
    );
};

export default CreatePost;
