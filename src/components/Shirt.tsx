import { FC } from "react";

interface Props {
  shirtType: number;
}

const Shirt: FC<Props> = ({ shirtType }) => {
  return <div>Shirt {shirtType}</div>;
};

export default Shirt;
