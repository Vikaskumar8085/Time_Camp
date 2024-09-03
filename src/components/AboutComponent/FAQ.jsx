import React from "react";
import According from "../../common/According/According";

function FAQ() {
  const items = [
    {
      label: "hello",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis",
    },
    {
      label: "second",
      content:
        "lorem second dolor sit amet , consectetur adipisicing elit reiciendis",
    },
  ];
  return (
    <>
      <According items={items} />
      <p></p>
    </>
  );
}

export default FAQ;
