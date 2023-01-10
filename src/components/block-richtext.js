import React from "react";

const RichText = ({ data }) => {
 
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: data.body.data.childMarkdownRemark.html,
      }}
    />
  );
};

export default RichText;
