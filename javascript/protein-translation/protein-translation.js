// export 
const translate = (rna) => {

    // validate rna
    const notValid = /[^UAGC]+/g; // not valid if any other letters besides these
    if (!rna) {
        return [];
    } else if (rna.match(notValid)) {
        throw new Error('Invalid codon');
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

    let translatedRna = []; 
    let codons = rna.match(/.{1,3}/g);


    for (let i = 0; i < codons.length; i++) {
        let rnaCodon = codons[i]; 

        for( let i = 0; i < rnaCodon.length; i++){ 
            if ( rnaCodon === 'UAA' || rnaCodon === 'UAG' || rnaCodon === 'UGA') {
                console.log(codons);
                codons.splice(i, 1); 
            }
        }

        for (let i = 0; i < proteins.length; i++) {
            let proteinCodon = proteins[i].codon;
            let proteinName = proteins[i].name;

            //return empty array if rna starts with a stop codon
            if (codons[0] === 'UAA' || codons[0] === 'UAG' || codons[0] === 'UGA') {
                translatedRna = [];
            }

            if (rnaCodon === proteinCodon) {
                translatedRna.push(proteinName);
            }
        }
    }
    
    console.log(translatedRna);
    

    // return translatedRna;
};

translate('AUGUUUUCUUAAAUG');
