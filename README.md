<div align=center>
<image src="./redsocial" alt="Red Social">
# Proyecto de Backend
## Red Social

 
En este proyecto, desarrollamos el backend de una red social utilizando MongoDB y Express. Permite el registro de usuarios, así como la gestión de sus cuentas y la creación de publicaciones con interacción. Este proyecto se realizó como parte del Bootcamp Full Stack Developer de [![GeeksHubs Academy](https://img.shields.io/badge/GeeksHubs_Academy-%23F40D12?style=for-the-badge&color=%23F40D12)](https://geekshubsacademy.com/)


## Tecnologías Utilizadas

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)[![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)[![TypeOrm](https://img.shields.io/badge/TypeOrm-%23C70D2C?style=for-the-badge&color=%23C70D2C)](https://typeorm.io/)[![ThunderClient](https://img.shields.io/badge/Thunder_Client-%237A1FA2?style=for-the-badge)](https://www.thunderclient.com/)[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)[![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)](https://nodemon.io/)
</div>

## Tabla de Contenidos
- 🧾[Diseño BBDD](#diseño-bbdd)
- ⚙️[Instalacion en local](#einstalacion-en-local)
- 🎯[Endpoints](#endpoints)
- 🛠️[Posibles Mejoras](#posibles-mejoras)
- 💻[Contacto](#contacto)
- 🪪[Creditos](#creditos)


## Diseño BBDD
Se han usado dos colecciones, Users y Posts.

## Instalación en local
Nota: Es necesario tener instalado [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

1. Clonar el repositorio con el comando`$ git clone [URL del repositorio]`
2. Instalar dependencias con el comando` $ npm install `
3. Conectamos nuestro repositorio con nuestra base de datos en Mongo Atlas
4. Ejecutamos los seeders `$ npm run seed`
6. Ponemos en funcionamiento el servidor `$ npm run dev`

## Endpoints
### localhost root url: http://localhost:4000/
### deploy root url:
<details>
<summary> Endpoints </summary>

- AUTH

    - REGISTER

            POST api/auth/register
        body:
            {
                "email": "user@user.com",
                "password": "12345678"
                
            }
    La contraseña debe tener  entre 6 y 10 carácteres
        
    - LOGIN

            POST api/auth/login
        body:
            {
                "email": "user@user.com",
                "password": "12345678"
            }

        Usuarios creados:
        SUPERADMIN:
        email: superadmin@superadmin.com
        password: 12345678
        ADMIN: 
        email: admin@admin.com
        password: 12345678

-USERS

    -GET
             GET api/users

    El usuario tiene que ser super_admin para ver todos los usuarios
            
            
    -GET PROFILE


        GET api/users/profile

    El usuario podrá ver su propio perfil


    - UPDATE PROFILE      
           
        PUT api/users/profile

    El usuario podrá modificar su propio perfil, cambiando los campos que considere necesario (excepto el email y contraseña):
            {
                "firstName":"Claudia",
                "lastName": "Alvaro"
            }
    -GET ALL POSTS BY ID
        GET api/users/posts/{id}
    
    Es necesario introducir el id de un usuario por parámetro para poder ver todos los posts de ese usuario.

-POSTS


    - CREATE POSTS

            POST api/post
        body:
            {
                "content": "Mi primer post"
            }

    - DELETE BY ID

          DELETE api/post/{id}

    El usuario puede borrar un post introduciendo por parámetro el id del post que desea eliminar.


    - UPDATE POST

            PUT api/post/{id}
            body:
            {
                "content": "Mi post acualizado"
            }

    El usuario puede modificar un post introduciendo por parámetro el id del post y por el body pasará el contenido a actualizar.


    - GET MY POSTS

            GET api/post/own

    El usuarío puede obtener todos los posts que ha publicado.

    - GET ALL POSTS

            GET api/post

    El usuario puede obtener todos los posts publicados en la red social.

    - GET POST BY ID

         PUT  api/post/{id}
    
    El usuario puede obtener todos los posts publicados por otro usuario, para ello pasamos por parámetro el id del usuario creador de los post que se quieren obtener.


           



</details>

## Contacto

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:claudiaalvaro17@gmail.com)[![LinkedIn]claudia-alvaro-cano-47860538/)

## Créditos
Este proyecto ha sido realizado por mi, Claudia Álvaro, como parte del Bootcamp Full Stack Developer de [![GeeksHubs Academy](https://img.shields.io/badge/GeeksHubs_Academy-%23F40D12?style=for-the-badge&color=%23F40D12)](https://geekshubsacademy.com/)

