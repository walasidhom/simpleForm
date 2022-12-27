import React from "react";
import { Link } from "react-router-dom";

const Home = ({ userList }) => {
  return (
    <>
      {userList.map((user) => (
        <div>
          <div class="card">
            <h5 class="card-header">
              {user.name} {user.username}
            </h5>
            <div class="card-body">
              <h5 class="card-title">{user.address.street}</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content. With supporting text below as a natural lead-in to
                additional content. With supporting text below as a natural
                lead-in to additional content.
              </p>
              <Link to="/checkpoints" class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
