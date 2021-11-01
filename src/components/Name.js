import React from "react";
import { useParams } from "react-router-dom";

const Name = () => {
  const { personName } = useParams();
  return (
    <div>
      <p>
        This is the page for showing details of individual person {personName}
      </p>
    </div>
  );
};

export default Name;
