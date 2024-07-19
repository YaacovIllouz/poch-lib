
// ADD NEW BUTTON FOR ADD BOOKS
// Récupérer le titre class H2
const titleH2 = document.getElementsByClassName("h2")[0];    
console.log(titleH2);

// Récupérer le titre class H2
const titleH21 = document.getElementsByClassName("h2");    
console.log(titleH21);

// Créer le nouveau boutton 
const btnAddBooks = "<button id='btnAddBooks' onclick='displayFormSearchBooks()'>Ajouter un livre</button>";

// Ajouter le nouveau boutton 
titleH2.insertAdjacentHTML("afterend", btnAddBooks);

// FORM FOR SEARCH BOOKS
// Fonction formulaire de recherche de livres
function displayFormSearchBooks(){
    // Créer le formulaire
    const formSearchBooks = "<form id='formSearchBooks'> <label for='titleofBook'>Titre du livre</label> <input type='text' id='titleofBook'/> <label for='author'>Titre du livre</label> <input type='text' id='author'/> <button id='search'>Rechercher</button> <button id='reset' onclick='hiddenFormSearchBooks'>Annuler</button> </form>";
    // Faire disparaitre le boutton
    btnAddBooks.style.display = "none";
    // Ajouter le formulaire
    titleH2.insertAdjacentHTML("afterend", formSearchBooks);
}

// FORM FOR SEARCH BOOKS
// Fonction formulaire de recherche de livres
function displayFormSearchBooks(){
    // Créer le formulaire
    const formSearchBooks = "<form id='formSearchBooks'> <label for='titleofBook'>Titre du livre</label> <input type='text' id='titleofBook'/> <label for='author'>Titre du livre</label> <input type='text' id='author'/> <button id='search'>Rechercher</button> <button id='reset' onclick='hiddenFormSearchBooks()'>Annuler</button> </form>";
    // Faire disparaitre le boutton
    btnAddBooks.style.display = "none";
    // Ajouter le formulaire
    titleH2.insertAdjacentHTML("afterend", formSearchBooks);
}

// HIDDEN FORM FOR SEARCH BOOKS
// Fonction pour cacher le formulaire d'ajout de livre
function hiddenFormSearchBooks(){
    // Récupérer le formulaire et le rendre invisible
    document.getElementById("formSearchBooks").style.display = "none";
} 

// DISPLAY BOOKS SEARCH BY USER
// Fonction pour afficher les livres recherchés par l'utilisateur
function displayBooksSearchByUser(){
    // APIKEY Google Books
    const APIKEY = "AIzaSyCs6N2aDiLj1kQxmfJkNAw29LD0q_93Swc";
    const titleOfBook = document.getElementById("titleofBook").value;
    const author = document.getElementById("author").value;
    const urlGoogleAPI = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"; 
    // Design for book and informations after the search

}

