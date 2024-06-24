import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "Questions1?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores expedita at eum blanditiis, odio aliquam quaerat sapiente. Tenetur suscipit minus.",
    },
    {
      question: "Questions2?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores expedita at eum blanditiis, odio aliquam quaerat sapiente. Tenetur suscipit minus.",
    },
    {
      question: "Questions3?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores expedita at eum blanditiis, odio aliquam quaerat sapiente. Tenetur suscipit minus.",
    },
    {
      question: "Questions4?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores expedita at eum blanditiis, odio aliquam quaerat sapiente. Tenetur suscipit minus.",
    },
    {
      question: "Questions5?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolores expedita at eum blanditiis, odio aliquam quaerat sapiente. Tenetur suscipit minus.",
    },
  ];

  const [select, setSelect] = useState(false);

  const handleclick = (i) => {
    if (select === i) {
      return setSelect(false);
    }
    setSelect(i);
  };

  return (
    <>
      <h1 className="heading">FAQs</h1>
      <div className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <>
                <div className="wrapper" key={i} onClick={() => handleclick(i)}>
                  <div className="question">
                    <h3>{item.question}</h3>
                    <img
                      src={require("../../../Assets/icons8-slide-up-64.png")}
                      alt=""
                      className={select === i ? "reverse" : ""}
                    />
                  </div>
                  <div className={select === i ? "answers show" : "answers"}>
                    <p>{item.answers}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
