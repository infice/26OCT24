import React from "react";
import "./styles.css";
import { useState } from "react";

/* const name = "Netchanok"; */

/* const user = {
  firstName: "John",
  lastName: "Doe",
}; */

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

/* 🆘 ตรงนี้คือการสร้าง Component ในไฟล์นี้และนำไปใช้ในไฟล์ อินเด็กซ์*/
function App(props) {
  /* Component: ต้องส่ง JSX ออกไป */
  const [count, setCount] = /* React. */ useState(0); /* ค่าตั้งต้น = 0 */
  const [time, setTime] = useState(new Date());

  function greeting() {
    if (time.getHours() < 12) {
      return "Good Morning";
    } else if (time.getHours() <= 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  function handleClick() {
    console.log(new Date().toLocaleString());
    setCount(count + 1);
  }
  setInterval(
    () => setTime(new Date()),
    1000
  ); /* รีเวลาให้เป็นปัจจุบันทุก 1 วินาที */

  return (
    <div>
      <h1>{time.toLocaleTimeString()} </h1>
      <p>
        {" "}
        {greeting()}, {props.name}{" "}
      </p>
      {/* <button onClick={handleClick}>  Refresh: {count}</button>{" "} */}
      {/*   <button onClick={() => setTime(new Date())}> Greeting</button>{" "} */}
      {/* กดปุ่มนี้ค่อยไปเรียกใช้ function */}
    </div>
  );
}

export default App; /* Component: export ตัวที่เราอยากให้ไฟล์อื่นเอาไปใช้ได้ มีได้แค่ตัสเดียว*/
/* export {a,b,c}; กี่ตัวก็ได้ แต่ชื่อต้องตรง */
