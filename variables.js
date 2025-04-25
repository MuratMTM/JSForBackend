//Variables

let anapara = 2000000;
const faizOrani = 49.5;
let vade = 32;

const mevduatFaizTutari = (anapara * faizOrani * vade) / 36500;
let toplamBakiye = anapara + mevduatFaizTutari;

console.log(`Mevduat faizi ile ${vade} günün sonunda kazandığınız faiz tutarı: ${mevduatFaizTutari} TL. Toplam bakiyeniz:${toplamBakiye} TL dir.`);

