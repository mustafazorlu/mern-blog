import "./App.css";
import Post from "./components/Post";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { UserContextProvider } from "./context/UserContext";
import CreatePost from "./pages/CreatePost";
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/register"} element={<Register />} />
                    <Route path={"/create"} element={<CreatePost />} />
                    <Route path={"/post/:id"} element={<PostPage />} />
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;
