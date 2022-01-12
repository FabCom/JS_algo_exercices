const ArrayForExercices = require('./array_for_exercises.js')
const fs = require('fs');
const prompt = require('prompt');


function start(){

  prompt.start();
  console.log("Quel exercice veux-tu tester (écris le numéro de 1 à 6 ?")
  prompt.get(['exercice'], function (err, result) {
    if (err) {
      return onErr(err);
    }
    console.log("Tu as choisis l'exercice " + result.exercice);
    let fileName = "";
    switch(result.exercice){
      case "1":
        fileName = "./data_sujet1.txt";
        break;
      case "2":
        fileName = "./data_sujet2.txt"
        break;
      default:
        console.log("Désolé cette option n'est pas fonctionnelle")
    }

    fs.readFile(fileName, 'utf8', (error, data) => {
      if (error) {
          console.error(error.message);
          return ;
      }
      let exercice = new ArrayForExercices(data,13)
      switch(result.exercice){
        case "1":
          exercice.display("exo1")
          break;
        case "2":
          exercice.display("exo2")
          break;
        case "3":
          exercice.display("exo1")
          break;
        case "4":
          exercice.display("exo2")
          break;
        default:
          console.log("Désolé cette option n'est pas fonctionnelle")
      }
      
    });
  });

}

start()


