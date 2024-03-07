import { useEffect, useState, Suspense, lazy } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Loading from "./pages/Loading";
import Custom from "./pages/Custom";
import "./App.css";
const OtherComps = lazy(() => delay(import("./pages/Custom")));
function App() {
  const [count, setCount] = useState(0);
  // const [isLoading, setLoadin] = useState(true)
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoadin(true)
  //   }, 2000)
  // }, [])
  // if(isLoading){
  //   return <Loading/>
  // }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <OtherComps />
      </Suspense>
    </>
  );
}

export default App;

function delay(promise){
  return new Promise(resolve=>{
    setTimeout(resolve, 2000)
  }).then(()=> promise)
}