export function shuffle(array: any[]){
    return array.map(element => ({element, random: Math.random()}))
        .sort((obj1, obj2) => obj1.random - obj2.random)
        .map(obj => obj.element)
}