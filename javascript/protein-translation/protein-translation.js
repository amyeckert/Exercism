export const translate = (rna) => {

    if ((rna == undefined) || (rna === '')) {
        return [];
    } 

    const proteins = [
        {codon: 'AUG', name: 'Methionine'},
        {codon: 'UUU', name: 'Phenylalanine'},
        {codon: 'UUC', name : 'Phenylalanine'},
        {codon: 'UUA', name: 'Leucine'},
        {codon: 'UUG', name: 'Leucine'},
        {codon: 'UCU', name : 'Serine'},
        {codon: 'UCC', name : 'Serine'},
        {codon: 'UCA', name : 'Serine'},
        {codon: 'UCG', name : 'Serine'}, 
        {codon: 'UAU', name : 'Tyrosine'},
        {codon: 'UAC', name : 'Tyrosine'},
        {codon: 'UGU', name : 'Cysteine'},
        {codon: 'UGC', name : 'Cysteine'},
        {codon: 'UGG', name : 'Tryptophan'},
        {codon: 'UAA', name : 'STOP'},
        {codon: 'UAG', name : 'STOP'},
        {codon: 'UGA', name : 'STOP'},
    ];
    const notValid = /[^UAGC]+/g; // not valid if any other letters besides these
    let translatedRna = []; 
    let codons = rna.match(/.{1,3}/g); // split into 3-letter groups

    for (let i = 0; i < codons.length; i++) {
        let codon = codons[i]; 

        if (rna.match(notValid) || (codon.length / 3 !== 1 )) {
            throw new Error('Invalid codon'); 
        } else if (codons[0] === 'UAA' || codons[0] === 'UAG' || codons[0] === 'UGA') {
            translatedRna = [];
        } 

        if ( codon === 'UAA' || codon === 'UAG' || codon === 'UGA') {
            let stopIndex = codons.indexOf(codon);
            codons.splice(stopIndex); 
        }
    }

    // check for matches in proteins array
    for (let i = 0; i < proteins.length; i++) {
        let proteinCodon = proteins[i].codon;
        let proteinName = proteins[i].name;

        for (let i = 0; i < codons.length; i++) {
            if (codons[i] === proteinCodon) {
                translatedRna.push(proteinName);
            }
        }
    }

    return translatedRna;
};
