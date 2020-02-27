const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const colorCode = color => {  
    return colors.indexOf(color);
};

export const decodedValue = (bandColor) => {
    // We only need to get the first two items in bandColor
    const color1 = colorCode(bandColor[0]);
    const color2 = colorCode(bandColor[1]);

    let numberCode = (color1 * 10) + color2;

    return numberCode;
};

