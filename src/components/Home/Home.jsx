import React from 'react'
import ScapeRoom from '../ScapeRoom/ScapeRoom'

import Counter from '../Counter/Counter'

const Home = () => {
    const dateBirthday = '2022-08-08'
    const now = Date.now()
    const timeToScapeRoom = 24 * 60 * 60 * 1000
    const birthday= new Date(dateBirthday).valueOf()
    const birthdayDelayed = new Date(dateBirthday).valueOf() + timeToScapeRoom

    const renderShow = () => {
        const renderText = () => {
            return(
                <>
                    <div className='frase-container'>
                        <p>Para que empiece el SHOW...</p>
                    </div>
                </>
            )
        }
        return (
            <>
                <Counter date={dateBirthday} />
                {now < birthday && renderText()}
            </>
        )
    }
    return(
        <>
            {/* <Counter date='2022-08-23' /> */}
            {/* {formatedNow !== dateBirthday ? renderShow() : <ScapeRoom />} */}
            {now < birthdayDelayed && renderShow()}
            {now > birthdayDelayed && <ScapeRoom />}
        </>
    )
}

export default Home