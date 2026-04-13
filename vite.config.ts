import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//@ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 8080,
    },
    resolve: {
        alias: {
            '@components': path.resolve('./src/components'),
            '@features': path.resolve('./src/features'),
            '@routes': path.resolve('./src/routes'),
        },
    },
});
