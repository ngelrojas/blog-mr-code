import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';


var vite_config = defineConfig({
    plugins: [
        react(),
    ]
});

export {vite_config as default};
