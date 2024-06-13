document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    
    function renderBooks() {
        // Llamada a PHP para obtener los datos de los estudiantes y renderizarlos en la tabla
        fetch('crud.php')
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
        fetch('crud.php', {
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
    
    renderBooks(); // Renderizar la lista de estudiantes al cargar la página
});
