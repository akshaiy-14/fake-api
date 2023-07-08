import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [p,setP] = useState(false);
  const [c, setC] = useState(false);
  const [u, setU] = useState(false);

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const result = await response.json();
    setPosts(result);
    setP(true);
    setC(false);
    setU(false);
  }

  const fetchComments = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const result = await response.json();
    setComments(result);
    setC(true);
    setU(false);
    setP(false);
  }

  const fetchUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const result = await response.json();
    setUsers(result);
    setU(true);
    setP(false);
    setC(false);
  }

  return (
    <>
    <div className="button-container">
      <button onClick={fetchPosts}> Fetch Posts </button>
      <button onClick={fetchComments}> Fetch Comments </button>
      <button onClick={fetchUsers}> Fetch Users </button>
    </div>
    <div>
      <ul>
          {p && posts.map(post => { 
            return (
              <li key={post.id}>
                {post.title}
              </li>
            )
          })}
        </ul>

        <ul>
          {c && comments.map(comment => { 
            return (
              <li key={comment.id}>
                {comment.body}
              </li>
            )
          })}
        </ul>

        <ul>
          {u && users.map(user => { 
            return (
              <li key={user.id}>
                {user.name}
              </li>
            )
          })}
        </ul>
    </div>
    </>
  );
}

export default App;
