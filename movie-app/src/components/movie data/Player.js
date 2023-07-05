import React from "react";

function Player({ youtubeId }) {
  return (
    <div style={{ width: "100%", height: "80%", padding: "0px" }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="title"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default Player;
