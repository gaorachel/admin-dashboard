import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-20">
      <p className="dark:text-gray-200 text-gray-700 text-center">
        © 2023 Originally Created by
        <a href="https://github.com/adrianhajdin" style={{ color: currentColor }}>
          {" "}
          Adrian Hajdin
        </a>
        . Minor Changes made by
        <a href="https://github.com/gaorachel" style={{ color: currentColor }}>
          {" "}
          Rachel Gao
        </a>
      </p>
    </div>
  );
};

export default Footer;
