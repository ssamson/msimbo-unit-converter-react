import React from "react";

export default function Card({ color, title, value }) {
  return (
    <div className={`card bg-${color} mb-3`}>
      <div className="card-header">
        <h4>{title}</h4>
        <h4>{value}</h4>
      </div>
    </div>
  );
}
