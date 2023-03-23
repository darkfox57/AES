---

for run project exec

# npm run dev : use the project locally

# npm run start : use the project for production

# npm run build : autogenerate the files in build

#file structure

    *src
        - *config => carpeta para configuracion previa para el uso de las librerias, base de datos, etc
        - *controllers => Esta carpeta es para la comunicacion entre la base de datos y las peticiones que realize el usuario
        - *libs => carpeta para el uso de funciones o script de ayuda
        - *handlers => carpeta para manejo de peticiones
        - *database => la creacion de modelos y relaciones
        - *routes => funciona como middleware para las rutas
        - *middleware => funciones de express para las peticiones
        - index.js => archivo raiz para levantar el servicio
