const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000; // Puerto donde correrá tu servidor

// Sirve los archivos estáticos de tu aplicación (directorio `www`)
app.use(express.static(path.join(__dirname, 'www')));

// Configuración del proxy para redirigir las solicitudes API
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:8080', // URL de tu backend
    secure: false, // Si el backend usa HTTPS, cámbialo a true
    changeOrigin: true,
    pathRewrite: { '^/api': '' }, // Elimina el prefijo "/api" antes de reenviar
    logLevel: 'debug', // Opcional: muestra detalles de las solicitudes
  })
);

// Maneja las rutas desconocidas para la SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
