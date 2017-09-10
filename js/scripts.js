var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var yourName = prompt('Podaj imię');

indexOfYourName = allNames.indexOf(yourName);

if (yourName == allNames[indexOfYourName]){
    console.log('To imię istnieje już w tabeli.');
}
else {
    allNames.push(yourName);
}

console.log('Elementy tabeli:' + allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    console.log('Dodano element: ' + newName + '. Aktualne elementy tabeli: ' + allNames);
}
else {
    console.log('Nie można dodać elementu do tabeli.');
}