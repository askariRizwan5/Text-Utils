import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    
    const capitalizeFirst = (str) => {
        let capString = "";
        let words = str.split(" ");

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word !== "") {
                word= word.toLowerCase()
                capString += word.charAt(0).toUpperCase() + word.slice(1) + " ";
            }
        }
        setText(prevText => capString.trim())
        console.log("I have been clicked")
    }

    return (
        <>
            <div className='firstDiv'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="textBox" rows="8" value={text}onChange={(e) => {setText(e.target.value);
        }}></textarea>
                </div>
                <button type="button" className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-secondary" onClick={() => capitalizeFirst(text)}>Capitalize First Word</button>

            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                
                <p>Your text contains {text.split(" ").length} words and {text.length} characters</p>
                <p className='blink-content'>On an average your text would take :  <b>{0.008 * text.split(" ").length}</b> Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}