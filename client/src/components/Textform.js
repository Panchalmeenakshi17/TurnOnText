import React, {useState} from 'react'


export default function Textform(props){
const handleUpClick = ()=> {
console.log( text);
let newText = text.toUpperCase();
setText(newText);
document.title = " Changed to Uppercase";

}

const handleOnChange = (event)=> {
   console.log("on change");
   setText(event.target.value);
  }

  const handleDownClick = ()=> {
    console.log("uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    document.title = " Changed to Lowercase";
    }

    // const handleCopy = ()=> {
    //   console.log("I'm copied ");
    //   var newText = document.getElementById("mybox");
    //   text.select();
    //   navigator.clipboard.writeText(text.value);
    //   }
    // // const vowels = ["a", "e", "i", "o", "u"]
    // const handleVowelClick = ()=> {
      
    //   console.log("uppercase was clicked " + text);
    //   let newText = text.toLowerCase();
    //   setText(newText);
    //   }
     
    
    const capitalFirstLetter = () => {
            let tempText = text.split(/[  ]+/);
            let newText="";
            tempText.forEach((e)=>{
                e=e.charAt(0).toUpperCase()+e.slice(1);
                newText=newText+e+" ";
            })
            setText(newText);
            document.title = " Captalized each word";
        }
        const handleClearCase = () => {
          console.log("Clearing the text");
          if(window.confirm("Delete the item")){
              let CText = '';
              setText(CText);
              document.title = "Cleared Text";  }

        }


        const ReverseText=()=>{        
          setText(text.split('').reverse().join(''));
      }
    
  const [text, setText] = useState("Enter text here2");
  
  return (
    <>
   
   <br></br>
   <div>
   <h1>{props.heading}</h1>
   <br></br>
<div className='container'>

  <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox"  rows="15"></textarea>

</div>

<br></br>
<button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert To lowercase</button>
{/* <button className="btn btn-primary mx-2" onClick={handleVowelClick} >Vowel count</button> */}
{/* <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button> */}
<button className="btn btn-primary mx-2" onClick={capitalFirstLetter} >Captilize each word of Text</button>
<button className="btn btn-primary mx-2" onClick={ReverseText} >Reverse The Text</button>

<button className="btn btn-danger mx-2" onClick = {handleClearCase}>Clear Text</button>
</div>
</div>

<div className='container my-3'>
<h1>Your text summary here</h1>
<p>
{text.split(" ").length} words and {text.length} charracters</p>
<p>
 {0.008 * text.split(" ").length } Minutes read
</p>
<p>
{/* function getcount(str) {
  var vowelsCount = 0

  
} */}


</p>

<h2 className=' '>
Preview</h2>
<p>{text}</p>


</div>




</>

  )
}
