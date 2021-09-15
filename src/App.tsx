import "./App.css";
import LoggedIn from "./components/State/LoggedIn";
import User from "./components/State/User";
// import Container from "./components/Container/Container";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  // let name = {
  //   first: "Numan",
  //   last: "Tariq",
  // };
  // let nameList = [
  //   { first: "John", last: "Doe" },
  //   { first: "One", last: "Student" },
  //   { first: "Alee", last: "Khan" },
  // ];

  return (
    <div className="App">
      {/* Props
      <Greet name="Numan Tariq" unreadMessages={12} isLoggedIn={true} />
      <Person name={name} />
      <PersonList nameList={nameList} /> */}

      {/* Advance Props
      <Status status="error" />
      <Heading>This is Heading</Heading>
      <Oscar>
        <Heading>Oscar goes to this</Heading>
      </Oscar> */}

      {/* EVENT PROPS
       <Button
        handleClick={(event) => {
          console.log("🚀 ~ file: App.tsx ~ line 35 ~ App ~ event", event);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log("🚀 ~ file: App.tsx ~ line 40 ~ App ~ event", event);
        }}
      /> */}

      {/* Style Props
      <Container
        styles={{ border: "1px solid black", padding: "1rem", margin: "1rem" }}
      /> */}

      {/* UseState Hook
      <LoggedIn /> */}

      {/* UseState Future Value
       <User /> */}
       
    </div>
  );
}

export default App;
