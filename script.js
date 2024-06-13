document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    
    function renderBooks() {
        // Llamada a PHP para obtener los datos de los estudiantes y renderizarlos en la tabla
        fetch('CRUD.php')
            .then(response => response.text())
            .then(data => {
                bookList.innerHTML = data;
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    }
    
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(bookForm);
        
        // Enviar los datos del formulario al servidor PHP
        fetch('CRUD.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Imprimir respuesta del servidor (puede ser un mensaje de éxito o error)
            console.log(data);
            // Volver a renderizar la lista de estudiantes
            renderBooks();
        })
        .catch(error => console.error('Error al enviar los datos:', error));
    });
    
    window.editBook = (index) => {
        // Esta función no necesita modificarse si estás usando el mismo formulario para editar
        // Simplemente muestra los datos del estudiante en el formulario
    };
    
    window.deleteBook = (index) => {
        // Esta función no necesita modificarse, ya que elimina un estudiante localmente
        // Después de eliminar, se volverá a renderizar la lista de estudiantes
    };
    
    renderBooks(); // Renderizar la lista de estudiantes al cargar la página
});
