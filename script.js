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
    // la méthode insertAdjacentHTML(), contient deux arguments, et sert à insérer une chaîne de texte HTML ou XML à un endroit défini de l'arborescence DOM.
    // la position "beforeend" permet d'introduire la chaîne à l'intérieur de l'élément targetInputContainer, après son dernier enfant
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

// création de la fonction calculateCalories
// le premier argument "e" représente l'événement du navigateur
function calculateCalories(e) {
    // /!\ la méthode preventDefault est utilisée. Elle prend en paramètre le "e" l'écouteur du navigateur
    e.preventDefault();
    // la variable globale de signalement d'erreur isError est réinitialisée sur "false"
    isError=false;
    // recherche effectuée sur les éléments <input> de type "number" contenus dans l'élément avec l'id "breakfast" grâce à document.querySelectorAll. Le résultat est assigné à la variable breakfastNumberInputs
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    // recherche effectuée sur les éléments <input> de type "number" contenus dans l'élément avec l'id "lunch" grâce à document.querySelectorAll. Le résultat est assigné à la variable lunchNumberInputs
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]')
    // recherche effectuée sur les éléments <input> de type "number" contenus dans l'élément avec l'id "dinner" grâce à document.querySelectorAll. Le résultat est assigné à la variable dinnerNumberInputs
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    // recherche effectuée sur les éléments <input> de type "number" contenus dans l'élément avec l'id "snacks" grâce à document.querySelectorAll. Le résultat est assigné à la variable snacksNumberInputs
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    // recherche effectuée sur les éléments <input> de type "number" contenus dans l'élément avec l'id "exercise" grâce à document.querySelectorAll. Le résultat est assigné à la variable exerciseNumberInputs
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    // constante breakfastCalories. La fonction getCaloriesFromInputs avec breakfastNumberInputs lui est assigné
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    // constante lunchCalories. La fonction getCaloriesFromInputs avec lunchNumberInputs lui est assigné
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    // constante dinnerCalories. La fonction getCaloriesFromInputs avec dinnerNumberInputs lui est assigné
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    // constante snacksCalories. La fonction getCaloriesFromInputs avec snacksNumberInputs lui est assigné
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    // constante exerciseCalories. La fonction getCaloriesFromInputs avec exerciseNumberInputs lui est assigné
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    // constante budgetCalories. La fonction getCaloriesFromInputs avec budgetNumberInputs lui est assigné
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError) {
        return;
    }

    // constante prenant la sommes des calories de breakfast, lunch, dinner, snacks
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    // constante prenant le budget de Calories - les calories consommées + celles des exercices
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    // constante estimant avec un opérateur ternaire si c'est en surplus ou déficit
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    // on assigne à l'élément output, via innerHTML, une chaîne HTML qui sera affichée à l'intérieur de cet élément
    // on lui met comme class la valeur de surplusOrDeficit en minuscules
    // le texte du span est composée des variables remainingCalories et surplusOrDeficit
    // pour éviter un nombre négatif de calories, la variable remainingCalories est englobée dans la méthode Math.abs
    output.innerHTML = `<span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    `// hr permettra de tracer une ligne horizontale
    // chacun des paragraphes va afficher une valeur, soit celle de la variable du budget de calories, ou de la variable des calories consommées ou celle des calories brûlées
    `
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;

    // les class de l'élément d'id output sont récupérées avec la propriété classList. La méthode remove() permet de supprimer la class "hide"
    output.classList.remove('hide');
};
// création de la fonction getCaloriesFromInputs.
// elle prend comme paramètre "list"
function getCaloriesFromInputs(list){
    // déclaration de la variable calories
    let calories = 0;


    //---------------------------------------------------------------------------------------
    // /!\ début de la zone à retravailler le commentaire - lien: nature de "item" - variable ?
    //---------------------------------------------------------------------------------------
    
    // La boucle "for...of" est utilisée pour parcourir les éléments d'un objet itérable comme un tableau
    for (const item of list){
        // la valeur de l'élément item est assignée à la constante currVal
        const currVal = cleanInputString(item.value);
        
        //---------------------------------------------------------------------------------------
        // /!\ fin de la zone à retravailler le commentaire
        //---------------------------------------------------------------------------------------

        // déclaration de la variable invalidInputMatch
        // assignation à invalidInputMatch de la fonction isInvalidInput avec la constante currVal en paramètre
        const invalidInputMatch = isInvalidInput(currVal);
        
        // déclaration if qui permet de savoir si invalidInputMatch est vrai
        if (invalidInputMatch){
            //utilisation de la fonction alert(). Récupération de la première entrée du tableau invalidInputMatch
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            // true est assigné à isError
            isError = true;
            // la valeur null est retournée
            return null;
        }
        // la valeur de currVal est transformée en nombre grâce au constructeur Number
        // celle-ci est assignée à calories via l'opérateur d'addition et affectation +=
        calories+=Number(currVal);
    }
    //les calories sont affichées
    return calories;
};
// création de la fonction clearForm.
function clearForm(){
    // la constante inputContainer prend tout les éléments de class input-container
    // Array.from transforme un quelque chose ressemblant à un tableau en un tableau
    const inputContainers=Array.from(document.querySelectorAll(".input-container"));
    
    //---------------------------------------------------------------------------------------
    // /!\ début de la zone a retravailler le commentaire - lien: nature de "container" - variable ?
    //---------------------------------------------------------------------------------------

    // // la boucle for...of permet de parcourir chaque élément du tableau inputContainers via la variable container.
    // innerHTML est utilisé pour définir le contenu HTML de la variable container, en le remplaçant par une chaîne vide qui y sera affectée
    for (const container of inputContainers){
        container.innerHTML = "";
    }
    //---------------------------------------------------------------------------------------
    // /!\ fin de la zone à retravailler le commentaire
    //---------------------------------------------------------------------------------------
    // la valeur de budgetNumber est assignée à une chaîne vide
    budgetNumberInput.value = "";

    //---------------------------------------------------------------------------------------
    // /!\ début de la zone a retravailler le commentaire - lien: nature de "innerText" - quelle action ?
    //---------------------------------------------------------------------------------------
    // innerText affiche le contenu brut de 
    output.innerText = '';
    //---------------------------------------------------------------------------------------
    // /!\ début de la zone a retravailler le commentaire - lien: nature de "innerText" - quelle action ?
    //---------------------------------------------------------------------------------------
    // les class de l'élément d'id output sont récupérées avec la propriété classList. La méthode add() permet d'ajouter la class "hide"
    output.classList.add('hide');
};


// un addEventListener a été mis sur la constante addEntryButton. Au moment du click, cela déclenche la fonction addEntry.
addEntryButton.addEventListener('click', addEntry);
// un addEventListener a été mis sur la constante calorieCounter. Au moment de la soumission, cela déclenche la fonction calculateCalories.
calorieCounter.addEventListener("submit", calculateCalories);
// un addEventListener a été mis sur la constante clearButton. Au moment du click, cela déclenche la fonction clearForm.
clearButton.addEventListener("submit", clearForm);
// step 96