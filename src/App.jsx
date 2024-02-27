import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Loading from "./pages/Loading";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Loading />
    </>
  );
}

export default App;
