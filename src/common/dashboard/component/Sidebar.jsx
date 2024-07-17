import React from "react";
import { MdOutlineAddHome } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <aside>
        <ul>
          <li>
            <MdOutlineAddHome className="icon" />
            <Link to="">Home</Link>
          </li>
          <li>
            <MdOutlineAddHome className="icon" />
            <Link to="">Home</Link>
          </li>
          <li>
            <MdOutlineAddHome className="icon" />
            <Link to="">Home</Link>
          </li>
          <li>
            <MdOutlineAddHome className="icon" />
            <Link to="">Home</Link>
          </li>
          <li>
            <MdOutlineAddHome className="icon" />
            <Link to="">Home</Link>
          </li>

          <li>
            <MdOutlineAddHome className="icon" />
            <Link to="">Home</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
