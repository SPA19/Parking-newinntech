import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const createBackup = () => {
  try {
    //Nombre base de datos
    const dbName = "Parking-newinntech";

    // Ruta de destino para el backup
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const backupPath = path.resolve(__dirname, "../backups");

    // Fecha para el archivo
    const dateStr = new Date().toISOString().slice(0, 10);

    // Comando para crear el backup
    const backupCommand = `mongodump --db=${dbName} --out=${backupPath}/backup_${dateStr}`;

    // Verifica si la carpeta backups existe, si no, créala
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath);
    }

    // Ejecuta el comando de mongodump y hace validaciones
    exec(backupCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar el backup: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }
      console.log(
        `Backup realizado correctamente en ${backupPath}/backup_${dateStr}`
      );
    });
  } catch (error) {
    console.error("Error en el proceso de backup:", error);
  }
};

//Ejecución de la función
createBackup();
