// création constante calorieCounter sélectionnant le formulaire d'id calorie-counter
const calorieCounter = document.getElementById('calorie-counter');

// création constante budgetNumberInput sélectionnant le champ d'id budget
const budgetNumberInput = document.getElementById('budget');

// création constante entryDropdown sélectionnant l'élément d'id entry-dropdown
const entryDropdown = document.getElementById('entry-dropdown');

// création constante addEntryButton sélectionnant l'élément d'id add-entry
const addEntryButton = document.getElementById('add-entry');

// création constante clearButton sélectionnant le bouton d'id clear
const clearButton = document.getElementById('clear');

// création constante output sélectionnant la div d'id output
const output = document.getElementById('output');

// création variable isError destinée à être réassignée
let isError = false;

// création fonction cleanInputString
// str est en paramètre
function cleanInputString(str){
    // le regex est défini entre /
    // on utilise un objet regex pour étudier les correspondances d'une chaîne de caractères avec un motif de caractères donné
    // plusieurs caractères ou classes de caractères, entourés de crochets [] signifient "chercher un caractère parmi ceux-là"
    // le + à l'intérieur n'a plus besoin d'être échappé pour qu'il soit lu comme le caractère + dans la recherche
    // la séquence d'échappement /s à la valeur de n'importe quel espace vide
    // le g juste après l'anti slash est nommé flag. g a le sens de global et est utilisé pour spécifier que cette expression expression régulière doit effectuer une recherche globale. Que la recherche ne s'arrêtera pas après la découverte du premier résultat acceptable
    // dans l'élément str définit plus haut comme paramètre de la fonction, on remplace les éléments à chercher définis dans le regex par un espace par une chaîne vide
    const regex = /[+-\s]/g;
    return str.replace(regex,"");
}

// création fonction isInvalidInput
function isInvalidInput(str){
    // le regex est défini sur le caractère e, pour correspondre à e
    // avec le flag /i le regex correspondra à e et E, car la recherche sera insensible à la casse.
    // le métacaractère \d remplace la classe de caractère [0-9] qui vaut pour n'importe quel chiffre de 0 à 9
    // avec le \d précédant et suivant le e, il sera possible de chercher n'importe quel chiffre entre 0 et 9 précédant ou suivant le e
    // le "+"
    const regex = /\d+e\d+/i;
    // dans l'élément str définit plus haut comme paramètre de la fonction, on affiche les éléments qui concordent avec le regex
    return str.match(regex);
}

//création fonction addEntry
function addEntry() {
    // la constante targetId est créée. 
    // le # est concaténé avec la valeur sélectionnée de l'élément déroulant associé à l'ID entry-dropdown, récupéré à l'aide de la constante entryDropdown, puis le résultat est stocké dans la constante targetId
    const targetId = "#" + entryDropdown.value;
    // on assigne à targetInputContainer la sélection issue du document html correspondant à targetId (ex:#breakfast pour la valeur de entryDropdown.value) à laquelle a été concaténé " .input-container" qui correspond à la class du container attaché à chaque valeur comprise dans le container d'id entry-dropdown.
    // cela génère un sélecteur css descendant qui ciblera le .input-container contenu dans la valeur prise en compte dans le targetId créé précédemment
    // le sélecteur CSS descendant permet d'identifier un élément enfant direct ou indirect d'un autre élément en plaçant l'élément parent avant l'élément enfant en les séparant par un espace.
    // un modèle littéral est utilisé pour concaténer la variable targetId et .input-container. Des backticks délimitent le modèle littéral. La variable est introduite entre les accolades de #{}. Il n'y a plus besoin d'apostrophe et de +.
    const targetInputContainer = document.querySelector(`${targetId} .input-container`);
}
// step 41