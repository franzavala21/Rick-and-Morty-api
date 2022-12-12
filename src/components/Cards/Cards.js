import React from 'react'
import styles from './Cards.module.scss'



const Cards = ({ results }) => {
    let display;
    if (results) {
        display = results.map(char => {
            return (
                <div key={char.id} className='col-4 mb-4 position-relative'>
                    <div className={styles.cards}>
                        <img src={char.image} alt='' className={`${styles.img} img-fluid`} />
                        <div style={{ padding: "10px" }} className='content'>
                            <div className='fs-5 fw-bold mb-4'>{char.name}</div>
                            <div className=''>
                                <div className='fs-6'>Last Location</div>
                                <div className='fs-5'>{char.location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if (char.status === "Dead") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`}>{char.status}</div>
                            )
                        }else if(char.status === "Alive"){
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-success`}>{char.status}</div>
                            )
                        }else{
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{char.status}</div>
                            )
                        }
                    })()} 
                    {/* IIFE */}

                </div>
            )
        })
    } else {
        display = "No Characters Found :("
    }


    return (
        <>{display}</>
    )
}

export default Cards