export const decodedValue = (bandColor) => {
    const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    let colorNumber = [];

    for (let i= 0; i < bandColor.length; i++) {
        let index = colors.indexOf(bandColor[i]);
        colorNumber.push(index);
    }
    let decodedValue = colorNumber.join('');
    decodedValue = Number(decodedValue.slice(0, 2));
    return decodedValue;
};

decodedValue(['green', 'brown', 'orange']);

