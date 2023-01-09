/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Image from "./block-image";
import RichText from "./block-richtext";

const ComponentMap = {
  "shared.rich-text": RichText,
  "shared.media": Image,
};

const Block = ({ block }) => {
  const Component = ComponentMap[block.strapi_component];

  if (!Component) {
    return null;
  }

  return <Component data={block} />;
};

const BlockRender = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        return <Block key={index} block={block} />;
      })}
    </>
  );
};

export default BlockRender;
