import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import "./Card.css";

interface CardProps {
  title: String;
  description: String;
  icon: "correct" | "wrong";
}

export default function Card({
  title,
  description,
  icon = "correct",
  ...props
}: CardProps) {
  return (
    <div className="card-container" {...props}>
      <div className="icon-container">
        {icon === "correct" ? <BsCheck2 /> : <AiOutlineClose />}
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}
