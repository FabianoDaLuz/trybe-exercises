import Book from './componenets/book';
// import bookHeader from './components/bookHeader;
// import Footer
// import Title

const bookList = [
{
    title: 'The Godfather',
    pages: 433,
    isRead: true,
    isFavorite: false,
},
{
    title: 'The Little Prince',
    pages: 92,
    isRead: true,
    isFavorite: true,
},
{
    title: 'Clean Code',
    pages: 425,
    isRead: false,
    isFavorite: false,
},
{
title: 'Dom casmurro',
pages: 192,
isRead: true,
isFavorite: false,
},
{
    title: 'Vidas Secas',
    pages: 176,
    isRead: true,
    isFavorite: false,
},
{
        title: 'Turma da mônica',
        pages: 52,
        isRead: false,
        isFavorite: false,
},
]
//<Footer />

function App() {

    return (
        <div>
            <bookHeader />
            <div className="container">
                <bookTitle />
            <ul className="books-list">
                {bookList.map((book) => (
                    <Book key={book.title} book={book} />
                ))}
            </ul>
        </div>
        <bookFooter />
        </div>
    );
}

export default App;