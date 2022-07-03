import "./App.css";
import PersonalCard from "./components/PersonalCard";

function App() {
  return (
    <div className="App">
      <PersonalCard
        lastName="hughes ,"
        firstName="sam"
        age={28}
        hairColor={"Hair color: black"}
      />
      <PersonalCard
        lastName="mike ,"
        firstName="jones"
        // why couldn't I use "age={"age" + 29}?
        age={29}
        hairColor={"Hair color: blue"}
      />
      <PersonalCard
        lastName="magic ,"
        firstName="brown"
        age={10}
        hairColor={"Hair color: white"}
      />
      <PersonalCard
        lastName="hart ,"
        firstName="kevin"
        age={24}
        hairColor={"Hair color: yellow"}
      />
    </div>
  );
}

export default App;
