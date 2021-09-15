import { greetProps } from "./Greet.types";

const Greet = ({ name, unreadMessages, isLoggedIn }: greetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hello ${name}! You have ${unreadMessages} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
