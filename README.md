# LMDAW1-Noticias - Web de noticias sobre Drones
## Objectivo: Realizar una aplicación web de noticias que, al hecer scroll hasta el final de la página, recargue más noticias con html, jQuery y Bootstrap.
## Enlace
### La url en Rawgit de `news.html` es: https://rawgit.com/collami/LMDAW1-Noticias/master/news.html
## Estructura de ficheros del proyecto
### 1- El fichero principal es:`news.html`, contiene la portada y las 3 primeras noticias pre-cargadas.
### 2- Los ficheros`news1.html` y `news2.html` contienen las noticias ampliadas de las dos primeras noticias del fichero `news.html`.
### 3- Colección de imágenes para el proyecto en la carpeta `img`.
#### 3.1- Colección de imágenes de las noticias en la carpeta `noticias\imgbig`.
#### 3.2- Colección de imágenes de las noticias con menor resolución en la carpeta `noticias\imgmid`.
### 4- Colección de ficheros css para el proyecto en la carpeta `css`.
### 5- Ficheros javascript para el proyecto en la carpeta `js`.
#### 5.1- El fichero `js.js` para ejecutarse sobre `news.html`.
#### 5.2- El fichero `jsnews.js` para ejecutarse sobre `news1.html` y `news2.html`.
### 6- Ficheros json con las noticias adicionales a cargar en `news.html` en la carpeta `data`.
#### 6.1- El fichero `1.json` contiene tres noticias que se cargarán en la primera carga.
#### 6.2- El fichero `2.json` contiene tres noticias que se cargarán en la segunda carga.
### 7- La carpeta `Bocetos` contiene los bocetos de news.html y news{1-2}.html.
### 8- La rama `Minify` contiene el proyecto con los ficheros html, css, json y js minimificados.
## Los ficheros html, css, xml, json y js están identados y validados.
### Herramintas:
~~~~
Validador de html:
         https://validator.w3.org/#validate_by_input
Validador de css:
         https://jigsaw.w3.org/css-validator/#validate_by_input
Validador de js:
         http://esprima.org/demo/validate.html
Validador de rss:
         https://validator.w3.org/feed/
Validador de json:         
         https://jsonlint.com/
~~~~
## Se ha reducido la resolución de las imágenes con el objetivo de utilizarlas en la web, al ser cargada por dispositivos móviles.
### Herraminta:
~~~~
http://webresizer.com/
~~~~
## Se han empleado herramientas de Bootstrap 3 para el diseño de la web.
### Herramintas:
~~~~
Navbar: Para mostrar la barra de navegación.
Carousel: Para mostrar una secuncia de imágenes bajo la barra de menú.
Container: Para contener las noticias.
Button Groups: Para soliciar el registro o ingreso en la web.
~~~~
## Se ha creado un logo identificativo de la web (Todo Drones), para incluirlo en la barra de navegación y el pie de página.
### Herramintas:
~~~~
https://www.crearlogogratisonline.com/
~~~~
## Observaciones:
### Para cargar más noticias:
#### > Se debe  pulsar sobre el botón "cargar más noticias" al pie de la última noticia cargada.
#### > Si la opción "Cargar noticias con scroll" está habilitada, hacer scroll hasta el final de la página.
### El título del botón "cargar más noticias" cambiará a "no hay más noticias" cuando se hallan cargado los dos ficheros json.
### Se ha incluido publicidad.
#### > Si la web es cargada por un dispositivo de escritorio, aparecerá fija en el margen derecho de la página.
#### > Si la web es cargada por un dispositivo móvil, aparecerá fija en la parte inferior de la página.
### Se ha incluido en el pie de página, acceso a las principales plataformas de redes sociales para compartir informacion de la web.
