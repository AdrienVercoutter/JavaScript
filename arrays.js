const myTab = ["Mwa", "Moi" , "Twa", "Toi"]

printArray(myTab);

function printArray(theArray){
    for(let i=0; i<theArray.length; i++){
        document.write(theArray[i]+"<br>");
    }
    for(let i of theArray){
        document.write(i+'<br>');
    }
    for(let i in theArray){
        document.write(theArray[i]+'<br>')
    }
}