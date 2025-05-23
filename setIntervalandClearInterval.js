
const showTime = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, `0`);
    const m = String(now.getHours()).padStart(2, `0`);
    const s = String(now.getHours()).padStart(2, `0`);

    console.log(`${h}:${m}:${s}`);
}

const id = setInterval(() => {
    showTime();
}, 1000);

setTimeout(() => {
    clearInterval(id);
    console.log(`Durduruldu.`);
}, 10000);