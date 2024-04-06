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
    // on utilise un objet regex pour étudier les correspondances d'une chaîne de caractères avec un motif de caractères donné
    // /!\ le + est échappé pour qu'il puisse bien correspondre à la valeur du + dans les caractères recherchés.
    // le + seul permet de rechercher le caractère précédent une seule fois ou davantage.
    // les classes de caractères abrégés permettent de faire correspondre des caractères spécifiques sans avoir à écrire ces caractères dans le modèle.
    // les classes de caractères abrégés sont précédés d'un anti-slash \.
    // la classe de caractères \s correspond à n'importe quel caractère d'espacement
    const regex = /\+-\s/;
}
// step 25