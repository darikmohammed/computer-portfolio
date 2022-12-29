import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <color attach="background" args={['#695b5b']} />
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default App;
