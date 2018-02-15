import React from 'react';

import images from './img';

export default ({ members, zoomMember, selectMember }) => {
  return (
    <div className="sidebar">
      <h2 className="title">Meet the team!</h2>
      <ul className="list">
        {members.map(m => {
          return (
            <li
              onClick={() => {
                zoomMember(m.location);
                selectMember(m);
              }}
              key={m.id}
              className="list-item"
            >
              {m.name}
            </li>
          );
        })}
      </ul>
      <a
        className="list-item clear-link"
        href="https://github.com/B-AIM-KnowledgeFlow/b-aim-knowledgeflow.github.io"
      >
        <img src={images.github} alt="github icon" />&nbsp; View on GitHub
      </a>
    </div>
  );
};
