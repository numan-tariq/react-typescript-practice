import { inputProps } from "./Input.types";

const Input = ({ value, handleChange }: inputProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
