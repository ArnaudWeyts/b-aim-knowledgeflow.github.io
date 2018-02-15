import React from 'react';

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
    </div>
  );
};
