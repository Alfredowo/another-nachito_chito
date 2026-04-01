# Nachito Chito

## Descripción

Aplicación full stack que permite ejecutar una sincronización manual contra el servicio mock de nachito chito, procesar la información obtenida, almacenarla de forma persistente y visualizar tanto los resultados como la bitácora de ejecuciones.

## Tecnologías utilizadas

### Backend

* Node.js
* Express
* SQLite

### Frontend

* React (Vite)
* Tailwind CSS

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Alfredowo/another-nachito_chito.git
cd another-nachito_chito
```

Se requiere contar con Node >= v24.14.1 para el correcto funcionamiento de Vite 8.0.1 en el frontend

### 2. Ejecutar el backend

```bash
cd backend
npm install
npm run dev
```

El backend se ejecuta en: http://localhost:3000

### 3. Ejecutar el frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend se ejecuta en: http://localhost:5173

## Variables de entorno

Se configuraron las siguientes variables de entorno para configuraciones y datos sensibles:

### En el backend

* **PORT:** define el puerto de ejecución del backend (por defecto es 3000)
* **MOCK_API_URL:** url base del servicio mock (sin incluir endpoint /mock/sync)
* **MOCK_API_TOKEN:** token de acceso para el servicio mock (sin el "Bearer")

### En el frontend

* **VITE_API_URL:** Ruta del backend (por defecto es http://localhost:3000)

## Uso de la aplicación

1. Abrir el frontend en el navegador (http://localhost:5173)
2. Presionar el botón "Sincronizar"
3. Verificar por medio de las opciones del sidebar:
   * Registros almacenados
   * Bitácora de ejecuciones

En caso de requerir pruebas sin datos previos, se puede borrar el archivo database/nachitobd.sqlite. Al reiniciar el backend, se creará automáticamente un nuevo archivo de base de datos con las tablas vacías.

## Flujo técnico de sincronización

1. El usuario presiona el botón "Sincronizar" en la interfaz.
2. El frontend realiza una petición POST al endpoint /sync del backend.
3. El backend:
   * Consume el servicio mock de nachito chito
   * Procesa y normaliza los datos recibidos
   * Guarda los registros en la base de datos
   * Registra la ejecución en la bitácora
4. El frontend actualiza la información mostrada en pantalla (logs y registros).

## Base de datos

Se utilizó SQLite con dos tablas principales:

* logs
* records

El esquema de la base de datos se inicializa automáticamente al arrancar el backend. El archivo 'database/nachitobd.sqlite' se crea si no existe, o se reutiliza en caso de existir, conservando los datos persistentes.

## Decisiones técnicas

* **SQLite:** se eligió por su simplicidad y facilidad de uso en entornos locales,
* **Separación en capas:** se dividió la lógica en capas (config, controllers, repositories, routes, services y utils) para mantener claridad y escalabilidad básica.
* **Express:** se eligió por ser minimalista y suficiente para exponer un único endpoint de sincronización.
* **React + Vite:** permite levantar el frontend rápidamente sin configuración compleja
* **Tailwind CSS:** se eligió por su flexibilidad y facilidad de uso para estilos css
* **Variables de entorno:** se utilizaron para separar configuración sensible (tokens, URLs, puertos) del código fuente.

## Transformación y limpieza de datos

Durante el procesamiento y limpieza de dato se realiza lo siguiente:

* Se remueven espacios innecesarios de textos con trim()
* Se estandarizan datos que deberian ser numeros a tipo de dato numerico
* Se normaliza el estatus definiendo 3 estados:
  * aprobado
  * pendiente
  * rechazado
* Se definen los siguientes servicios:
  * tarjetas de crédito
  * creditos
  * prestamos
  * seguros
* Se remueven caracteres innecesarios de los números telefónicos con la expresión regular '/\D/g'

Esto permite mantener una estructura consistente en la base de datos.

## Supuestos tomados

* Se consideró una separación entre servicios de tipo "créditos" y "tarjetas de crédito" debido a la falta de claridad entre tipos de servicios; se requiere confirmar si debería homologarse en un único servicio "créditos".
* Se supone que solo deberian considerarse 3 estados principales (aprobado, pendiente y rechazado), omitiendo cualquier otro estado intermedio

## Manejo de errores

* Se utilizó try/catch en el proceso de sincronización
* En caso de error:
  * Se registra en la bitácora con estatus de error
  * Se guarda el mensaje correspondiente

## Mejoras futuras

* Integrar validación de registros duplicados
* Mostrar cantidad de registros para validar que las sincronizaciones se ejecuten de manera correcta
* Añadir autenticación de usuarios
* Agregar paginación en tablas
* Mejorar la UI/UX
* Agregar pantalla de carga
* Implementar filtros por tipo de servicio
* Añadir tests unitarios
* Agregar validación de health check para el mock
* Dockerización del proyecto
