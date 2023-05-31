let VarA = 'A'; // B
let VarB = 'B'; // C
let VarC = 'C'; // A
const valorAoriginal = VarA
VarA = VarB
VarB = VarC
VarC = valorAoriginal

console.log(VarA, VarB, VarC)