import { useState } from "react";
import "./App.css";
import ContentList from "./ContentList.js";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [p,setP] = useState(false);
  const [c, setC] = useState(false);
  const [u, setU] = useState(false);

  const fetchPosts = async () => {
    try {
      setFetchError(null);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!response.ok) throw Error("Check the API source URL");
      const result = await response.json();
      setPosts(result);
      setP(true);
      setC(false);
      setU(false);
    }
    catch (err) {
      setFetchError(err.message);
    }
  }

  const fetchComments = async () => {
    try {
      setFetchError(null);
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      if (!response.ok) throw Error("Check the API source URL");
      const result = await response.json();
      setComments(result);
      setC(true);
      setU(false);
      setP(false);
    }
    catch (err) {
      setFetchError(err.message);
    }
  }

  const fetchUsers = async () => {
    try {
      setFetchError(null);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      if (!response.ok) throw Error("Check the API source URL");
      const result = await response.json();
      setUsers(result);
      setU(true);
      setP(false);
      setC(false);
    }
    catch (err) {
      setFetchError(err.message);
    }
  }

  return (
    <>
    <Header />
    <br></br>
    <div className="button-container">
      <button onClick={fetchPosts}> Fetch Posts </button>
      <button onClick={fetchComments}> Fetch Comments </button>
      <button onClick={fetchUsers}> Fetch Users </button>
    </div>
    {fetchError && <h2> ERROR: {fetchError} </h2>}
    {!fetchError && <div>
      <ContentList p={p} c={c} u={u} posts={posts} comments={comments} users={users} />
    </div> }
    
    </>
  );
}

export default App;
