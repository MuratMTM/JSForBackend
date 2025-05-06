const movie = {
    title: `Inception`,
    director: `Christopher Nolan`,
    year: 2010,
    cast: [
        { name: `Leonardo DiCaprio`, role: `Cobb` },
        { name: `Joseph Gordon-Levitt`, role: `Arthur` }
    ],
    genres: [`Action`, `Sci-Fi`]
};

const { title: film } = movie;
const { director: manager } = movie;
const {
    cast: [
        { name: firstActorName, role: firstActorRole }
        // We match the array elements in order.Using a comma skips the first element.
    ]
} = movie;
const {
    genres: [primary]
} = movie;

console.log(`${film}\nYönetmen:${manager}\nBaşrol:${firstActorName}\nType:${primary}`);