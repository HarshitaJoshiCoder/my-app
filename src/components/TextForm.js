import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked " +text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase is Enabled", "success");

    }
    const handleLowClick= ()=>{
        // console.log("Uppercase was clicked " +text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase is Enabled", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)

    }

    const handleClearClick=()=>{
      
      let a=window.confirm('Are you sure you want to Clear the text');
      if(a===true){

      let newText2 = '';
      setText(newText2);
      props.showAlert("Text Cleared", "success");
     }



    }

   const handleCopyClick=()=>{
     let newText = document.getElementById("myBox");
     

       newText.select();
       navigator.clipboard.writeText(newText.value);
       props.showAlert("Text Copied to Clipboard ", "success");
     
     
      


   }   
   
   const handleExtraClick=()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra Spaces Removed", "success");

   }
   const handleCharacters=(s)=>{
    
    // console.log(s , s.length);
     let count=0;
    for(let i=0;i<s.length;i++){
      if(s.charAt(i)!==" "){
        count= count+1;
      }
      else{
        continue;
      }
    }
    return count;
   }
   const handleWords=(wordArr)=>{
    
    // console.log(wordArr , wordArr.length);
     let count=0;
    for(let i=0;i<wordArr.length;i++){
      if(wordArr[i]!==""){
        count= count+1;
      }
      else{
        continue;
      }
    }
    return count;
   }
   

    const [text, setText] = useState('Enter text here');
 
    

  
    
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
      <h1>{props.heading} </h1>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'black' }}>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white' , color: props.mode==='dark'?'white':'black'  }} rows ='9' id="myBox"></textarea>
      </div>
      <button className="btn btn-warning" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-warning mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
      <button className="btn btn-warning " onClick={handleClearClick}>Clear Text </button>
      <button className="btn btn-warning mx-2 " onClick={handleCopyClick}>Copy Text </button>
      {/* <button className="btn btn-warning " onClick={handleItalicClick}>{btnText} </button> */}
      <button className="btn btn-warning " onClick={handleExtraClick}> Remove Exra Spaces </button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
        <h2>Your text summary</h2>
        <p>{handleWords(text.split(" "))} words and {handleCharacters(text)} characters </p>
        <p>{0.008 * handleWords(text.split(" ")) } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to Preview here"}</p>
    </div>
    </>
  );
}
