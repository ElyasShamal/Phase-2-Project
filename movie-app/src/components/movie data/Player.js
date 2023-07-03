import React from "react";

function Player({ youtubeID }) {
  return (
    <div>
      <iframe
        style={{ borderRadius: "12px" }}
        title="title"
        src={`https://open.spotify.com/embed/album/${youtubeID}?utm_source=generator`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Player;
