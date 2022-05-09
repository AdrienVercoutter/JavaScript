document.getElementById('num1').style.textAlign="center";
document.getElementsByTagName('p')[1].style.color="red";
let listeP = document.getElementsByTagName('p');
for (i=0; i<listeP.length; i++){
    listeP[i].style.backgroundColor='purple';
    listeP[i].style.color='pink';
}