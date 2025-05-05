let user = {
    id: 1,
    name: `Murat`,
    email: `murat.postmen@gmail.com`,
    role: `admin`,
    isActive: true,
    lastLogin: `2025-04-29T13:15:00Z`,
    settings: {
        theme: `dark`,
        language: `tr`
    }
};

function changeUserStatus(user) {
    user.isActive = !user.isActive;
    return user;
};

function updateEmail(user, newEmail) {
    user.email = newEmail;
    return user;
};

function addLoginTime(user) {
    user.lastLogin = new Date();
    return user;
};

function updateSettings(user, theme, language) {
    user.settings.theme = theme;
    user.settings.language = language;
    return user;
};

let newEmail = `kesitokurr@gmail.com`;
let defaultTheme = `light`;
let defaultLanguage = `en`;

changeUserStatus(user);
updateEmail(user, newEmail);
addLoginTime(user);
updateSettings(user, defaultTheme, defaultLanguage);
console.log(user);