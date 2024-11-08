import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Parking NewInntech API",
      version: "1.0.0",
      description:
        "API prueba tecnica para gestión de parqueadero de carros y motos de New Inntech S.A.S",
    },
    contact:{
      name: "Simon Posada Acosta",
      email: "simon.150@hotmail.com",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: [
    "./src/routes/*.js",
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;