export const translate = (rna) => {
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
    ];
    const notValid = /[^UAGC]+/g; // not valid if any other letters besides these
    const stop1 = /UAA/;
    const stop2 = /UAG/;
    const stop3 = /UGA/;
    let polypeptide = [];
    let translatedRna = [];
    let foundStop;
    let position;
    let trimmedRna = rna;
    
    // validate rna
    if ((rna == undefined) || (rna === '')) {
        return polypeptide;
    }
    if (rna.match(notValid)) {
        throw new Error('Invalid codon');
    }

    // find first instance of any of the stops and trim sequence
    if (rna.match(stop1)) { 
        foundStop = rna.match(stop1);
        position = rna.indexOf(foundStop);
        trimmedRna = rna.substring(0, position);
    }
    if (rna.match(stop2)) { 
        foundStop = rna.match(stop2);
        position = rna.indexOf(foundStop);
        trimmedRna = rna.substring(0, position);
    }
    if (rna.match(stop3)) { 
        foundStop = rna.match(stop3);
        position = rna.indexOf(foundStop);
        trimmedRna = rna.substring(0, position);
    } 

    // if rna sequence starts with one of the stop codons, return empty array
    if (trimmedRna === '') {
        return polypeptide;
    }

    //split substring into 3's & save to an array if not empty
    let codon1 = trimmedRna.slice(0, 3); 
    let codon2 = trimmedRna.slice(3, 6);
    let codon3 = trimmedRna.slice(6, 9);
    let codon4 = trimmedRna.slice(9, 12);

    if (codon1 !== '') {
        polypeptide.push(codon1);
    }
    if (codon2 !== '') {
        polypeptide.push(codon2);
    }
    if (codon3 !== '') {
        polypeptide.push(codon3);
    }
    if (codon4 !== '') {
        polypeptide.push(codon4);
    }

    //iterate over polypeptide array to match to protein names
    proteins.forEach(function(protein) {
        const name = protein.name;
        const codons = protein.codons;
        // check if a polypeptide[i] matches anything in codons array
        for (let i = 0; i < codons.length; i++) {
            if(polypeptide.includes(codons[i])) {
                translatedRna.push(name);
            } 
        }
    });
    
    return translatedRna;
};

translate();
