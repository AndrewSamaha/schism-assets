/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/base.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Towers.geometry} material={materials['Material.001']} position={[-1.94, 1.27, 1.88]} scale={[0.41, 1.28, 0.42]} />
      <mesh geometry={nodes.Doors.geometry} material={materials['Material.002']} position={[0, 0.8, 1.88]} scale={[1, 0.8, 0.04]} />
    </group>
  )
}

useGLTF.preload('/base.gltf')
