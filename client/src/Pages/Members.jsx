import React from "react";
import Navbar from "../Common/Navbar";

const Members = () => {
  const members = [
    { name: "John Doe", position: "CEO" },
    { name: "Jane Smith", position: "CTO" },
    { name: "Mike Johnson", position: "Developer" },
    // Add more members here
  ];

  return (
    <div>
      <h1>Company Members</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
