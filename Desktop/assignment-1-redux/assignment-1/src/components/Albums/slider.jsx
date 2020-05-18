import React, { useState } from 'react'
import '../../assets/styles/Slider.css'
import { slideArrow } from '../../config'

function Slider({ images }){

    const [xAxis, setX] = useState(0)


        let slider = images.map((image, index) => {
            console.log(image)
            return (
                <div key={index} className="slide" style={{ transform: `translateX(${xAxis}%)`}}>
                    <img className="img" src={image.url} alt="slide-img"></img>
                </div>
            )
        })

        const prev = () => {
            xAxis === 0 ? setX(-100 * (slider.length - 1)) : setX(xAxis + 100)
        }

        const next = () => {
            xAxis === -100 * (slider.length - 1) ? setX(0) : setX(xAxis - 100)
        }


        return (
            <div className="slider">
                {slider}
                <button className="prev" onClick={prev}>
                    <img src={`${slideArrow}left.png`} alt="Previous" />
                </button>

                <button className="next" onClick={next}>
                    <img src={`${slideArrow}right.png`} alt="Next" />
                </button>
            </div>
        )
    }
export default Slider;
