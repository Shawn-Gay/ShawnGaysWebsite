import React, {useEffect, useState} from 'react'

import { Controls, PlayState, Tween } from 'react-gsap';

export default function AnimationHome() {

    const [displayClass, SetDC] = useState('')

        useEffect(() => {
            setTimeout(() => {SetDC('display-none')}, 400)
        },[])
        
    return (
        <div id="animation-container" className={displayClass}>
            <Tween to={{ height: '0'}} duration={.5}>
              <div style={{ width: '100vw', height: '25vh', background: 'white' }} />
              <div style={{top:'25vh', position: 'absolute', height: '25vh', width: '100vw', background: 'white' }} />
              <div style={{top:'50vh', position: 'absolute', height: '25vh', width: '100vw', background: 'white' }} />
              <div style={{top:'75vh', position: 'absolute', height: '25vh', width: '100vw', background: 'white' }} />
            </Tween>
        </div>
    )
}
