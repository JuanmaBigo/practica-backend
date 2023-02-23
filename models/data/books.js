import Book from "./../Book.js";
import "dotenv/config.js";
import "../../config/database.js";

let books = [
    {
        title: 'avengers',
        date: new Date('2019-12-10'),
        category_id: "63f769ed96e6876b38b8dd27"
    },
    {
        title: 'one piece',
        date: new Date('1997-07-22'),
        category_id: "63f769ed96e6876b38b8dd25"
    },
    {
        title: 'naruto',
        date: new Date('1999-09-21'),
        category_id: "63f769ed96e6876b38b8dd25"
    },
    {
        title: 'iron man',
        date: new Date('1963-3-01'),
        category_id: "63f769ed96e6876b38b8dd27"
    }
]

Book.insertMany(books);