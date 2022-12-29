import {
  Environment,
  useGLTF,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
} from '@react-three/drei';
import { useControls } from 'leva';

function App() {
  const { backgroundColor } = useControls('Experiance', {
    backgroundColor: '#4b4b4b',
  });

  const { shadowPostion, shadowScale, shadowBlur } = useControls(
    'Computer Shadow',
    {
      shadowPostion: { value: -1.3, min: -2, max: 2, step: 0.01 },
      shadowScale: { value: 5, min: 0, max: 50, step: 0.01 },
      shadowBlur: { value: 2.4, min: 0, max: 10, step: 0.01 },
    }
  );

  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );
  return (
    <>
      <color attach="background" args={[backgroundColor]} />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.3}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={45}
            color={'#ffffff'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="portfolioSite"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://darikmohammed.github.io/Portfolio/"></iframe>
            </Html>
          </primitive>
        </Float>
      </PresentationControls>
      <Environment preset="city" />
      <ContactShadows
        position-y={shadowPostion}
        scale={shadowScale}
        blur={shadowBlur}
      />
    </>
  );
}

export default App;
