const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const colorCode = color => {  
    return colors.indexOf(color);
};

export const decodedValue = (bandColor) => {
    // "The program will take color names as input and output a two digit number, even if the input is more than two colors"
    // We only need to get the first two items in bandColor
    const color1 = colorCode(bandColor[0]);
    const color2 = colorCode(bandColor[1]);

    let numberCode = (color1 * 10) + color2;

    return numberCode;
};

// decodedValue(['brown','green', 'blue', 'violet', 'grey', 'white']);

