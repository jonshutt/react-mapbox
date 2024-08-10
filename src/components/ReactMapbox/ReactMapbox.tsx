import { FC } from "react";

import { ReactMapboxProps } from "./ReactMapbox.types";

const ReactMapbox: FC<ReactMapboxProps> = (props) => {
  const { key } = props;

  return <div> {key} </div>;
};
export default ReactMapbox;
