import React from "react";
import According from "../../common/According/According";

function FAQ() {
  const items = [
    {
      label: "can i use Hubstaff for free ?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis",
    },
    {
      label: "Can i cancel at any time ?",
      content:
        "lorem second dolor sit amet , consectetur adipisicing elit reiciendis",
    },
    {
      label: "Can another entity redistribute Hubstaff ? ",
      content: "lorem",
    },
    {
      label: "Do you offer a la carte pricing ?",
      content: "lorem",
    },
    {
      label: "Do you offer a money-back guarantee ?",
      content: "lorem",
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
