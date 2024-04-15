import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import MyBlogs from "./pages/MyBlogs";
import { loadUser } from "./redux/Action";
import { useDispatch } from "react-redux";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/write" element={<CreatePost />} />
      <Route exact path="/posts/post/:id" element={<PostDetails />} />
      <Route exact path="/edit/:id" element={<EditPost />} />
      <Route exact path="/myblogs/:id" element={<MyBlogs />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/teams" element={<Team />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
