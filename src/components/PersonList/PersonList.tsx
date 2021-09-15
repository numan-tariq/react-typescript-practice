import { personListProps } from "./PersonList.types";

const PersonList = ({ nameList }: personListProps) => {
  return (
    <div>
      {nameList.map((el) => {
        return (
          <h3>
            {el.first} {el.last}
          </h3>
        );
      })}
    </div>
  );
};

export default PersonList;
