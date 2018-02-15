import React from 'react';

export default ({ members, zoomMember, selectMember }) => {
  return (
    <div className="sidebar">
      <ul>
        {members.map(m => {
          return (
            <li
              onClick={() => {
                zoomMember(m.location);
                selectMember(m);
              }}
              key={m.id}
            >
              {m.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
