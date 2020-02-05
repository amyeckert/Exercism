//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.

// Codon                 | Protein
// :---                  | :---
// AUG                   | Methionine
// UUU, UUC              | Phenylalanine
// UUA, UUG              | Leucine
// UCU, UCC, UCA, UCG    | Serine
// UAU, UAC              | Tyrosine
// UGU, UGC              | Cysteine
// UGG                   | Tryptophan
// UAA, UAG, UGA         | STOP
//

export const translate = (sequence) => {
    let protein = [];
    // let polypeptide = [];

    protein.push(sequence.slice(0, 3));
    return protein;
};

translate("AUGUUC555");


