let datas = ['kita', 'atik', 'tika', 'aku', 'makan', 'kia', 'kua'];

function anagram(datas) {
    let result = [];
    let indexDataHaveBeenApplied = [];

   for (let i = 0; i < datas.length; i++) {
        let temporaryResult = [];
        const data = datas[i];

        for (let j = 0; j < datas.length; j++) {
            const dataComparision = datas[j];
            
            if (i === j && indexDataHaveBeenApplied[j] !== undefined) {
                continue;
            }

            if ( indexDataHaveBeenApplied[j] === undefined && isAnagram(data, dataComparision)) {
                temporaryResult.push(dataComparision);
                indexDataHaveBeenApplied[j] = true;
            }
            
        }
        
        if (temporaryResult.length > 0) {
            result.push(temporaryResult);
        }
   }

   console.log(result);
}

function isAnagram(dataString, strtingComparision) {
    if (dataString.length !== strtingComparision.length) {
        return false;
    }
    
    let totalStringShouldExists = dataString.length;
    let totalCurrentString = 0;

    for (let index = 0; index < dataString.length; index++) {
        const character = dataString[index];
        for (let indexComparision = 0; indexComparision < strtingComparision.length; indexComparision++) {
            const characterComparision = strtingComparision[indexComparision];
            if (character === characterComparision) {
                totalCurrentString++;
                break;
            }
        }
    }

    return totalCurrentString === totalStringShouldExists;
}

anagram(datas);