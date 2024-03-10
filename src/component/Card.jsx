import React from 'react'
import "./Card.css"
export default function Card() {
  return (
    <>
        <div className="card">
            <div className="left">
                <div className="image">
                    <img src="assets/neptune.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="desc">
                    <p>This is neptune planet for the sell. this planet contains the many minerals. we are selling this planet for the very cheap price</p>
                </div>
                <div className="button">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}
