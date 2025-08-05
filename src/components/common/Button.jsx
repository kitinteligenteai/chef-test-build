// src/components/common/Button.jsx (VERSIÓN DE PRUEBA AISLADA)
import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ onClick, children, variant = 'primary', size = 'medium', className = '', disabled = false }) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Estilos simplificados para no depender de la configuración completa de Tailwind
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    disabled: 'bg-gray-200 text-gray-500 cursor-not-allowed',
  };

  const sizeStyles = {
    medium: 'px-6 py-2.5',
  };

  // Usamos backticks (`) para la interpolación de cadenas
  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[disabled ? 'disabled' : variant]} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
