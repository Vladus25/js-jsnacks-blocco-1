
var number = 5;

function es1(){

  var student1 = {
    'nome': 'Vladyslav',
    'cognome': 'Okopnyy',
    'eta': '23'
  }

  for (var key in student1) {

    var value = student1[key]
    console.log(key + ':', value);

  }

  console.log();

}

function es2(){

  var arrStudent = [
    {
      'number': '1',
      'nome': 'Allesandro',
      'cognome': 'Venti',
      'eta': '29'
    },
    {
      'number': '2',
      'nome': 'Marco',
      'cognome': 'Pedrotti',
      'eta': '33'
    },
    {
      'number': '3',
      'nome': 'Cristiano',
      'cognome': 'Ronaldo',
      'eta': '37'
    },
    {
      'number': '4',
      'nome': 'Marco',
      'cognome': 'Fiorino',
      'eta': '20'
    }

  ];

  for (var key in arrStudent) {

    var value = arrStudent[key];
    console.log('Studente: ' + value.number);
    console.log('nome: ' + value.nome);
    console.log('cognome: ' + value.cognome);
    console.log('eta: ' + value.eta);
    console.log();

  }

}

function es3() {

  var nome = prompt('Inserisci Nome del Studente:');
  var cognome = prompt('Inserisci Cognome del Studente:');
  var eta = prompt('Inserisci Eta del Studente:');

  var newStudent = {

    'number': number,
    'nome': nome,
    'cognome': cognome,
    'eta': eta

  }

  console.log('Studente: ' + newStudent.number);
  $('#numero').text('Studente: ' + newStudent.number);

  console.log('Nome: ' + newStudent.nome);
  $('#nome').text('Nome: ' + newStudent.nome);

  console.log('Cognome: ' + newStudent.cognome);
  $('#cognome').text('Cognome: ' + newStudent.cognome);

  console.log('Eta: ' + newStudent.eta);
  $('#eta').text('Eta: ' + newStudent.eta);

  console.log();

}

function init(){

  es1();
  es2();
  $('#newStudent').click(es3);
  $('button').click(function(){
    number += 1;
  })

}

$(document).ready(init);
