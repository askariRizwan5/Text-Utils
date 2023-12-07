import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
    }

    const capitalizeFirst = (str) => {
        if (!str) {
            // Handle empty string input
            setText("");
            return;
        }

        str = str.trim(); // Trim the input string

        const capString = str
            .split(" ")
            .filter(word => word !== "")
            .map(word => word.toLowerCase().charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        props.showAlert("First letter Capitalized!", "success")
        setText(capString);
    }
    const clearText = () => {
        setText("")
    }

    const copyText = () =>{
        // var text = document.getElementById("textBox")
        // text.select()
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard!", 'success')
    }

    return (
        <>
            <div className='firstDiv' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="textBox" rows="8" value={text} style=
                        {{
                            backgroundColor:
                                props.mode === 'dark' ? '#13466e' : 'white',
                            color:
                                props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={() => capitalizeFirst(text)}>Capitalize First Word</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={() => copyText(text)}>Copy Text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={() => clearText(text)}>Clear Text</button>

            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>

                <p>Your text contains {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p className='blink-content'>On an average your text would take :  <b>{0.008 * text.split(" ").length}</b> Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the text box to preview.'}</p>

            </div>
        </>
    )
}