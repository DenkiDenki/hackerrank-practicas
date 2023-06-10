/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
let ana= [8,7,9];
let pablo = [5,6,7];
function compareTriplets(a, b) {
let totals = [];
let totalA = 0;
let totalB = 0;
for ( i=0; i<a.length; i++ ){
    if(a[i] > b[i]){
        totalA++;
    }
    if(a[i] < b[i]){
        totalB++;
    }
}
return totals.concat(totalA,totalB);

}
console.log(compareTriplets(ana, pablo));