import propTypes from "prop-types";
import React from "react";
import GifGridUser from "./GifGridUser";

const GifGridItem = ({ url, title, user }) => {
  return (
    <div className="card">
      <img src={url} alt={title} title={title} />
      <p>{title}</p>
      {user && <GifGridUser user={user} />}
    </div>
  );
};

GifGridItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  user: propTypes.object,
};

export default GifGridItem;
