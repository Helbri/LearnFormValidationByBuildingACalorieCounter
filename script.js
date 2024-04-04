// création constante calorieCounter sélectionnant le formulaire d'id calorie-counter
const calorieCounter = document.getElementById('calorie-counter');
// création constante budgetNumberInput sélectionnant le champ d'id budget
const budgetNumberInput = document.getElementById('budget');
// création constante entryDropdown sélectionnant l'élément d'id entry-dropdown
const entryDropdown = document.getElementById('entry-dropdown');
// création constante addEntryButton sélectionnant l'élément d'id entry-dropdown
const addEntryButton = document.getElementById('add-entry');
// création constante clearButton sélectionnant le bouton d'id entry-dropdown
const clearButton = document.getElementById('clear');
// création constante output sélectionnant la div d'id output
const output = document.getElementById('output');
// création variable isError destinée à être réassignée
let isError = false;
// création fonction cleanInputString
// str est en paramètre
function cleanInputString(str){
    // la méthode split() divise une chaîne en un tableau de sous-chaînes et renvoie le nouveau tableau.
    const strArray = str.split('');
    //on assigne un tableau à cleanStrArray
    const cleanStrArray = [];
    //une boucle for est utilisée pour parcourir chaque caractère du tableau strArray
    //i est initialisé à 0, i doit être inférieur à la longueur de strArray, i prend la valeur de 1 supplémentaire à chaque tour de boucle
    for (let i=0;i < strArray.length;i++){
        //la méthode .includes() retourne vrai si le tableau contient le caractère et faux si ce n'est pas le cas
        //l'opérateur logique ! va retourner la valeur opposée de la valeur de la méthode .includes()
        //si le caractère qui est étudié en tant que strArray[i] n'est pas inclus dans le tableau ["+","-"," "], alors il sera poussé dans le tableau cleanStrArray grâce à la méthode push
        if(!["+","-"," "].includes(strArray[i])) {cleanStrArray.push(strArray[i])}
    }
}
// step 22