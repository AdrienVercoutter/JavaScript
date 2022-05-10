const inputTxT = document.getElementById('txt_to_add').value;
const plist= document.querySelector('#myList p').innerText+= inputTxT +'\n';
const pArray = document.querySelector('#myArray p');
const myArray = ['une ligne', 'autre choses']

function addText(){
if(inputTxT.value!==''){

plist.innerText+= inputTxT.value+'\n'
inputTxT.value='';
}

else {
    alert('Entrez un msg')
}
inputTxT.focus();
}


function UpdateArray(){
    for(let i=0;i< myArray.length; i++){
        pArray.innerText+= myArray[i]+'\n'
    }
}
