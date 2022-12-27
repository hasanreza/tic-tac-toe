import React from 'react';
import { createRoot } from 'react-dom/client';
/**
 * import styles
 */
import './styles/main.scss';
/**
 * import components
 */
import Game from './components/game';

createRoot(document.getElementById('root')!).render(<Game />);
