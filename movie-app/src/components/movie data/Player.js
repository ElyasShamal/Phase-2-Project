import React from "react";

function Player({ youtubeId }) {
  return (
    <div style={{ width: "100%", height: "80%", padding: "0px" }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="yes"
      ></iframe>
    </div>
  );
}

export default Player;
