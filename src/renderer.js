import React, { useState, useEffect } from "react";
import Exercice from './exercice';


function Renderer() {
  const exercices = [{
    name: "doubleInteger",
    code: "function doubleInteger(i) {\n// i will be an integer. Double it and return it.\n\nreturn i;\n}",
    inputs: [2, 3, 6],
    expected: [4, 6, 12]
  }, {
    name: "isNumberEven",
    code: "function isNumberEven(i) {\n// i will be an integer. Return true if it's even, and false if it isn't.\n\n}",
    inputs: [2, 3, 6],
    expected: [true, false, true]
  }, {
    name: "getFileExtension",
    code: "function getFileExtension(i) {\n// i will be an string, but it may not have a file extension.\n// return the file extension (with no period) if it has one, otherwise false\n\n}",
    inputs: ['"blatherskite.png"', '"perfectlylegal.torrent"', '"spaces are fine in file names.txt"', '"this does not have one"'],
    expected: ["png", "torrent", "txt", false]
  }, {
    name: "longestString",
    code: "function longestString(i) {\n// // i will be an array.\n // return the longest string in the array\n\n}",
    inputs: ["['a','ab','abc']", "['big',[0,1,2,3,4],'tiny']", "['Hi','World','你好']"],
    expected: ["abc", "tiny", "World"]
  }, {
    name: "arraySum ",
    code: "function arraySum(i) {\n// i will be an array, containing integers, strings and/or arrays like itself.\n // Sum all the integers you find, anywhere in the nest of arrays.\n\n}",
    inputs: ["[2, 3, 4, 5]", "[2, [2, 3, 4, 5], 4, 5]", "[2, [2, 3, [2, 3, 4, 5], 5], 4, 5]"],
    expected: [14, 25, 35]
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

