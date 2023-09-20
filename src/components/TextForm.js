import React, {useState} from 'react'
// import Alert from './Alert';

export default function TextForm(props) {

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleDownClick=()=>{
    let newText1=text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to lowercase!","success");

  }

  const handleCaseClick=()=>{
    let newText2=text.charAt(0).toUpperCase()+text.substring(1,text.length);
    setText(newText2);
    props.showAlert("Converted to sentence case!","success");

  }

  const handleClearCase=()=>{
    let newText4='';
    setText(newText4);
    props.showAlert("Text has been removed","success");

  }

  const handleCopy=()=>{
     var text=document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard","success");
  }

  const handleExtraSpaces=()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space has been removed","success")


  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  const [text, setText]=useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>

            <h1>{props.heading}</h1>
            <div className="mb-5 mt-5">
            <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick} style={{color: props.mode==='dark'?'black':'white'}}>Convert to Upper Case</button>
            <button className="btn btn-secondary mx-2" onClick={handleDownClick} style={{color: props.mode==='dark'?'black':'white'}}>Convert to Lower Case</button>
            <button className="btn btn-success mx-2" onClick={handleCaseClick} style={{color: props.mode==='dark'?'black':'white'}}>Sentence Case</button>
            <button className="btn btn-secondary my-2 mx-2" onClick={handleClearCase} style={{color: props.mode==='dark'?'black':'white'}}>Clear Case</button>
            <button className="btn btn-success my-2 mx-2"  onClick={handleCopy} style={{color: props.mode==='dark'?'black':'white'}}>Copy Text</button>
            <button className="btn btn-secondary my-2 mx-2" onClick={handleExtraSpaces} style={{color: props.mode==='dark'?'black':'white'}}>Clear Extra Spaces</button>

    </div>
    <div className="container my-3 mt-5" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 className='mb-5'>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>

        

    </div>
    
    
    </>
  )
}
