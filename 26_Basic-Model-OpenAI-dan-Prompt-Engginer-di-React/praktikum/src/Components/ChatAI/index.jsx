import React, { useState } from "react";
import Navigation from "../CreateProduct/Header/Navigation";
import OpenAI from "openai";
import "../ChatAI/chatai.css";

const ChatAI = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await openai.completions.create({
      prompt: input,
      model: "text-davinci-003",
    });
    setOutput(res.choices[0].text);
  };

  return (
    <>
      <Navigation />
      <div className="container wrap">
        <h1 className="mb-5">Any question?</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            className="form-control inputArea shadow"
            id="inputChat"
            placeholder="Input your question"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-secondary hover text-end mt-5"
            id="btnGenerate"
            type="submit">
            Generate
          </button>
        </form>
        <div className="outputArea">
          <p>{output}</p>
        </div>
      </div>
    </>
  );
};

export default ChatAI;
