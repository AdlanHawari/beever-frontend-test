import React, { useEffect } from "react";

export default function Test2() {
  const input1 = [
    "Joyful",
    "Infinite",
    "Humble",
    "Joyful",
    "Glory",
    "King",
    "Humble",
    "Infinite",
  ];

  const input2 = [
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
  ];

  const input3 = [
    1, 2, 3, 4, 5, 6, 4, 3, 2, 5, 6, 8, 7, 6, 9, 8, 7, 0, 8, 7, 6, 5, 4, 3,
  ];
  function counter(arrInput) {
    let countObj = {};
    arrInput.forEach((keys) => {
      countObj[keys] = ++countObj[keys] || 1;
    });
    return countObj;
  }

  useEffect(() => {
    console.log(counter(input1));

    console.log(counter(input2));

    console.log(counter(input3));
  }, []);

  return (
    <div>
      <h1>Test2</h1>
    </div>
  );
}
