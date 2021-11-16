const replaceWithYerr = (months, start = 0, end = months.length) => {
    let myArray = [];
        for (let i = 0; i <months.length; i++){
                if(i >= start && i < start + end){
                    myArray.push("yerr")
                } 
                else {
                    myArray.push(months[i]);
                }
        }
         return myArray;
    };
   

console.log(replaceWithYerr(["jan", "feb", "march"]))