//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name = 'you') => {
    return `One for ${name}, one for me.`;
    // name = name || 'you';
    // return "One for " + name + ", one for me.";
};

twoFer();
twoFer('Alice');
twoFer('Bob');
