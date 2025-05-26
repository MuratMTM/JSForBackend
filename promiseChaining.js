const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: `Murat` })
        }, 2000);
    });
}

function getBookByUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 101, title: `Clean Code` },
                { id: 102, title: `The Pragmatic Programmer` },

            ])
        }, 1000);
    });
}

function getBookDetails(bookId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: bookId, title: `Clean Code`, author: `Robert C. Martin` },
                { id: bookId, title: `The Pragmatic Programmer`, author: `Andrew Hunt & David Thomas` },
            ]);
        }, 1000);
    });
}

getUser()
    .then(user => {
        console.log(`Kullanıcı:`, user);
        return getBookByUser(user.id);
    })
    .then(books => {
        console.log(`Kullanıcının Kitapları:`, books);
        return getBookDetails(books[0].id);
    })
    .then(bookDetails => {
        console.log(`İlk kitap detayları:`, bookDetails);
    })
    .catch(error => {
        console.error(`Bir hata oluştu:`, error);
    });
