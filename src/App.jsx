import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";

export default function App() {

  return (
    <>
      <Header/>
      <Input/>
      <Output/>
    </>
  )
}


// if input is valid ==> then show Calorie output
// if input is not (not formatted, numbers)==> Show Error output "Please try again!"
// ex: 1 cup of ____