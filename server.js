// Importeer het npm pakket express uit de node_modules map
import express, { application, json, request } from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({extended: true }))

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
});

/////////////////////////////////NO TOUCH ZONE////////////////////////////////////////////

// Hieronder komt de "const api" link te staan
const apiURL = "https://cat-fact.herokuapp.com";

// Hieronder maak je een GET ROUTE aan
app.get('/', function(request, response) {
  // tussen de haakjes zet je de link van de api url die je nodig hebt voor je site
  fetchJson('https://cat-fact.herokuapp.com/facts/random')
  // tussen de haakjes zet je de link van je partials in
  response.render('home')
});

// to get facts ID
app.get('/spinningwheel/:factID', function(request, response) {
  fetchJson('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount')
  
  response.render('spinningwheel.ejs')
});