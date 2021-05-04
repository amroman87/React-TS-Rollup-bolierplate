import React from "react";

interface Props {
  title: string | undefined;
}

export const Component: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <div>
      <h1 title={title}>{title}</h1>
    </div>
  );
};
