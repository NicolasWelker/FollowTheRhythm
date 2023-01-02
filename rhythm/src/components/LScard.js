import React from "react";

const LScard = ({ cardIndex, data }) => {
  return (
    <div>
      {data[cardIndex].map((item) => {
        return (
          <div className="LScard">
            <p>
              {item.title} <br /> {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default LScard;
