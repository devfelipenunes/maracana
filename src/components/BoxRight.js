import { Html } from "@react-three/drei"
import { useState } from "react"

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'

export default function BoxRight(){

function handleLinkedin(){
    window.location.href = "https://www.linkedin.com/in/devfelipenunes/"
}

function handleGitHub() {
    window.location.href = "https://github.com/devfelipenunes"

}

    const size = '120'

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
                position={[-0.51, 0, 0]}
                rotation={[0,-1.5,0]}
                transform
                occlude
                onOcclude={setVisible}>
                    <div style={{ width: '250px', height: '250px',display:'flex',flexDirection:'column', alignItems: 'center' }} >
                        <p style={{ fontSize: '25px',textAlign:'center' }} >
                            Entre em Contato
                        </p>
                    
                    <div style={{diplay:'flex', marginTop:10  }}>


                            <IoLogoLinkedin  onClick={handleLinkedin} size={size} />
                            <IoLogoGithub onClick={handleGitHub} size={size} />
                    </div>
                    </div>

            </Html>
        </mesh>
    )
}