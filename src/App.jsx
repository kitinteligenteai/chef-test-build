// src/App.jsx (Versión de Prueba)
import React from 'react';
import Button from './components/common/Button';

export default function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Prueba de Build de Vercel</h1>
      <p>Si ves este botón y funciona, el build fue exitoso.</p>
      <Button onClick={() => alert('¡El componente Button funciona perfectamente!')}>
        Haz Clic Aquí
      </Button>
    </div>
  );
}
