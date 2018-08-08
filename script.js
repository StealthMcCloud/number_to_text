const first = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
const thousands = ['one thousand'];

//1 through 100
        for (let i = 0; i < 20; i++) {    
        result2 = first[i];
        console.log(result2); 
}
        for (let x = 0; x < 8; x++) {
        
        for (let y = 0; y < 10; y++) {
            console.log(tens[x] + " " + first[y]);
        }
        
        }
        
        for (let x = 0; x < 9; x++) {
            if (x < 9) {
                for (w = 0; w < 20; w++) {
                    console.log(hundreds[x] + " " + first[w])
                }
            }
            
        for (let y = 0; y < 8; y++) {

        for (let z = 0; z < 10; z++) {
            
            console.log(hundreds[x] + " " + tens[y] + " " + first[z])
        }
        }
        }
        
        console.log(thousands[0])



