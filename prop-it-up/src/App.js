import "./App.css";
import PersonalCard from "./components/PersonalCard";

function App() {
  return (
    <div className="App">
      <PersonalCard
        lastName="hughes ,"
        firstName="sam"
        age={"Age: " + 28}
        hairColor={"Hair color: black"}
      />
      <PersonalCard
        lastName="mike ,"
        firstName="jones"
        age={"Age: " + 29}
        hairColor={"Hair color: blue"}
      />
      <PersonalCard
        lastName="magic ,"
        firstName="brown"
        age={"Age: " + 10}
        hairColor={"Hair color: white"}
      />
      <PersonalCard
        lastName="hart ,"
        firstName="kevin"
        age={"Age: " + 24}
        hairColor={"Hair color: yellow"}
      />
    </div>
  );
}

export default App;
