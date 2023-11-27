import { useState, useCallback, useEffect } from "react";
import './App.css';

function App() {
  const [length, setLength] = useState("9");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345455";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%&*";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="body1">
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  bg-pink-900">
      <h1 className="text-4xl text-center text-green-500">PASSWORD GENERATOR BY SACHIN</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-gray-800 text-white"
          placeholder="PASSWORD"
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5">COPY</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer bg-blue-600"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="text-white" htmlFor="numberInput">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="text-white" htmlFor="characterInput">
            Characters
          </label>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
