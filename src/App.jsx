import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="bg-gray-900 p-10 h-screen text-white text-center">
      <h1 className="text-4xl py-5">Welcome to Tauri!</h1>

      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" className="m-8">
          <div className="relative group inline-block">
            <div className="absolute inset-0 transform scale-125 bg-pink-500 opacity-0 group-hover:opacity-50 blur-2xl rounded-full transition duration-300 ease-in-out"></div>
            <img
              src="/vite.svg"
              className="relative w-28 h-28 z-10"
              alt="Vite logo"
            />
          </div>
        </a>

        <a href="https://tauri.app" target="_blank" className="m-8">
          <div className="relative group inline-block">
            <div className="absolute inset-0 transform scale-125 bg-pink-500 opacity-0 group-hover:opacity-50 blur-2xl rounded-full transition duration-300 ease-in-out"></div>
            <img
              src="/tauri.svg"
              className="relative w-28 h-28 z-10"
              alt="Tauri logo"
            />
          </div>
        </a>

        <a href="https://reactjs.org" target="_blank" className="m-8">
          <div className="relative group inline-block">
            <div className="absolute inset-0 transform scale-125 bg-pink-500 opacity-0 group-hover:opacity-50 blur-2xl rounded-full transition duration-300 ease-in-out"></div>
            <img
              src={reactLogo}
              className="relative w-28 h-28 z-10"
              alt="React logo"
            />
          </div>
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
