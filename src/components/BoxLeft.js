import { Html } from "@react-three/drei"
import { useState } from "react"

import { IoLogoJavascript, IoLogoGithub, IoLogoNodejs } from 'react-icons/io'
import { DiReact } from 'react-icons/di'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'


export default function BoxLeft(){

    const size = '60'

  const [hidden, setVisible] = useState(false)
    return(
        <mesh >
            <Html
                style={{
                transition: 'all 0.2s',
                opacity: hidden ? 0 : 1,
                transform: `scale(${hidden ? 0.5 : 1})`
                    
            }}
                distanceFactor={1.5}
                position={[0.51, 0, 0]}
                rotation={[0,1.5,0]}
                transform
                occlude
                onOcclude={setVisible}>
                    <div style={{ width: '250px', height: '250px',display:'flex',flexDirection:'column' }} >
                        <p style={{ fontSize: '25px',textAlign:'center' }} >
                            Skils
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }} >
                            <IoLogoJavascript size={size} style={{margin: '7' }} />
                            <DiReact size={size} style={{margin: '7' }} />
                            <SiTypescript size={size} style={{margin: '7' }} />
                            <SiTailwindcss size={size} style={{margin: '7' }} />
                            <IoLogoNodejs size={size} style={{margin: '7' }} />
                            <IoLogoGithub size={size} style={{margin: '7' }} />

                        </div>
                    </div>

            </Html>
        </mesh>
    )
}