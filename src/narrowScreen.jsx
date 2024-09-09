import { useState, useEffect } from 'react';

const useIsWideScreen = (threshold = 424) => {
  // Estado para controlar si la pantalla es mayor al valor umbral proporcionado
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > threshold);

  useEffect(() => {
    // Función para actualizar el estado al cambiar el tamaño de la ventana
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > threshold);
    };

    // Agregar el event listener para la detección de cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, [threshold]); // El umbral se incluye como dependencia para permitir su modificación

  return isWideScreen;
};

export default useIsWideScreen;
