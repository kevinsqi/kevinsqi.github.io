import React from 'react';

const Bio = () => {
  const author = 'Kevin Qi';

  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <img
        src="/assets/bio/profile-pic.jpg"
        alt={author}
        className="rounded-circle"
        style={{ width: 70, height: 70 }}
      />
      <p className="ml-3">
        Personal blog by <strong>{author}</strong>.
      </p>
    </div>
  );
};

export default Bio;
