import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(" ");

    const handleUpClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setText(text.toUpperCase()); // Convert text to uppercase
        props.showAlert("converted to upper case", "success");
    };
    const handleLpClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setText(text.toLowerCase()); // Convert text lowercase
        props.showAlert("converted to lower case", "success");
    };
    const handleClearClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setText(""); // clear text
        props.showAlert("text cleared", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value); // Update state with the current textarea value
    };




    return (
        <>
            <div className='container my-4'>
                <form>
                    <div className="mb-3"> <textarea className="form-control" placeholder="Enter your text" value={text} onChange={handleOnChange} id="exampleTextarea" rows="8"
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea></div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper Case </button>
                    <button className="btn btn-primary mx-2" onClick={handleLpClick} > Convert to lower Case </button>
                    <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear </button>

                </form>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <h5>Withspace</h5>
                <p> {text.trim() === "" ? 0 : text.split(" ").length} words</p>
                <p> {text.length} characters</p>
                <p>{text.trim() === "" ? 0 : (0.008 * text.split(" ").length).toFixed(2)} Minutes Read</p>
               
                <h5>Withoutspace</h5>
                <p>{text.trim() === "" ? 0 : text.split(/\s+/).filter(Boolean).length} words</p>
                <p>{text.trim() === "" ? 0 : text.replace(/\s+/g, '').length} characters</p>
                <p>{text.trim() === "" ? 0 : (0.008 * text.split(/\s+/).filter(Boolean).length).toFixed(2)} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>



            </div>
        </>
    );
}
