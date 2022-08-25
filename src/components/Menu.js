import React, { useContext } from "react";
import { Datacontext } from "../App";

const Menu = () => {
  const { setAppState } = useContext(Datacontext);
  return (
    <div className="menu">
      <h1>แบบทดสอบก่อนเรียน</h1>
      <button onClick={() => setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
    </div>
  );
};

export default Menu;
