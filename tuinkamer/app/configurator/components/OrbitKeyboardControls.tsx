import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'

export function OrbitKeyboardControls() {
  const { camera, gl } = useThree()

  useEffect(() => {
    const step = 0.3
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w': camera.position.z -= step; break
        case 's': camera.position.z += step; break
        case 'a': camera.position.x -= step; break
        case 'd': camera.position.x += step; break
        case 'ArrowUp': camera.position.y += step; break
        case 'ArrowDown': camera.position.y -= step; break
        case 'ArrowLeft': camera.rotation.y += 0.05; break
        case 'ArrowRight': camera.rotation.y -= 0.05; break
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [camera])

  return <OrbitControls enablePan enableZoom enableRotate args={[camera, gl.domElement]} />
}
