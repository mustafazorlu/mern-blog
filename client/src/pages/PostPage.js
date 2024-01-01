import { formatISO9075 } from "date-fns";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    console.log(postInfo);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then((response) => response.json())
            .then((post) => {
                setPostInfo(post);
            });
    }, []);

    if (!postInfo) return "";
    return (
        <>
            {/* <div className="post-single">
                <h1 className="post-title">{postInfo.title}</h1>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
                <div className="author">by {postInfo.author.username}</div>
                <div className="image-wrapper">
                    <img
                        src={`http://localhost:4000/${postInfo.cover}`}
                        alt=""
                    />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </div> */}

            <div class="col-md-8 mx-auto">
                <h1 className="text-center font-medium text-[2.5rem]">
                    {postInfo.title}
                </h1>
                <div className="py-3 text-dark flex items-center justify-center">
                    <small class="mr-3 flex flex-row items-center">
                        <span class="ml-1">
                            {formatISO9075(new Date(postInfo.createdAt))}
                        </span>
                    </small>
                    <small>
                        <div class="flex flex-row items-center text-dark mr-3">
                            <svg
                                class="text-indigo-600"
                                fill="currentColor"
                                height="16px"
                                aria-hidden="true"
                                role="img"
                                focusable="false"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                ></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                            <span class="ml-1">{postInfo.author.username}</span>
                        </div>
                    </small>
                </div>
                <img
                    src={`http://localhost:4000/${postInfo.cover}`}
                    alt=""
                    className="h-[400px] w-full object-cover"
                />
            </div>

            <div className="col-md-8 mx-auto"></div>

            <div className="mt-10">
                <div className="text-secondary">
                    <p className="my-2 text-[#6c757d] text-lg font-light">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: postInfo.content,
                            }}
                        />
                    </p>
                </div>
            </div>
        </>
    );
};

export default PostPage;
