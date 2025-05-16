$(document).ready(function () {

    //le prime due funzioni riguardano le card con i prodotti presi dal API

    // prendo i dati dall'API e creo le card
    $.ajax({
        url: "https://dummyjson.com/products",
        method: "GET",
        success: 
        function (response) {
        const products = response.products;
    
        products.forEach((product) => {
            const card = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" id="card-prodotto-${product.id}">
                <div class="card h-100">
                    <img src="${product.thumbnail}" class="card-img-top" alt="Immagine prodotto" />
                    <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Prezzo:</strong> $${product.price}</p>
                    </div>
                    <div class="card-footer text-center">
                    <button class="btn btn-danger btn-rimuovi" data-id="card-prodotto-${product.id}">Rimuovi
                    </button>
                    </div>
                </div>
                </div>
            `;
            $("#prodotti").append(card);
        });
        },
        error: 
        function () {
        console.error("Errore nel recupero dei dati nel file Dummy.json: ", error);
        }
    });

    // faccio svanire con l'effetto fadeOut le card quando premo il bottone di ogni card
    $(document).on("click", ".btn-danger", function() {
        const cardID = $(this).data("id");
        $(`#${cardID}`).fadeOut(1000);

    });
   



    //le seconde due funzioni gestiscono la tabella degli utenti del file Json

    //gestione del click sulla riga
    $("#tableJSON").on("click-row.bs.table", function(e, row){
        if (!row || !row.id || !row.nome || !row.cognome || !row.email || !row.citta) {
            Swal.fire({
                icon: 'error',
                title: 'Utente inesistente',
                text: 'Dati utente non validi o mancanti'
            });
            return;
        }
        //scrivo la modale con i dati del singolo elemento
        $("#modal-id").text(row.id);
        $("#modal-nome").text(row.nome);
        $("#modal-cognome").text(row.cognome);
        $("#modal-email").text(row.email);
        $("#modal-citta").text(row.citta);
    
        const modal = new bootstrap.Modal(document.getElementById("dettaglioModal"));
        modal.show();

        Swal.fire({
            icon: 'success',
            title: 'Utente selezionato',
            text: `${row.nome} ${row.cognome} è stato selezionato`
        });
            
    })

    //gestisco l'errore nel caricamento degli utente
    $("#tableJSON").on("load-error.bs.table", function(){
       
        Swal.fire({
            icon: "error",
            title: "Errore",
            text: 'Impossibile caricare gli Utenti dal file Json'
        }); 
            
    })   
       
});


