document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    let books = JSON.parse(localStorage.getItem('books')) || [];
    
    function renderBooks() {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.year}</td>
                <td class="actions">
                    <button class="edit" onclick="editBook(${index})">Editar</button>
                    <button class="delete" onclick="deleteBook(${index})">Eliminar</button>
                </td>
            `;
            bookList.appendChild(tr);
        });
    }
    
    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bookId = document.getElementById('bookId').value;
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        
        if (bookId) {
            // Update book
            books[bookId] = { title, author, year };
        } else {
            // Add new book
            books.push({ title, author, year });
        }
        
        localStorage.setItem('books', JSON.stringify(books));
        bookForm.reset();
        document.getElementById('bookId').value = '';  // Reset the bookId field
        renderBooks();
    });
    
    window.editBook = (index) => {
        const book = books[index];
        document.getElementById('bookId').value = index;
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('year').value = book.year;
    };
    
    window.deleteBook = (index) => {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        renderBooks();
    };
    
    renderBooks();
});
