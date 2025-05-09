const feedbacks = [
    { user: `Ahmet`, message: `Great App!`, rating: 5 },
    { user: `Elif`, message: `Too many ads.`, rating: 2 },
    { user: `Can`, message: `Loved the UI.`, rating: 4 },
    { user: `Zeynep`, message: `Crashes a lot.`, rating: 1 },
];


const positive = () => feedbacks.filter(feedbacks => feedbacks.rating >= 4);
const comments = () => feedbacks.map(feedbacks => feedbacks.message);
const averageRating = () => feedbacks.reduce((sum, feedbacks) => sum + feedbacks.rating, 0) / feedbacks.length;

console.log(`The high rated feedbacks:\n${JSON.stringify(positive(), null, 2)}`);
console.log(`The messages of feedbacks:\n${comments()}`);
console.log(`average rating of feedbacks:\n${averageRating()}`);

function attention(feedbacks, positive) {
    const lowRating = positive(feedbacks);
    console.log(`Attention! There are low rating in feedbacks`);
};

attention(feedbacks, positive);


