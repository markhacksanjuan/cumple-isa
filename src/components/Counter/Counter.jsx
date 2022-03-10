import React from 'react'
import Countdown from "react-countdown"

const Counter = ({ date }) => {
    const parsedDate = Date.parse(date)
    const now = Date.now()

    const renderCountdown = ({ days, hours, minutes, seconds, complete}) => {
        return(
            <div className='counter-container'>
                <p>{days} días : {hours} horas : {minutes} minutos : {seconds} segundos</p> 
            </div>
        )
    }

    return(
        <>
            <Countdown 
                date={parsedDate}
                renderer={renderCountdown}
                >
                ¡FELICIDADES AMORE!
            </Countdown>
        </>
    )
}
export default Counter