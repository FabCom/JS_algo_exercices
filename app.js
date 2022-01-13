const ArrayForExercices = require('./array_for_exercises.js')
const ArrayMergeSort = require('./array_merge_sort.js')
const fs = require('fs');
const prompt = require('prompt');


function start(){

  prompt.start();
  console.log("Quel exercice veux-tu tester (répond par la commmande) ?")
  console.log("1 : Deux boucles pour rechercher deux nombres dont l'addition vaut un paramètre ")
  console.log("2 : Deux boucles pour déterminer le nombre d'immeubles ayant un appartement vue sur l'ouest ")
  console.log("3 : Une boucle et une fonction pour rechercher deux nombres dont l'addition vaut un paramètre ")
  console.log("4 : Une boucle et une fonction pour déterminer le nombre d'immeubles ayant un appartement vue sur l'ouest")
  console.log("ms : Fonction de tri / merge en récursif")
  prompt.get(['exercice'], function (err, result) {
    if (err) {
      return onErr(err);
    }
    console.log("Tu as choisis l'exercice " + result.exercice);
    let fileName = "";
    if (process.argv[2] && ["1","2","3","4","5","6"].includes(result.exercice)){
      const fileName = process.argv[2];
    } else {
      switch(result.exercice){
        case "ms":
          fileName = "./data.txt"
          break;
        case "1":
        case "3":
          fileName = "./data_sujet1.txt";
          break;
        case "2":
        case "4":
          fileName = "./data_sujet2.txt"
          break;
        default:
          console.log("Désolé cette option n'est pas fonctionnelle")
      }
    }
    

    fs.readFile(fileName, 'utf8', (error, data) => {
      if (error) {
          console.error(error.message);
          return ;
      }
      let exercice = new ArrayForExercices(data,13)
      switch(result.exercice){
        case "ms":
          exercice = new ArrayMergeSort(data).display()
          break;
        case "1":
          exercice.display("exo1")
          break;
        case "2":
          exercice.display("exo2")
          break;
        case "3":
          exercice.display("exo3")
          break;
        case "4":
          exercice.display("exo4")
          break;
        default:
          console.log("Désolé cette option n'est pas fonctionnelle")
      }
      
    });
  });

}

start()


