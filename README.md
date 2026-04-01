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

PORT: define el puerto de ejecución del backend (por defecto es 3000)
MOCK_API_URL: url base del servicio mock (sin incluir endpoint /mock/sync)
MOCK_API_TOKEN: token de acceso para el servicio mock (sin el "Bearer")

### En el frontend

VITE_API_URL: Ruta del backend (por defecto es http://localhost:3000)

## Uso de la aplicación

1. Abrir el frontend en el navegador (http://localhost:5173)
2. Presionar el botón "Sincronizar"
3. Verificar por medio de las opciones del sidebar:
   * Registros almacenados
   * Bitácora de ejecuciones

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

* Se eligió SQLite para la base de datos por su simplicidad y facilidad de uso en entornos locales.
* Se separó la lógica en capas para mantener claridad y escalabilidad básica.
* Backend:
  * config: Define la configuración inicial de la bd asi como la creación de la misma si no existe
  * repositories: se encarga de las consultas directas a la base de datos
  * services: servicio para ejecutar la sincronización del mock y guardado de datos
  * controllers: conectan servicios y repositories con rutas
  * routes: expone los endpoints para ser consumidos por el frontend
  * utils: contiene un archivo encargado de transformar y limpiar los registros
* Frontend:
  * components: se crearon 2 tablas principales y un sidebar
  * pages: se creo una unica página principal alternando entre ambas tablas
  * services: contiene un archivo para consumir al backend
  * se utilizó tailwind para los estilos css por su flexibilidad y facilidad de uso

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

## Manejo de errores

* Se utilizó try/catch en el proceso de sincronización
* En caso de error:
  * Se registra en la bitácora con estatus de error
  * Se guarda el mensaje correspondiente

## Mejoras futuras

* Añadir autenticación de usuarios
* Agregar paginación en tablas
* Integrar validaciones avanzadas
* Mejorar la UI/UX
* Agregar pantalla de carga
* Implementar filtros por tipo de servicio
* Añadir tests unitarios
* Agregar validación de health check para el mock
* Manejo más robusto de errores
* Dockerización del proyecto
