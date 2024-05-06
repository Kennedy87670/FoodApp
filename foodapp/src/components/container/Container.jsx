import React from "react";
import style from "./container.module.css";

export default function Container({ children }) {
  return <div className={style.parent}>{children} </div>;
}
