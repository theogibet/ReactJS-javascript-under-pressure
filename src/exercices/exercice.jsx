import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import './exercice.css';
import React, {useState, useCallback} from "react";
import {useHistory}  from "react-router-dom";
import { Button } from 'antd';


function Exercice({ exercices, code, onChange, level, onLevel }) {
    const [pass, setPass] = useState(false)

  const run = () => {
    let res = document.getElementById("res")
    let div = document.getElementById("scroll")

    res.innerText = ""
    for (let i = 0; i < exercices[level].inputs.length; i++) {
      let result;
      try {
        result = eval(code + exercices[level].name + "(" + exercices[level].inputs[i] + ")")
      } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
            return;
        } else {
          alert("Your code isn't working, try again")
        }
      }
      res.innerText += "Testing:" + exercices[level].inputs[i] + '\n'
      res.innerText += "Expected:" + exercices[level].expected[i] + '\nGot:' + result + '\n'
      if (result === exercices[level].expected[i]) {
        res.innerText += "PASS\n\n"
      } else {
        res.innerText += "FAILED\n\n"
        setPass(false);
        return;
      }
    }
    res.innerText += "Well done, Click the next button for the next one\n\n"
    div.scrollTo({ top: div.offsetHeight, behavior: 'smooth' })
    
    setPass(true);
}


const next = () => {
    setPass(false);
    onLevel(level < exercices.length ? level + 1 : level)
    if (level + 1 === exercices.length) {
        console.log("end")
        end();
    }
    // onChange(exercices[level].code) 
  }
  
  const history = useHistory();
  const end = useCallback(() => history.push('/end'), [history]);

  return <>
    <div>
      <div className="texteditor">
        <AceEditor
          mode="javascript"
          theme="github"
          className="editor"
          value={code}
          height="450px"
          fontSize="30px"
          width="98%"
          onChange={(value) => onChange(value)}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <Button className="runButton" onClick={run} type="primary" size="large" style={{ backgroundColor: "#08584D", marginTop: "6%", marginLeft: "7%"}}>Run</Button>
      <Button disabled={!pass} onClick={next} type="primary" size="large" style={{ backgroundColor: "#08584D", marginLeft: "8%"}}>Next</Button>
      
      {/* <button onClick={run} className="run_button">Run</button>
      <button disabled={!pass} onClick={next} className="next_button">Next</button> */}

      <div className="result" id="scroll">
        <p className="resultText" id="res" />
      </div>
    </div>
  </>
}


export default Exercice;
