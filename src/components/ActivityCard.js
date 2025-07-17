import React from "react";

function ActivityCard({ activity }) {
  return (
    <div className="card">
      <h3>{activity.name}</h3>
      <p><b>Type:</b> {activity.type}</p>
      <p><b>Cost:</b> {activity.cost}</p>
      <p><b>Recommended Age:</b> {activity.age}</p>
      <p><b>Location:</b> {activity.location}</p>
      <p>{activity.desc}</p>
      {activity.link && (
        <a href={activity.link} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      )}
    </div>
  );
}

export default ActivityCard;

