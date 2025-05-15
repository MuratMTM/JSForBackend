// MARK: with forEach
const firstFetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(user => {
            console.log(`${user.name} : (${user.email})`);
        });
    }
    catch (err) {
        console.error(`Veri alınamadı:`, err);

    };

}

// MARK: with default for loop
const secondFetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        for (let i = 0; i < users.length; i++) {
            console.log(`${users[i].name} : ${users[i].email}`);
        }
    }
    catch (err) {
        console.error(`Veri alınamadı:`, err);

    };

}
 
firstFetchUsers();