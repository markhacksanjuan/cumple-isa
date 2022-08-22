import React, { useContext } from 'react'
import ScapeRoom from '../ScapeRoom/ScapeRoom'

import Counter from '../Counter/Counter'

import { UserStateContext } from '../GlobalContextProvider/GlobalContextProvider'

const Home = () => {
    const { user } = useContext(UserStateContext)
    const dateBirthday = '2022-08-23T00:00:00'
    const now = Date.now()
    const timeToScapeRoom = 9 * 60 * 60 * 1000
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
            {(now < birthdayDelayed && !user) && renderShow()}
            {user && <ScapeRoom />}
        </>
    )
}

export default Home