# Introduccion

El proyecto es un template básico para correr la aplicación con la invocación de servicios REST saltándose la restricción de CORS.

# Servicios Rest

Existen dos servicios REST disponibles para el Exámen:

- ***Listar Estudiantes***: Este servicio proporciona una lista de estudiantes en formato JSON 
- ***Crear Estudiante***: Este servicio expone el proceso de creacion de Estudiantes.

Ambos endpoints se los accede mediante la siguiente URL:


```
https://pje4h805t4.execute-api.us-west-2.amazonaws.com/dev/students
```
***Es potestad del estudiante escoger el metodo HTTP mas apropiado dependiendo del caso***

## Prerequisitos

- Tener Docker instalado en el sistema operativo al cual se va a desarrollar.

## Utilizacion

- Ejecutar el siguiente comando, este sirve para crear una imagen propietaria con las configuraciones del Reverse Proxy necesarias para correr la aplicacion.

```

docker build -t my-exam-custom-image .

```

- Ejecutra el siguiente comando para correr la imagen de Docker con el Reverse Proxy y el contexto por defecto la carpeeta del proyecto:

    - En Linux/Mac
        ```
        docker run -p 8080:8080 -v $(pwd):/usr/share/nginx/html my-exam-custom-image
        ```

    - En Windows
        ```
        docker run -p 8080:8080 -v %cd%:/usr/share/nginx/html my-exam-custom-image
        ```

Se puede acceder a la siguiente URL para acceder al servidor NGINX que se encuentra ejecutando con el comando anterior:

```
    http://localhost:8080/
```

***Al utilizar un Reverse Proxy los servicios REST se encuentran disponibles bajo el mismo servidor NGINX con el siguiente endpoint (Por lo que se evitará tener errores de tipo CORS en el Exámen):***

```
http://localhost:8080/dev/students
```


Automáticamente cualquier cambio que se haga en el directorio o en archivos dentro del proyecto se verán reflejados.

## Rubrica para la calificación

| Aspecto a Implementar      | % de Peso |
| ----------- | ----------- |
| Listado de Estudiantes      | 25%       |
| Creación de Estudiantes   | 25%        |
| Uso de método HTTP apropiado   | 20%        |
| Control de Errores en la Invocación  | 10%        |
| Implementación de Interface Responsive  | 20%        |