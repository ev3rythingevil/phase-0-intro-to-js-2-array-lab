// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}  
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
     cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const firstCat = [...cats, name];
    return firstCat;
}

function prependCat(name){
    const lastCat = [name, ...cats];
    return lastCat;
}
function removeLastCat(){
    const lastCatSlice = cats.slice(0, -1);
    return lastCatSlice;
     
}
function removeFirstCat(){
    const firstCatSlice = cats.slice(1);
    return firstCatSlice;
}