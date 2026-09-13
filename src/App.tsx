import { Suspense, useState } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import TechCards from "./Components/TechCard"
import type { ITech } from "./TechType";

const techFetch = async (): Promise<ITech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {
 const [techPromise] = useState(() => techFetch())
  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback={<h1>Loading....</h1>}>
        <TechCards techPromise={techPromise}></TechCards>
      </Suspense>
    </>
  )
}

export default App
