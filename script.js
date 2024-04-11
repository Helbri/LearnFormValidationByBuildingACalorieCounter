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
    console.log("original string: ", str);
    // le regex est défini entre /
    // on utilise un objet regex pour étudier les correspondances d'une chaîne de caractères avec un motif de caractères donné
    // plusieurs caractères ou classes de caractères, entourés de crochets [] signifient "chercher un caractère parmi ceux-là"
    // le + à l'intérieur n'a plus besoin d'être échappé pour qu'il soit lu comme le caractère + dans la recherche
    // le /s à la valeur de n'importe quel espace vide
    // le g juste après l'anti slash est nommé flag. g a le sens de global et est utilisé pour spécifier que cette expression expression régulière doit effectuer une recherche globale. Que la recherche ne s'arrêtera pas après la découverte du premier résultat acceptable
    // dans l'élément str définit plus haut comme paramètre de la fonction, on remplace les éléments à chercher définis dans le regex par un espace par une chaîne vide
    const regex = /[+-\s]/g;
    return str.replace(regex,"");
}

console.log(
    cleanInputString("+-99")
)

// step 27