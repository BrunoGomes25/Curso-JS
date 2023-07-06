const amigoes = ['piruca', 'douglete', 'nandao', 'eurias', 'jao', 'jean', 'victoria']

for( let absurdo of amigoes){
    if(absurdo === 'douglete') {
        continue;
    }
    if(absurdo === 'eurias') {
        continue;
    }
    if(absurdo === 'jao') {
        break;
    }
    console.log(absurdo)
}