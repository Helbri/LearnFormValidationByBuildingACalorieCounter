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
    // la valeur de entryDropdown est cherchée. C'est une variable. Elle est concaténée avec un # qui la précède et .input-container séparé d'un espace qui la suit.
    // la concaténation est produite avec un modèle littéral.
    // la variable est entre les accolades de ${}. Le modèle littéral est contenu entre des backticks. Le résultat de la concaténation produit un sélecteur CSS descendant.
    // le modèle littéral est passé comme argument de document.querySelector() qui ira chercher les éléments dans le document.
    // tout cela est assigné à la constante targetInputContainer
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    // création variable entryNumber. Utilisation de querySelectorAll. "querySelectorAll" va créer une liste de tous les éléments qui vont correspondre au sélecteur. Avec "length", on aura la valeur "length" des éléments trouvés
    // la valeur de length est augmentée de 1 pour que le compte visible commence à partir de 1 au lieu de 0
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
    // la variable HTMLString va servir pour la création d'une chaîne dynamique pour l'ajouter à la page web
    // un modèle littéral est assigné HTMLString
    // label pour la partie Name sur le modèle <label for="X-#-name">Entry ${entryNumber} Name</label> X= valeur d'entryDropdown (entryDropdown.value) #= valeur de la variable entryNumber
    // un input pour la partie Name est inséré. Il est de type text et contient un placeholder. Son id correspond à celui du label juste au-dessus.
    // label pour la partie Calories sur le modèle <label for="X-#-calories">Entry ${entryNumber} Calories</label> X= valeur d'entryDropdown (entryDropdown.value) #= valeur de la variable entryNumber
    // un input pour la partie Calories est inséré. Il est de type number et contient un placeholder. Son id correspond à celui du label juste au-dessus. L'attribut min est défini sur 0
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" min="0"/>`;
    // la variable HTMLString contient du contenu HTML qui est ajouté au container targetInputContainer à l'aide de la propriété innerHTML. Cette propriété récupère le contenu de HTMLString et le rend visible à l'intérieur de targetInputContainer, permettant ainsi l'ajout dynamique de nouveaux éléments HTML à cet endroit dans le document
    targetInputContainer.innerHTML += HTMLString;
}
// un addEventListener a été mis sur la constante addEntryButton. Au moment du click, cela déclenche la fonction addEntry.
addEntryButton.addEventListener('click', addEntry);
// step 52