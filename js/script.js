
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


  return arrStudent;

}

function es3(arrStudent) {

  var number = 5;
  var nome = prompt('Inserisci Nome del Studente:');
  var cognome = prompt('Inserisci Cognome del Studente:');
  var eta = prompt('Inserisci Eta del Studente:');

  var arrST = [
  {
    'number': number,
    'nome': nome,
    'cognome': cognome,
    'eta': eta
  }
  ]

  for (var key2 in arrST) {

    var value = arrST[key2];
    console.log('Studente: ' + value.number);
    console.log('nome: ' + value.nome);
    console.log('cognome: ' + value.cognome);
    console.log('eta: ' + value.eta);
    console.log();

  }

}



function init(){

  es1();
  es2();
  $('#newStudent').click(es3);


}


$(document).ready(init);
