// src/components/SnowEffect.jsx
import Particles from 'react-tsparticles';
import { loadSnowPreset } from 'tsparticles-preset-snow';

const SnowEffect = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = async (main:any) => {
    // Carregar o preset de neve
    await loadSnowPreset(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '', // Cor de fundo escura
          },
        },
        particles: {
          color: {
            value: '#ffffff', // Cor das partículas (branca)
          },
          move: {
            enable: true,
            direction: 'bottom',  // Direção do movimento para baixo
            speed: 1,            // Velocidade do movimento
            outModes: {
              default: 'out', // Partículas saem do container
            },
          },
          number: {
            value: 50,       // Número total de partículas
          },
          opacity: {
            value: 0.6,       // Opacidade das partículas
          },
          size: {
            value: { min: 2, max: 4 },  // Tamanho das partículas
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default SnowEffect;
