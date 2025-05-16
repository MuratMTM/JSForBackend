const users = [];

function registerUser(user, welcomeUser) {
    users.push(user);
    console.log(`Kayıt işlemi başladı.`);
    setTimeout(() => {
        console.log(`Kullanıcı kaydı başarı ile yapıldı.(${user.email})`);
        welcomeUser();
        console.log(users);
    }, 2000);


}
const welcomeUser = () => {console.log(`Welcome ${user.name}`);}

const user = { name: `Murat Işık`, email: `murat.postmen@gmail.com` };

registerUser(user, welcomeUser);