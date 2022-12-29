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
      shadowPostion: { value: -1.1, min: -2, max: 2, step: 0.01 },
      shadowScale: { value: 10.5, min: 0, max: 50, step: 0.01 },
      shadowBlur: { value: 2.31, min: 0, max: 10, step: 0.01 },
    }
  );

  const mobile_var = useControls('Mobile', {
    px: { value: 2.5, min: -50, max: 50, step: 0.01 },
    py: { value: -0.6, min: -50, max: 50, step: 0.01 },
    pz: { value: 0.14, min: -50, max: 50, step: 0.01 },
    mobileScale: { value: 0.5, min: -10, max: 10, step: 0.01 },
    rx: { value: 27.2, min: 0, max: 360, step: 0.01 },
    ry: { value: 10.5, min: 0, max: 360, step: 0.01 },
    rz: { value: 2.33, min: 0, max: 360, step: 0.01 },
    ix: { value: 0.18, min: -50, max: 50, step: 0.01 },
    iy: { value: 1.32, min: -50, max: 50, step: 0.01 },
    iz: { value: 0.09, min: -50, max: 50, step: 0.01 },
    irx: { value: 0, min: 0, max: 360, step: 0.01 },
    iry: { value: 0, min: 0, max: 360, step: 0.01 },
    irz: { value: 0, min: 0, max: 360, step: 0.01 },
  });

  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );
  const mobile = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
  );
  return (
    <>
      <color attach="background" args={[backgroundColor]} />
      {/* <OrbitControls makeDefault /> */}
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
          {/* mobile  */}
          <primitive
            object={mobile.scene}
            scale={mobile_var.mobileScale}
            rotation={[mobile_var.rx, mobile_var.ry, mobile_var.rz]}
            position={[mobile_var.px, mobile_var.py, mobile_var.pz]}
          >
            <Html
              transform
              wrapperClass="mobileSite"
              distanceFactor={1.17}
              position={[mobile_var.ix, mobile_var.iy, mobile_var.iz]}
              rotation={[mobile_var.irx, mobile_var.iry, mobile_var.irz]}
            >
              <iframe
                src="https://darikmohammed.github.io/Portfolio/"
                title="computer"
              ></iframe>
            </Html>
            {/* Desktop */}
          </primitive>
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="portfolioSite"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                src="https://darikmohammed.github.io/Portfolio/"
                title="computer"
              ></iframe>
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
