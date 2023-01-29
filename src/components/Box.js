import React, {useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import BoxCenter from './BoxCenter'
import BoxLeft from './BoxLeft'
import BoxRight from './BoxRight'


export default function Box (){
  const [size, set] = useState(0.5)
  
    return(
      <mesh scale={size * 4}>
      <boxGeometry />
      <meshStandardMaterial />
      <BoxCenter />
      <BoxLeft />
      <BoxRight />
      

    </mesh>
    )
  }