Aulario CRUD con PostgreSQL y Node.js
Este proyecto es una aplicación de backend que proporciona una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos PostgreSQL. La aplicación está escrita en Node.js y utiliza Express.js para el enrutamiento, Sequelize como ORM para interactuar con la base de datos y dotenv para la gestión de variables de entorno.

Instalación
Clonar el repositorio:

bash
Copy code
git clone <URL_DEL_REPOSITORIO>
Instalar dependencias:

bash
Copy code
cd aulario-crud
npm install
Configurar variables de entorno:

Copiar el archivo .env.example y renombrarlo a .env. Ajustar las variables de entorno según sea necesario, especialmente las relacionadas con la base de datos PostgreSQL.

Configurar la base de datos:

Asegurarse de tener un servidor PostgreSQL en funcionamiento y crear una base de datos para la aplicación. Actualizar las variables de entorno en el archivo .env con la URL de la base de datos y las credenciales de acceso.

Ejecutar la aplicación:

bash
Copy code
npm start
Esto iniciará el servidor Express en el puerto especificado en las variables de entorno o en el puerto 3000 por defecto.

Uso
La aplicación proporciona las siguientes rutas para cada recurso (usuarios, materias, horarios):

GET /api/v1/usuarios: Obtener todos los usuarios.
GET /api/v1/usuarios/:id: Obtener un usuario por ID.
POST /api/v1/usuarios: Crear un nuevo usuario.
PUT /api/v1/usuarios/:id: Actualizar un usuario existente por ID.
DELETE /api/v1/usuarios/:id: Eliminar un usuario por ID.
Las rutas para materias y horarios son similares, reemplazando usuarios con el nombre del recurso correspondiente.

Detalles Técnicos
Tecnologías Utilizadas:

Node.js: Plataforma de tiempo de ejecución de JavaScript.
Express.js: Framework de aplicación web para Node.js.
PostgreSQL: Sistema de gestión de bases de datos relacional.
Sequelize: ORM para Node.js que facilita la interacción con la base de datos.
dotenv: Paquete que carga variables de entorno desde un archivo .env.
Estructura del Proyecto:

La aplicación sigue una estructura MVC (Modelo-Vista-Controlador) para una organización clara del código.
Los modelos Sequelize se encuentran en la carpeta models, los controladores en controllers, los servicios en services, y las rutas en routes.
Base de Datos:

Se utiliza PostgreSQL como sistema de gestión de bases de datos.
Se han definido modelos Sequelize para cada tabla en la base de datos, lo que facilita la interacción con la base de datos desde Node.js.
API RESTful:

La aplicación proporciona una API RESTful para realizar operaciones CRUD en cada recurso.
Las rutas y controladores se configuran utilizando Express.js, con cada operación CRUD manejada por un controlador correspondiente.
Servicios:

Se han creado servicios que encapsulan la lógica de negocio y las operaciones de base de datos relacionadas con cada recurso.
Estos servicios ofrecen una interfaz clara y reutilizable para interactuar con la base de datos y manejar la lógica de negocio.
Contribución
Las contribuciones son bienvenidas. Si encuentras un problema o tienes una sugerencia, no dudes en abrir un problema o enviar una solicitud de extracción.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.