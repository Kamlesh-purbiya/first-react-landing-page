import React from 'react'
import img from './imgs/3593491.svg';
function NewComp() {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={require('./imgs/3593491.svg')} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </div>
    )
}

export default NewComp
