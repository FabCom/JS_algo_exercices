class ArrayForExercices{
  constructor(array_of_strings,k){
    this.array_of_strings = array_of_strings;
    this.array_sorted = new Array()
    this.counter_exo1 = 0;
    this.counter_exo2 = 0;
    this.counter_exo3 = 0;
    this.counter_exo4 = 0;
    this.k = k
    let init = this.init()
  }

  init(){
    this.array_of_numbers = this.array_of_strings.split(' ').map(element => parseInt(element))
    this.array_of_numbers.forEach(element => { this.array_sorted.push(element) });
  }

  display(exo){
    console.log("Tableau de données : " + this.array_of_numbers)
    console.log("1 : exercice 1 le tableau contient-il deux nombres dont l'addition ")
    console.log("Tableau de données : " + this.array_of_numbers)

    switch (exo) {
      case "exo1":
        console.log("Contient deux nombres dont l'addition est égale à  " + this.k + " : " + this.exo1(this.array_sorted, this.k))
        console.log("Nombre de comparaisons réalisées : " + this.counter_exo1) 
        break;
      case "exo3":
        console.log("Contient deux nombres dont l'addition est égale à  " + this.k + " : " + this.exo3(this.array_sorted, this.k))
        console.log("Nombre de comparaisons réalisées : " + this.counter_exo3) 
        break;
      case "exo2":
        console.log("Contient " + this.exo2(this.array_sorted).length + " immeubles ayant au moins un appartement avec une vue sur le soleil :-) " + this.exo2(this.array_sorted))
        console.log("Nombre de comparaisons réalisées : " + this.counter_exo2) 
        break;
      case "exo4":
        console.log("Contient " + this.exo4(this.array_sorted).length + " immeubles ayant au moins un appartement avec une vue sur le soleil :-) " + this.exo4(this.array_sorted))
        console.log("Nombre de comparaisons réalisées : " + this.counter_exo4) 
        break;
      default:
        break;
    }
    
  }

  exo1(arr, k){
    let l = arr.length;
    for (let i = 0 ; i < l; i++) {
      for (let j = i; j < arr.length; j++){
        if (arr[i] + arr[j] == k) return true;
        this.counter_exo1++ ;
      }      
    }
    return false;
  }
  exo2(arr) {
    let l = arr.length;
    let buildings = new Array();
    for (let i = 0; i < l; i++) {
      let verif = true;
      for (let j = i + 1; j < l; j++) {arr.length
        if (arr[j] > arr[i]) {
        verif = false; 
        }
        this.counter_exo2++ ;
      }
      if (verif == true) {
         buildings.push(arr[i])
      };
    }
    return buildings;
  };

  exo3(arr,k){
    let l = arr.length;
    for (let i = 0; i < l - 1; i++) {
      this.counter_exo3++ ;
      if (arr.includes(k - arr[i])) return true;
    }
    return false;   
  }

  exo4(arr, i = arr.length - 1) {  
    if (arr.filter((e, j) => e > arr[i] && j > i).length > 0) arr.splice(i, 1);
    if (i === 0) return arr;
    this.counter_exo4++ ;
    return this.exo4(arr, i - 1);
  }

}

module.exports = ArrayForExercices
