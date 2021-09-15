import { headingProps } from "./Heading.types";

const Heading = ({ children }: headingProps) => {
  return <h2>{children}</h2>;
};

export default Heading;
