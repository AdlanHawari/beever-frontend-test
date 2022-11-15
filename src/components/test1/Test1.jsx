import React, { useEffect, useState } from "react";

export default function Test1() {
  let words = "beever";
  const [arr, setArr] = useState([]);
  function solution(input) {
    let out = "";
    let arrTemp = [];
    console.log(input.length);
    for (let i = 0; i < input.length; i++) {
      out += input[i];
      console.log(out);
      arrTemp.push(out);
    }
    return arrTemp;
  }
  useEffect(() => {
    setArr(solution(words));
  }, [words]);
  return (
    <div className="">
      <h1>Test1</h1>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
