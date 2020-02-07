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
    ];
    const notValid = /[^UAGC]+/g;
    const stop1 = /UAA/g;
    const stop2 = /UAG/g;
    const stop3 = /UGA/g;
    let polypeptide = [];
    let translatedRna = [];
    let foundStop, position, trimmedRna;
    // validate rna
    if ((rna == undefined) || (rna ==='') || (rna.match(notValid))) {
        return polypeptide;
        // throw new Error('Invalid codon');
    }
    // find first instance of any of the stops:
    if (rna.match(stop1)) { 
        foundStop = rna.match(stop1);
        position = rna.indexOf(foundStop);
        trimmedRna = rna.substring(0, position);
        console.log(trimmedRna);
    } 
    if (rna.match(stop2)) { 
        foundStop = rna.match(stop2);
        position = rna.indexOf(foundStop);
        trimmedRna = rna.substring(0, position);
        console.log(trimmedRna);
    }
    if (rna.match(stop3)) { 
        foundStop = rna.match(stop3);
        position = rna.indexOf(foundStop);
        trimmedRna = rna.substring(0, position);
        console.log(trimmedRna);
    } 
    //split substring into 3's & save to an array if not empty
    const codon1 = trimmedRna.slice(0, 3); 
    const codon2 = trimmedRna.slice(3, 6);
    const codon3 = trimmedRna.slice(6, 9);
    const codon4 = trimmedRna.slice(9, 12);
    if (codon1 != '') {
        polypeptide.push(codon1);
    }
    if (codon2 != '') {
        polypeptide.push(codon2);
    }
    if (codon3 != '') {
        polypeptide.push(codon3);
    }
    if (codon4 != '') {
        polypeptide.push(codon41);
    }

    // iterate over polypeptide array to match to protein names
    proteins.forEach(function(protein) {
        const name = protein.name;
        const codons = protein.codons;
        // test if a polypeptide[i] matches anything in codons array
        for (let i = 0; i < codons.length; i++) {
            if(polypeptide.includes(codons[i])) {
                translatedRna.push(name);
            } else {
                console.log('no match');
            }
        }
    });
};
translate('AUGUUUUCUUAAAUG');
