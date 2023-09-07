const retornaMedia = (arr: number[], sujeito: string): string => {
    const media = arr.reduce((acc, el) => acc + el, 0) / arr.length;
    return `a media de ${sujeito} é ${media}`;
}

const arr : number[] = [];
arr.push(10, 8, 9);
console.log(retornaMedia(arr, 'Pessoa 1'));