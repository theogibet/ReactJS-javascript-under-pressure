import React, { useState, useEffect } from "react";
import Exercice from './exercice';


function Renderer() {
  const exercices = [{
    passed: false,
    name: "doubleInteger",
    code: "function doubleInteger(i) {\n// i will be an integer. Double it and return it.\n\nreturn i;\n}",
    inputs: [2, 3, 6],
    expected: [4, 6, 12]
  }, {
    passed: false,
    name: "isNumberEven",
    code: "function isNumberEven(i) {\n// i will be an integer. Return true if it's even, and false if it isn't.\n\n}",
    inputs: [2, 3, 6],
    expected: [true, false, true]
  }]

  const [level, setLevel] = useState(0)
  const [code, setCode] = useState(exercices[level].code)

  useEffect(() => {
    setCode(exercices[level].code)
  }, [level])

  return <>
    <Exercice exercices={exercices} code={code} onChange={setCode} level={level} onLevel={setLevel} />
  </>
}

export default Renderer;

