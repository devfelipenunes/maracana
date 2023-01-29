import { Canvas} from '@react-three/fiber'
import { OrbitControls, Stars, Sky, useGLTF, CameraShake } from '@react-three/drei'
import Box from './components/Box';

import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import stadium from '../src/models/stadium.obj'
import { Camarote } from './components/Camarote';
import { IoLogoGithub } from 'react-icons/io';


export default function App() {

  function handleGitHub() {
    window.location.href = "https://github.com/devfelipenunes"

}

  const obj = useLoader(OBJLoader, stadium)  
  
  
  return (
    <div style={{ height:"700px" }} >

    <Canvas
      camera={{position: [-30,20,-30], fav:30}}
    > 
 

      <Camarote position={[31,5,1]} />
      <Camarote position={[-31,5,1]} />
      <Camarote position={[-1,5,37]} />
      <Camarote position={[1,5,-26]} />



      <directionalLight  position={[0,10, 0]} />
      <primitive  position={[-80,-10,-20]} object={obj} />
      {
        /*
        <Box position={[0, 0, 0 ]} />  
        <Stars />
        
        <Sky azimuth={-10} turbidity={10} rayleigh={0.5} inclination={0.6} distance={1000} />
        */
      }
      <OrbitControls />
    </Canvas>
    <div style={{ height: 130, background: "black", display: 'flex',flexDirection:'column' ,justifyContent:'center', alignItems:'center'  }} >
      <p style={{ color: 'white',fontWeight: 'bold' }} >Uma nova esperiencia</p>
    <IoLogoGithub color='white' onClick={handleGitHub} size={'30'} />
    </div>
    </div>

  );
}
