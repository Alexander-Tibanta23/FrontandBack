document.addEventListener("DOMContentLoaded", function () {
    function cargarEstudiantes() {
        fetch('https://pje4h805t4.execute-api.us-west-2.amazonaws.com/dev/students')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud GET: ' + response.statusText);
                }
                return response.json();
            })
            .then(estudiantes => {
                actualizarTabla(estudiantes);
            })
            .catch(error => console.error('Error al cargar estudiantes:', error.message));
    }

    function actualizarTabla(estudiantes) {
        var tbody = document.querySelector('tbody');

        tbody.innerHTML = '';

        estudiantes.forEach(estudiante => {
            var row = tbody.insertRow();
            row.insertCell(0).textContent = estudiante.id;
            row.insertCell(1).textContent = estudiante.name;
            row.insertCell(2).textContent = estudiante.address;
            row.insertCell(3).textContent = estudiante.phone;
        });
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(event.target);

        console.log('Datos a enviar:', formData);

        fetch('https://pje4h805t4.execute-api.us-west-2.amazonaws.com/dev/students', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud POST: ' + response.statusText);
            }
            if (response.status === 204) {
                console.log('Solicitud POST exitosa, pero sin contenido.');
            } else {
                return response.json(); 
            }
        })
        .then(data => {
            cargarEstudiantes();
        })
        .catch(error => {
            console.error('Error al agregar estudiante:', error.message);
        });
    });

    cargarEstudiantes();
});
