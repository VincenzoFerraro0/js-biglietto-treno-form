//Dichiaro le variabili selezionado i vari elementi in html
const btn = document.querySelector('#bottone')
const btnRefresh = document.querySelector('#annulla')

// variabile prezzo 
const prezzo = 0.21


btn.addEventListener('click', function() {

    //Dichiaro le variabili selezionado i vari elementi in html
    const nome = document.querySelector('#nome').value
    const eta = document.querySelector('#fascia-eta').value
    const km = parseInt(document.querySelector('#km').value)
    const nomePasseggero = document.querySelector('#nome-passeggero')
    const offertaAplicata = document.querySelector('#offerta-applicata')
    const carrozza = document.querySelector('#carrozza')
    const codiceCp = document.querySelector('#codice-cp')
    const costo = document.querySelector('#costo')

    nomePasseggero.innerHTML = nome

    const biglietto = document.querySelector('.biglietto')
    biglietto.classList.remove('hidden')
    biglietto.classList.add('show')

    //Elaboro il prezzo del biglietto a seconda della fascia d'età
    if(eta == 'minorenne'){
        offertaAplicata.innerHTML = 'Biglietto Ridotto'
        costo.innerHTML = `${((prezzo * km) * 0.80).toFixed(2)} €`
    }else if (eta == 'over65') {
        offertaAplicata.innerHTML = 'Biglietto Ridotto Over 65'
        costo.innerHTML = `${((prezzo * km) * 0.60).toFixed(2)} €`
    }else {
        offertaAplicata.innerHTML = 'Biglietto Standard'
        costo.innerHTML = `${(prezzo * km).toFixed(2)} €`

    }

    //Genera  numeri random 
    carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    codiceCp.innerHTML = Math.floor(Math.random() * 99999) + 1;
})

// Refresh pagina 
btnRefresh.addEventListener('click', function() {
    window.location.reload(true);
})
