import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Loading from "./pages/Loading";
import Custom from "./pages/Custom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Custom />
    </>
  );
}

export default App;
