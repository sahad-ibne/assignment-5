import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import TechCards from "./Components/TechCard";
import type { ITech } from "./TechType";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

const techFetch = async (): Promise<ITech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [techPromise] = useState(() => techFetch());
  const [stack, setStack] = useState<ITech[]>([]);

  const handleAddToStack = (tech: ITech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));

    toast.info(`${itemToRemove?.name || "Item"} removed from stack`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleClearStack = () => {
    setStack([]);
    toast.error("All technologies removed from stack!", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading....</h1>}>
        <TechCards
          techPromise={techPromise}
          stack={stack}
          AddToStack={handleAddToStack}
          RemoveFromStack={handleRemoveFromStack}
          ClearStack={handleClearStack}
        ></TechCards>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;