import { format, formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
    console.log(cover);
    return (
        <div className="hover:scale-[1.02] transition ">
            {/* <div className="post bg-gray-200">
                <div className="image">
                    <Link to={`/post/${_id}`}>
                        <img src={`http://localhost:4000/${cover}`} alt="" />
                    </Link>
                </div>
                <div className="texts">
                    <Link to={`/post/${_id}`}>
                        <h2>{title}</h2>
                    </Link>
                    <p className="info">
                        <span className="author">{author.username}</span>
                        <time>
                            {format(new Date(createdAt), "MMM d yyyy HH:mm")}
                        </time>
                    </p>
                    <p className="summary">{summary}</p>
                </div>
            </div> */}

            <div className="w-full bg-white border-2 border-black overflow-hidden !h-[380px]">
                <Link to={`/post/${_id}`}>
                    <img
                        src={`http://localhost:4000/${cover}`}
                        alt=""
                        className="h-[200px] w-full object-cover"
                    />
                </Link>
                <div className="p-4">
                    <Link to={`/post/${_id}`}>
                        <h2 className="my-1 text-2xl font-bold leading-tight text-gray-800 capitalize">
                            {title}
                        </h2>
                    </Link>
                    <div className="flex items-center mt-2">
                        <p className="text-sm font-medium text-gray-600">
                            by {author.username}
                        </p>
                    </div>
                    <time
                        datetime="2023-03-13"
                        class="text-sm uppercase font-semibold mt-1 text-gray-400"
                    >
                        {format(new Date(createdAt), "MMM d yyyy HH:mm")}
                    </time>
                    <p className="text-sm mt-4 text-gray-700">{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
