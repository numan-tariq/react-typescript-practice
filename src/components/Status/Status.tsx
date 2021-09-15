import { statusProps } from "./Status.types";

const Status = ({ status }: statusProps) => {
  let message;
  if (status === "loading") message = "Loading...";
  else if (status === "success") message = "Data Fetched Successfully!";
  else if (status === "error") message = "Error fetching data!";
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
