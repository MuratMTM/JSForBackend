export function add(a,b){
    return (a+b);
}

export const subtract = (a,b) => {return a-b };
export const multiply = (a,b) => {return a*b };

export function divide(a,b){
    return b!==0 ? a/b : `Can not divide by zero`;
}