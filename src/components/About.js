import React, { useState } from 'react'








export default function About() {

    const [myStyle, setMyStyle]=useState(

        {
    
            color: 'black',
            backgroundColor: 'white'
        
        })
        const [btnText, setBtnText]=useState("Enable Dark Mode")

     const toggleHandle=()=>{

        if(myStyle.color==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'

            })
            setBtnText("Enable Light Mode")
        }else{
           setMyStyle({
            color: 'black',
            backgroundColor: 'white'
           })
           setBtnText("Enable Dark Mode")
        }

     }   

  return (
    <div className='container' style={myStyle}>

        <h1 className='my-3'>About Us</h1>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character coenut & word count
        statistics for a given text. TextUtils reports the number and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
        It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>




      
    </div>
  )
}
