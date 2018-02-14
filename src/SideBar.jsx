import React from 'react';

export default ({ members, zoomMember }) => {
  return (
    <div className="sidebar">
      <ul>
        {members.map(m => {
          return (
            <li onClick={() => zoomMember(m.location)} key={m.id}>
              {m.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
