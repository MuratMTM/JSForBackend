const filmProjects = [
    {
        title: `The Imitation Game`,
        director: `Morten Tyldum`,
        cast: [
            { name: `Benedict Cumberbatch`, role: `Alan Turing`, dailytRate: 1000 },
            { name: `Keira Knightley`, role: `Joan Clarke`, dailytRate: 750 },
            { name: `Matthew Goode`, role: `Hugh Alexander`, dailytRate: 600 },
            { name: `Mark Strong`, role: `Stewart Menzies`, dailytRate: 500 }
        ],
        shootingDays: 85
    },
    {
        title: `Oppenheimer`,
        director: `Christopher Nolan`,
        cast: [
            { name: `Cillian Murphy`, role: `J.Robert Oppenheimer`, dailytRate: 2500 },
            { name: `Matt Damon`, role: `Leslie Groves Jr.`, dailytRate: 2000 },
            { name: `Emily Blunt`, role: `Kitty Oppenheimer`, dailytRate: 1200 },
            { name: `Robert Downey Jr.`, role: `Lewis Strauss`, dailytRate: 1000 },

        ],
        shootingDays: 136,

    },
    {
        title: `Whiplash`,
        director: `Damien Chazelle`,
        cast: [
            { name: `Miles Teller`, role: `Andrew Neyman`, dailytRate: 3500 },
            { name: `J.K. Simmons`, role: `Terence Fletcher`, dailytRate: 3200 },
            { name: `Melissa Benoist`, role: `Nicole`, dailytRate: 2000 },
            { name: `Jayson Blair`, role: `Travis`, dailytRate: 1500 },
        ],
        shootingDays: 35

    },
];

function getBudget(filmName) {
    const selectedFilm = filmProjects.find(film => film.title === filmName);
    if (!selectedFilm) {
        console.log(`Movie not found!`);
        return;
    }
    let totalDailyRate = 0;
    for (let actor of selectedFilm.cast) {
        totalDailyRate += actor.dailytRate;
    };
    const totalBudget = totalDailyRate * selectedFilm.shootingDays;
    console.log(`Total budget for ${filmName} is: ${totalBudget}`);
};

getBudget(`Oppenheimer`);
