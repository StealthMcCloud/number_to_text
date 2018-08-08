const first = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['one-hundred', 'two-hundred', 'three-hundred', 'four-hundred', 'five-hundred', 'six-hundred', 'seven-hundred', 'eight-hundred', 'nine-hundred'];
const thousands = ['one-thousand'];

//1 through 1000
        for (let i = 1; i < 20; i++) {    
        d1 = [i] + ": " + first[i] + ", ";
        let div1 = document.getElementById("div1");
        let result1 = document.createTextNode(d1);
        div1.appendChild(result1)
}
        for (let x = 0; x < 8; x++) {
        
        for (let y = 0; y < 10; y++) {
            d1 = [x] + [y] + ": " + tens[x] + "-" + first[y] + ", ";
        let div1 = document.getElementById("div1");
        let result1 = document.createTextNode(d1);
        div1.appendChild(result1);
        }
        
        }
        
        for (let x = 0; x < 9; x++) {
            if (x < 9) {
                for (w = 0; w < 20; w++) {
                    d1 = "10" + [w] + ": " +hundreds[x] + "-" + first[w] + ", ";
                    let div1 = document.getElementById("div1");
                    let result1 = document.createTextNode(d1);
                    div1.appendChild(result1);
                }
            }
            
        for (let y = 0; y < 8; y++) {

        for (let z = 0; z < 10; z++) {
                    d1 = "  " + [x+1] + [y+2] + [z] + ": " + hundreds[x] + "-" + tens[y] + first[z] + ", ";
                    let div1 = document.getElementById("div1");
                    let result1 = document.createTextNode(d1);
                    div1.appendChild(result1);
        }
        }
        }
        
        document.write("1000: " + thousands[0])



