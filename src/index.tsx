import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './client';

import './index.scss';

createRoot(document.getElementById('root')!).render(<App temp={true} />);
