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
  const [stack, setStack] = useState<ITech[]>([]);

  const handleAddToStack = (tech: ITech) => {
    if (!stack.find((item) => item.id === tech.id)) {
      setStack((prev) => [...prev, tech]);
    }
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearStack = () => {
    setStack([]);
  };

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading....</h1>}>
        <TechCards techPromise={techPromise} stack={stack}
          AddToStack={handleAddToStack}
          RemoveFromStack={handleRemoveFromStack}
          ClearStack={handleClearStack}></TechCards>
      </Suspense>
    </>
  )
}

export default App
