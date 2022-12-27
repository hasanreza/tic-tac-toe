import React from 'react';
import { createRoot } from 'react-dom/client';
/**
 * import styles
 */
import './styles/main.scss';
/**
 * import components
 */
import Container from './components/container';

createRoot(document.getElementById('root')!).render(<Container />);
