let birthDateEntry = prompt("Digite sua data de nascimento (fomato DD/MM/YYYY)")

//converter a entrada de dados para um dado que o moment entenda, no caso date
let birthDate = moment(birthDateEntry, 'DD/MM/YYYY')
console.log(birthDate)

//pegar a data atual
let today = moment()

//diferença entre o dia da partida e o dia atual
//o moment faz o calculo em milesegundo
let dateDiff = today - birthDate

//converter os milesegundos
let chosenOption = prompt("Escolha como gostaria de exibir o seu tempo de vida nessa Terra: \n1- Segundos \n2- Minutos \n3-Horas \n4- Dias \n5- Anos")

if(chosenOption == '1'){
    let secondOfbirth = Math.round(dateDiff / 1000)
    alert("Você está nessa linda Terra há: " + secondOfbirth + " segundos.")
} else if (chosenOption == '2'){
    let minuteOfbirth = Math.round(dateDiff / 1000 / 60)
    alert('Você está nessa linda Terra há: ' + minuteOfbirth + " minutos.")
} else if (chosenOption == '3'){
    let hoursOfbirth = Math.round(dateDiff / 1000 / 3600)
    alert('Você está nessa linda Terra há: ' + hoursOfbirth + " horas.")
} else if (chosenOption == '4'){
    let daysOfbirth = Math.round(dateDiff / 1000 / 3600 / 24)
    alert('Você está nessa linda Terra há: ' + daysOfbirth + " dias.")
} else if (chosenOption == '5'){
    let yearOfbirth = Math.round(dateDiff / 1000 / 3600 / 24 / 365)
    alert('Você está nessa linda Terra há: ' + yearOfbirth + ' anos.')
}

else {
    alert("Opção inválida.")
}