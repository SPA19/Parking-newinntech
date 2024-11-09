# 🚗🏍️ Prueba Técnica - New Inntech S.A.S

Este proyecto implementa una API REST con Express.js para gestionar el registro de placas y tiempos en un parqueadero que solo acepta vehículos de tipo **moto** y **carro**. Los carros tienen un límite de **5 cupos** y las motos de **10 cupos**.

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Swagger (para documentación de la API)

## ✨ Funcionalidades

- Registro de vehículos (moto o carro) con placa y tiempo de entrada.
- Listado de vehículos registrados.
- Consulta de detalles de un vehículo por ID.
- Consulta de detalles de un vehículo por Placa.
- Actualización de salida de un vehículo.
- Eliminación de un vehículo registrado.

## 📋 Estructura del Proyecto

- **Express**: Framework utilizado para construir la API REST.
- **Base de Datos**: Almacena los registros de vehículos en **MongoDB**.
- **Postman Collection**: Archivo de colección utilizado para pruebas de los endpoints.
- **Swagger**: Documentación generada en Swagger para los endpoints.

## ⭐ Requisitos Previos

- [Node.js](https://nodejs.org/) v20.17.0
- [npm](https://www.npmjs.com/) para el sistema de gestion de paquetes.
- [MongoDB](https://www.mongodb.com/) para la base de datos.

## ⚙️ Configuración del Proyecto

1. **Clonar el Repositorio de GitHub:**
```bash
  git clone https://github.com/SPA19/Parking-newinntech.git
```

2. **Navega al directorio del proyecto:**
```
  cd Parking-newinntech
```

3. **Instalar Dependencias:**
```
  npm install
```

4. **Configurar Variables de Entorno:**

- Crea un archivo `.env` en la raíz del proyecto y añade la configuración para la base de datos y el puerto del servidor.

5. **Ejecución:**
```
  npm run dev
```

## 📊 Estructura de la Base de Datos

La base de datos MongoDB incluye una colección vehiculos para almacenar la información de los vehículos registrados en el parqueadero. El modelo es el siguiente:

```
{
  "_id": "ObjectId",
  "plate": "string",
  "type": "array",  // "carro" o "moto"
  "entryTime": "date",
  "exitTime": "date"
}
```
## ⚡ Consideraciones Técnicas

- Manejo de errores en las solicitudes HTTP.
- Validaciones de ocupación para cupos de motos y carros.
- Estructura modular para mantener la escalabilidad y limpieza del código.
- Documentación en Swagger disponible en http://localhost:3000/api-docs.

## 👨‍💻 Autor

Desarrollado por Simón Posada Acosta - [simon.150@hotmail.com]
