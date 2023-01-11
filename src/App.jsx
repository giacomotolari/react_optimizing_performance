import React from "react";
import { useEffect, useState } from "react";

// import measureDuration from "./util/measureDuration";

const List = ({ infos }) => {
  return (
    <ul>
      {infos.map((info) => (
        <li key={crypto.randomUUID()}>{info}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [commentsInfos, setCommentsInfos] = useState({});
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ commentsInfos", commentsInfos);
  const API_URL = "https://jsonplaceholder.typicode.com/comments";
  const commentInfosKeys = Object.keys(commentsInfos);
  const isCommentInfosEmpty = commentInfosKeys.length === 0;
  // console.log(
  //   measureDuration(function () {
  //     let num = 0;
  //     for (let i = 0; i < 100000; i++) {
  //       num += i;
  //     }
  //     return num;
  //   })
  // );

  const getComments = async () => {
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      return data;
    } catch (error) {
      console.log("error", error);
      return [];
    }
  };

  const getCommentsInfos = async () => {
    const comments = await getComments();
    if (comments.length === 0) {
      return {};
    }
    const names = comments.map((comment) => comment.name);
    const emails = comments.map((comment) => comment.email);
    const bodies = comments.map((comment) => comment.body);
    const _commentInfos = {
      names,
      emails,
      bodies,
    };
    setCommentsInfos(_commentInfos);
  };

  return (
    <div>
      <button onClick={getCommentsInfos}>Get Comments Infos</button>
      {!isCommentInfosEmpty &&
        commentInfosKeys.map((commentInfosKey) => (
          <section key={crypto.randomUUID()}>
            <h2>{commentInfosKey}</h2>
            <List infos={commentsInfos[commentInfosKey]} />
          </section>
        ))}
    </div>
  );
};

export default App;
