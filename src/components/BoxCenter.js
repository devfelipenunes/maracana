import { Html } from "@react-three/drei"
import { useState } from "react"

export default function BoxCenter(){

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
                position={[0, 0, 0.51]}
                transform
                occlude
                onOcclude={setVisible}>
                    <div style={{ width: '250px', height: '250px' }} >
                        <div style={{height: '50%' ,display:'flex', alignItems: "center" , justifyContent: "center" }} >
                            <p style={{fontSize: '30px', fontWeight: "bold"}} >Dev Felipe Nunes</p>
                        </div>
                        <div style={{height: '50%' ,display:'flex', alignItems: "center" , justifyContent: "center",}} >
                            <p style={{fontSize: '15px', fontWeight: "bold", textTransform:"uppercase" }} >software engineer</p>

                        </div>
                    </div>
            </Html>
        </mesh>
    )
}