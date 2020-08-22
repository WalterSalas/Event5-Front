import React from "react";

import "../../atoms/Icons/Icons.scss";
import Icon from "../../atoms/Icons/Icon";

export function MenuItem({ icon, text }) {
  return (
    <h3>
      <Icon svg={icon} classes="svg-icon" title={icon} />
      {text}
    </h3>
  );
}