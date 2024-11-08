const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Parking Management API",
      version: "1.0.0",
      description: "API para gestión de parqueadero de carros y motos",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["../routes/vehicles.routes.js"],
};

export default swaggerOptions;