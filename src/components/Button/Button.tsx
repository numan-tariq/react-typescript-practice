import { buttonProps } from "./Button.types";

const Button = ({ handleClick }: buttonProps) => {
  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
