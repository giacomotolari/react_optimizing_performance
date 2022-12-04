import React from "react";
import { useEffect, useState } from "react";
// import measureDuration from "./util/measureDuration";

function App() {
  const [comments, setComments] = useState([]);
  console.log("🚀 ~ file: App.jsx:7 ~ App ~ comments", comments);

  // console.log(
  //   measureDuration(function () {
  //     let num = 0;
  //     for (let i = 0; i < 100000; i++) {
  //       num += i;
  //     }
  //     return num;
  //   })
  // );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await result.json();

        setComments(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
}

export default App;
