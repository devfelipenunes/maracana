import { Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export function Camarote(props) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    function handleSite() {
        window.location.href = "https://www.estadiodomaracana.com.br/"
    
    }


    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 7 : 3}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        <Html distanceFactor={50}>
            {
                clicked && (
        <div style={{ paddingTop: 10,
  textAlign: "left",
  background: "#202035",
  color: "white",
  width:700,
  
  display:"flex",
  justifyContent:"center",
  alignItems:'center',
flexDirection: "column",
  padding: 15,
  borderRadius: 5,}}>
        
    <p style={{fontSize:60, textAlign: 'center' }} >Camarote Exclusivo</p>
    <div  > 


    <p style={{fontSize: 40, textAlign: "center"}}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>

</div>

<button onClick={handleSite} style={{width: 250, height: 100, marginBottom: 50}}  >
    <p  style={{ fontSize: 30 }} >
        Comprar
        
        </p>
</button>
        </div>

                )
            }
      </Html>
      </mesh>
    )
  }