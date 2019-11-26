module.exports = class StringCalculator{
   constructor() {
      this.regex = /\d{1,}/gm;

      this.negatives = (string) => {
         let str = '';
   
         for(let k = 0; k < string.length; k++) {
            if(string[k] === '-' && !isNaN(string[k+1])) {
               str += '-'+string[k+1] + ',';
            }
         }
   
         return str;
      };
   }

   Add(string) {
      let sum = 0;
      let numbers = string.match(this.regex);

      if(string == ""){
         return 0;
      }

      let negative = this.negatives(string);

      if(string.includes("-")) throw new Error("ERROR!\n negative " + negative + " not allowed");

      for(let i = 0; i < numbers.length; i++) {
         let number = parseInt(numbers[i]);
         if(number > 1000){
            continue;
         } else {
            sum += number;
         }
      }

      return sum;
   }
}
