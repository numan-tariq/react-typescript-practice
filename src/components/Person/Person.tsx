import { personProps } from "./Person.types";

const Person = ({ name }: personProps) => {
  return (
    <div>
      <h1>
        {name.first} {name.last}
      </h1>
    </div>
  );
};

export default Person;
