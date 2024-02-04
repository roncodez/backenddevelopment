function getFrequency(string) {
    let freqMap = {};
    for(let i=0; i<string.length;i++)  {
        if(freqMap[String(string[i])]== undefined) 
            freqMap[String(string[i])] = 1;
        else 
            freqMap[String(string[i])]++;
    }
    return freqMap;
}

console.log(getFrequency("javascript"));