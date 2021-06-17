import React, {useEffect, useState} from 'react'

import { Controls, PlayState, Tween } from 'react-gsap';

export default function AnimationHome() {

        useEffect(() => {
            setTimeout(() => {})
        },[])
        
    return (
        <div id="animation-container">
            <Tween to={{ height: '0'}} duration={.25}>
              <div style={{ width: '100vw', height: '25vh', background: '#ccc' }} />
              <div style={{top:'25vh', position: 'absolute', height: '25vh', width: '100vw', background: '#ccc' }} />
              <div style={{top:'50vh', position: 'absolute', height: '25vh', width: '100vw', background: '#ccc' }} />
              <div style={{top:'75vh', position: 'absolute', height: '25vh', width: '100vw', background: '#ccc' }} />
            </Tween>
        </div>
    )
}
