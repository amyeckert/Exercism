export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const colorCode = (color) => {  
    return COLORS.indexOf(color);
};

colorCode('Colors');
colorCode('Black');
colorCode('White');
colorCode('Orange');