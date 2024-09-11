import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const hanleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleLo = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        setText("");
    }

    const [text, setText] = useState("");
  return (
    <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Enter Your Text</label>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" 
                style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} rows="3" onChange={hanleOnChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-2 mx-2" onClick={handleUp}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-primary mb-2 mx-2" onClick={handleLo}>Convert to Lowercase</button>
            <button type="submit" className="btn btn-primary mb-2 mx-2" onClick={handleClear}>Clear</button>

            <h2>Priview</h2>
            <p>{text}</p>
        </div>

    </>
  )
}
