import { useState, useRef } from 'react';
import '../App.css'

const ColorMe = () => {
    const [inputVal, setInputVal] = useState()
    const numbersRef = useRef(null);

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputVal(value);
    };

    const colorDiv = () => {
        if (!inputVal) {
            alert('Please Enter a Number')
            return;
        }

        if (inputVal < 1 || inputVal > 9) {
            alert('Please Enter a Valid Number');
            return;
        }
        const activeDiv = numbersRef.current.querySelector('.num.active');
        activeDiv.classList.remove('active')
        const numDivs = numbersRef.current.querySelectorAll('.num');
        numDivs[inputVal - 1].classList.add('active')
    }

    return (
        <div className="container">
            <div ref={numbersRef} className="numbers">
                <div className="num active">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
                <div className="num">6</div>
                <div className="num">7</div>
                <div className="num">8</div>
                <div className="num">9</div>
            </div>
            <div className="input-div">
                <input type="number" max={9} min={0} placeholder="Enter"
                    value={inputVal} onChange={handleInputChange} />
                <button className="btn-primary" onClick={() => colorDiv()}>Color Me</button>
            </div>
        </div>
    )
}

export default ColorMe
