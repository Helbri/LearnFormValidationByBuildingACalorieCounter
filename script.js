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

// Test de la fonction isInvalidInput ave la chaîne "1e3" pour vérifier si le regex fonctionne correctement
// la méthode match retourne un tableau avec les correspondances trouvées dans la chaîne.
// dans la console, ce résultat est retourné : [ '1e3', index: 0, input: '1e3', groups: undefined ]
// "1e3" est la valeur correspondante au regex /\d+e\d+/i
// index: 0 est l'index de la valeur correspondante dans la chaîne.
// input: '1e3' est la chaîne originale qui correspondait
// groups: undefined sont les groupes correspondants, lesquels ne sont pas utilisés dans ce cas.
// si à la place de "1e3", "10" est rentré comme paramètre de "isInvalidInput" dans le console.log(), le résultat de la console est : null car aucune correspondance n'a été trouvée. C'est comme dans une barre de recherche.
// null en JavaScript est un primitif spécial qui représente l'intentionnelle absence de valeur. En contexte booléen, null est considéré comme faux ce qui donne la valeur false dans une instruction conditionnelle
console.log(isInvalidInput("1e3"));
// step 36