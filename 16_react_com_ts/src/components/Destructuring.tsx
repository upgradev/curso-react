import React from "react";

type Props = {
  title: string;
  content: string;
  comentQtdy: number;
  tags: string[];

  // 8 enum
  category: Category;
};

export enum Category {
  JS = "Javascript",
  TS = "Typecript",
  P = "Python",
}

const Destructuring = ({
  title,
  content,
  comentQtdy,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p> {content} </p>
      <p>Quantidade comentarios: {comentQtdy}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <h4>Categoria : {category}</h4>
    </div>
  );
};

export default Destructuring;
