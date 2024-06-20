# platinum-technical-test
Para levantar el proyecto y al mismo tiempo su servidor es necesario abrir dos consolas diferentes.
Proyecto Angular: ng serve
Servidor json-server: npm run backend

Al ir a l url por defecto se muestra una tabla con los dispositivos que existen actualmente en la base de datos.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/0ed72828-b00c-4732-8a15-5b54d755512f)

Se recrean los cuatro procesos basicos en el desarrollo web (CRUD)
Para crear un nuevo dispositivo se da click en el botón "Nuevo dispositivo" el cual abrira un nuevo modal con los campos requeridos (id, nombre, estado, tipo y fecha de compra), internamente se valida que el campo id acepte solamente valores numericos, al mismo tiempo se valid que los datos: id, nombre o serial y fecha sean obligatorios.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/e7dd21b5-f6ec-4f5c-a736-b9e48222972e)

Ejemplos de validaciones incorrectas:
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/fe44d751-5244-4cd0-ab7d-b3071a9ad815)


El botón de crear se activa solamente si se cumplen con los requisitos plasmados en el formulario, de lo contrarion no se podra crear un nuevo dispositivo. Una vez se da click en el, se consume el api de json-server y se muestra mediante una alerta que se ha creado el dispositivo correctamente.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/edab468e-785f-4d45-bc1d-c5ed8af1dd8a)

Cargue completo 
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/439de7a4-3fd8-46f3-9d0f-c0d98132b79f)

La tabla que se puede visualizar en la pantalla princiapl esta constituida por una lista paginada que se realiza segun la cantidad de datos que se encuentren en la base de datos, y es totalmente funcional. Acicional se cuenta con la funcionalidad de ordenamiento mediante las fechas.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/51c49a9c-2803-4fb3-98d1-916877b9258e)


Asi mismo tiempo una entrada de texto que permite buscar mediante el nombre el dispositivo especifico, una vez seleccionado se muestra nuevamente el modal con toda la información relacionada al dispositivo.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/d1b276f7-a08a-444e-a7c5-f645a7dfff3d)
Imagen cargada
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/1a78c408-b0e2-43ed-a50b-507114824d5d)

Dentro de ella encontramos en cada una de las filas los botones referentes a los otros tres procesos basicos (CRUD).
El primero botón con el icono "eye", nos hace una busqueda mediante id y muestra la información relacionada a cada uno de los dispositivos.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/d28b5e02-23c0-4455-9a10-918ffaa8c765)

Seguido de este encontramos el icono de editar el cual nos carga nuevamente el objeto actual dentro de un formulario y nos lo muestra en un modal. A diferencia del anterior, este nos permite una nueva accion dentro del lodal el cual es hacer la edición desde el mismo.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/9b51135e-6110-4a9b-b272-8de8185de5c5)

Tambien se valida que el formulario cumpla con los requermientos y no deja actualizar hasta que esten validados.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/0b1958ea-1948-44d8-a3bb-cc2377ac3f36)

Por ultimo encontramos el botón de eliminar el cual nos elimina completamente el dispositivo de la base de datos.
![image](https://github.com/YeisonMolanoL/platinum-technical-test/assets/167223294/6ddfb724-2b03-444c-9544-fec29b1f9a88)





