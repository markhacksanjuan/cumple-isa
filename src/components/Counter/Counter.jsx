import React from 'react'
import Countdown from "react-countdown"
import Felicidades from '../Felicidades/Felicidades'

const Counter = ({ date }) => {
    const parsedDate = Date.parse(date)
    // const now = Date.now()

    const renderCountdown = ({ days, hours, minutes, seconds, completed}) => {
        if(completed){
            return <Felicidades />
        }else {
            return(
                <div className='counter-container'>
                    <p>{days} días : {hours} horas : {minutes} minutos : {seconds} segundos</p> 
                </div>
            )
        }
    }

    return(
        <>
            <Countdown 
                date={parsedDate}
                renderer={renderCountdown}
                >
                <Felicidades />
            </Countdown>
        </>
    )
}
export default Counter