import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const handelroomjoin = useCallback(() => {
        if (value) {
            navigate(`/room/${value}`);
        } else {
            alert("Please enter a room code");
        }
    }, [value, navigate]);
    

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p className="">This is the main landing page of our application.</p>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Please Enter Call Name" />
        <button onClick={handelroomjoin}>Join Room</button>
      <p>Feel free to explore the other sections.</p>
    </div>

  );
}

export default Home;