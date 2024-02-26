
import React, {useState} from 'react'



export default function Textform(props) {
  const handleupclick = () => {
    //console.log("Upper Case was clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase", "success")
  }
  const handlelowclick = () => {
    //console.log("Lower Case was clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase", "success")
  }
  
  const handleclearclick = () => {
    let newtext = " ";
    setText(newtext)
    props.showAlert("The text has been cleared", "success")
    
  }
  const handlealternateclick = () => {
    let alternateCase = function (text) {
      let chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
        }
      return chars.join("");
    };
    let newtext = alternateCase;
    setText(newtext)
    props.showAlert("Converted to Alternatecase", "success")
  }
  const handleonchange = (event) => {
  //console.log("On change")
    setText(event.target.value)
    
  }


  const [text, setText] = useState(''); 
  return (
    <>
    <div className='conatiner' style={{color: props.mode==='dark'?'white':'#033254'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="MyBox" rows="8"> </textarea>
        <button className="btn btn-primary mx-2"onClick = {handleupclick}>Convert to Upper-Case</button>
        <button className="btn btn-primary mx-2"onClick = {handlelowclick}>Convert to Lower-Case</button>
        <button className="btn btn-primary mx-2"onClick = {handleclearclick}>Clear text</button>
        <button className="btn btn-primary mx-2"onClick = {handlealternateclick}>AlTeRnAtE cAsE</button>
        </div>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'#033254'}}>
      <h2>Your text summary</h2>
      <p><b>{text.split(" ").filter((t)=>t!=="").length} words and {text.length} characters </b></p>
      <p><i>{0.008 * text.split(" ").length} minutes read </i></p>
      <h2>Priview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
