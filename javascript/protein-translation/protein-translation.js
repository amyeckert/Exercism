//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export 
const translate = (rna) => {
    const proteins = [
        {   name: 'Methionine',
            codons: ['AUG']
        }, 
        {   name: 'Phenylalanine',
            codons: ['UUU', 'UUC']
        }, 
        {   name: 'Leucine',
            codons: ['UUA', 'UUG']
        }, 
        {   name: 'Serine',
            codons: ['UCU', 'UCC', 'UCA', 'UCG']
        }, 
        {   name: 'Tyrosine',
            codons: ['UAU', 'UAC']
        }, 
        {   name: 'Cysteine',
            codons: ['UGU', 'UGC']
        }, 
        {   name: 'Tryptophan',
            codons: ['UGG']
        }, 
        {   name: 'STOP',
            codons: ['UAA', 'UAG', 'UGA']
        } 
    ]
    const polypeptide = [];
    // const stopCodons= proteins[7].codons; // => ["UAA", "UAG", "UGA"]
    const stops= proteins[7].codons;
    // const stopCodon1 = stops.push(/UAA/g);
    // const stopCodon2 = stops.push(/UAG/g);
    // const stopCodon3 = stops.push(/UGA/g);
    // let position;
    console.log(stops);
    // if any part of rna matches regex for STOP, it's invalid

    // after that split string into 3's, 
    // check for matches in proteins

    const codon1 = rna.slice(0, 3); 
    const codon2 = rna.slice(3, 6);
    const codon3 = rna.slice(6, 9);
    const codon4 = rna.slice(10, 12);

    polypeptide.push(codon1, codon2, codon3, codon4);
    return polypeptide;
};

translate("bbbUGABBB");


