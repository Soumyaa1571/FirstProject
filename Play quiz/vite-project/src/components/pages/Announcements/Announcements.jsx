import React from "react";
import "./Announcements.css";
import { Link } from "react-router-dom";

const Announcements = () => {
  return (
    <div className="main">
      <div className="card">
        <h4>Make an Announcement</h4>
        <div className="actions">
          <Link to={"/Sheet"}>
            <button className="btn">Lets Proceed</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <h4>View the Announcements</h4>
        <div className="actions">
          <Link to={"/getSheet"}>
            <button className="btn">Click here!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Announcements;
