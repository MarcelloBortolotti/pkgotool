/* file javascript per le interazioni con il database */
// Wait for PhoneGap to load
//
//inizializza il database e gli eventi per richiamare le funzioni della pagina
document.addEventListener("deviceready", inizializzaDB, false);

// Popola il database
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS POKEMON');
    tx.executeSql('CREATE TABLE IF NOT EXISTS POKEMON (id unique, nome, tipo, pl, plbase, plevol, moltiplicatore)');
	//pokemon base
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (1, "Pinsir", "base", 100, 31, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (2, "Chansey", "base", 100, 10, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (3, "Ditto", "base", 100, 13, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (4, "Onyx", "base", 100, 13, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (5, "Farfetch\'d", "base", 100, 18, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (6, "Kangaskan", "base", 100, 30, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (7, "Hitmonchan", "base", 100, 22, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (8, "Hitmonlee", "base", 100, 22, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (9, "Mr. Mime", "base", 100, 22, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (10, "Jynx", "base", 100, 25, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (11, "Lickitung", "base", 100, 24, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (12, "Porygon", "base", 100, 25, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (13, "Tangela", "base", 100, 25, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (14, "Tauros", "base", 100, 27, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (15, "Electabuzz", "base", 100, 31, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (16, "Scyther", "base", 100, 30, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (17, "Magmar", "base", 100, 33, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (18, "Aerodactyl", "base", 100, 32, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (19, "Lapras", "base", 100, 43, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (20, "Articuno", "base", 100, 43, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (21, "Snorlax", "base", 100, 45, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (22, "Zapdos", "base", 100, 45, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (23, "Moltres", "base", 100, 47, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (24, "Mew", "base", 100, 48, 0, 0)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (25, "Mewtwo", "base", 100, 60, 0, 0)');

	//una evoluzione
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (26, "Rattata", "uno", 100, 9, 21, 2.25)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (27, "Spearow", "uno", 100, 10, 25, 2.58)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (28, "Ekans", "uno", 100, 12, 26, 2.21)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (29, "Pikachu", "uno", 100, 13, 30, 2.33)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (30, "Sandshrew", "uno", 100, 12, 26, 2.29)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (31, "Clefairy", "uno", 100, 18, 35, 2.03)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (32, "Zubat", "uno", 100, 9, 28, 2.6)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (33, "Paras", "uno", 100, 13, 25, 1.92)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (34, "Jigglypuff", "uno", 100, 13, 32, 2.41)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (35, "Venonat", "uno", 100, 15, 28, 1.86)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (36, "Diglett", "uno", 100, 7, 17, 2.68)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (37, "Meowth", "uno", 100, 11, 24, 1.98)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (38, "Psyduck", "uno", 100, 16, 35, 2.22)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (39, "Mankey", "uno", 100, 13, 27, 2.17)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (40, "Growlithe", "uno", 100, 19, 40, 2.31)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (41, "Tentacool", "uno", 100, 13, 32, 2.47)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (42, "Ponyta", "uno", 100, 22, 32, 1.48)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (43, "Slowpoke", "uno", 100, 18, 38, 2.19)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (44, "Magnemite", "uno", 100, 13, 27, 2.16)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (45, "Dodouo", "uno", 100, 12, 27, 2.19)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (46, "Seel", "uno", 100, 16, 31, 1.04)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (47, "Grimer", "uno", 100, 19, 38, 2.00)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (48, "Shellder", "uno", 100, 12, 30, 2.62)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (49, "Drowzee", "uno", 100, 15, 32, 2.08)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (50, "Krabby", "uno", 100, 12, 27, 2.36)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (51, "Voltorb", "uno", 100, 12, 24, 2.00)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (52, "Exeggcute", "uno", 100, 16, 40, 2.7)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (53, "Cubone", "uno", 100, 15, 24, 1.65)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (54, "Koffing", "uno", 100, 17, 33, 1.95)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (55, "Rhyhorn", "uno", 100, 17, 33, 1.9)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (56, "Horsea", "uno", 100, 12, 25, 2.19)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (57, "Goldeen", "uno", 100, 14, 30, 2.14)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (58, "Staryu", "uno", 100, 14, 32, 2.38)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (59, "Evee - Vaporeon", "uno", 100, 16, 40, 2.63)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (60, "Evee - Flareon", "uno", 100, 16, 39, 2.47)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (61, "Evee - Jolteon", "uno", 100, 16, 31, 2.02)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (62, "Omanyte", "uno", 100, 16, 32, 1.99)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (63, "Kabuto", "uno", 100, 16, 31, 1.97)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (64, "Vulpix", "uno", 100, 12, 32, 2.74)');
	//smezzate
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (65, "Bulbasaur - Ivysaur", "uno", 100, 13, 24, 1.53)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (66, "Ivysaur - Venusaur", "uno", 100, 24, 38, 1.2)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (67, "Charmander - Charmeleon", "uno", 100, 13, 23, 1.64)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (68, "Charmeleon - Charizard", "uno", 100, 23, 38, 1.71)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (69, "Squirtle - Wartortle", "uno", 100, 13, 23, 1.58)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (70, "Wartortle - Blastoise", "uno", 100, 23, 37, 1.4)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (71, "Caterpie - Metapod", "uno", 100, 7, 7, 1.04)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (72, "Metapod - Butterfree", "uno", 100, 7, 21, 3.55)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (73, "Weedle - Kakuna", "uno", 100, 7, 7, 1.06)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (74, "Kakuna - Beedrill", "uno", 100, 7, 21, 3.01)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (75, "Pidgey - Pidgeotto", "uno", 100, 10, 18, 1.71)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (76, "Pidgeotto - Pidgeot", "uno", 100, 18, 30, 1.73)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (77, "Nidoran (F) - Nidorina", "uno", 100, 13, 20, 1.66)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (78, "Nidorina - Nidoqueen", "uno", 100, 20, 36, 1.82)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (79, "Nidoran (M) - Nidorino", "uno", 100, 12, 20, 1.46)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (80, "Nidorino - Nidoking", "uno", 100, 20, 36, 1.83)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (81, "Oddish - Gloom", "uno", 100, 17, 25, 1.48)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (82, "Gloom - Vileplume", "uno", 100, 25, 36, 1.48)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (83, "Poliwag - Poliwhirl", "uno", 100, 12, 20, 1.72)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (84, "Poliwhirl - Poliwrath", "uno", 100, 20, 37, 1.9)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (85, "Abra - Kadabra", "uno", 100, 9, 17, 1.36)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (86, "Kadabra - Alakazam", "uno", 100, 17, 26, 1.4)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (87, "Machop - Machoke", "uno", 100, 16, 26, 1.62)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (88, "Machoke - Machamp", "uno", 100, 26, 38, 1.48)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (89, "Bellsprout - Weepinbell", "uno", 100, 16, 25, 1.54)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (90, "Weepinbell - Victreebel", "uno", 100, 25, 37, 1.47)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (91, "Geodude - Graveler", "uno", 100, 12, 21, 1.73)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (92, "Graveler - Golem", "uno", 100, 21, 34, 1.64)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (93, "Gastly - Hunter", "uno", 100, 12, 20, 1.75)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (94, "Hunter - Gengar", "uno", 100, 20, 30, 1.56)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (95, "Dratini - Dragonair", "uno", 100, 14, 25, 1.69)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (96, "Dratair - Dragonite", "uno", 100, 25, 50, 2.03)');

	//due evoluzioni
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (97, "Bulbasaur - Venusaur", "due", 100, 13, 38, 1.83)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (98, "Charmander - Charizard", "due", 100, 13, 38, 2.8)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (99, "Squirtle - Blastoise", "due", 100, 13, 37, 2.21)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (100, "Caterpie - Butterfree", "due", 100, 7, 21, 3.69)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (101, "Weedle - Beedrill", "due", 100, 7, 20, 3.19)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (102, "Pidgey - Pidgeot", "due", 100, 10, 30, 2.95)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (103, "Nidoran (F) - Nidoqueen", "due", 100, 13, 36, 2.98)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (104, "Nidoran (M) - Nidoking", "due", 100, 12, 33, 2.68)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (105, "Oddish - Vileplume", "due", 100, 17, 36, 2.19)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (106, "Poliwag - Poliwrath", "due", 100, 12, 37, 3.26)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (107, "Abra - Alakazam", "due", 100, 9, 26, 1.9)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (108, "Machop - Machamp", "due", 100, 16, 38, 2.39)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (109, "Bellsprout - Victreebel", "due", 100, 16, 37, 2.26)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (110, "Geodude - Golem", "due", 100, 12, 34, 2.83)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (111, "Gastly - Gengar", "due", 100, 12, 30, 2.73)');
	tx.executeSql('INSERT INTO POKEMON (id, nome, tipo, pl, plbase, plevol, moltiplicatore) VALUES (112, "Dratini - Dragonite", "due", 100, 14, 50, 3.63)');
}

// Query da eseguire sul db
function queryNomi(tx){
	tx.executeSql('SELECT id, nome FROM POKEMON where tipo="base" order by nome', [], popolaSelectBase, errorCB);

	tx.executeSql('SELECT id, nome FROM POKEMON where tipo="uno" order by nome', [], popolaSelectUno, errorCB);

	tx.executeSql('SELECT id, nome FROM POKEMON where tipo="due" order by nome', [], popolaSelectDue, errorCB);
}

/*function querySingolo(tx){
	tx.executeSql('SELECT * FROM POKEMON where id=1', [], datiSingolo, errorCB);
}*/

// Query the success callback
function popolaSelectBase(tx, results) {
	for(i=0; i<results.rows.length; i++){
		$("#pokeselect").append('<option value="' + results.rows[i].id + '">' + results.rows[i].nome +'</option>');
	}
}

function popolaSelectUno(tx, results) {
	for(i=0; i<results.rows.length; i++){
		$("#pokeselect1").append('<option value="' + results.rows[i].id + '">' + results.rows[i].nome +'</option>');
	}
}

function popolaSelectDue(tx, results) {
	for(i=0; i<results.rows.length; i++){
		$("#pokeselect2").append('<option value="' + results.rows[i].id + '">' + results.rows[i].nome +'</option>');
	}
}

//restituisce tutti i dati di una singola selezione
function datiBase(tx, results) {
    //console.log(results.rows);
	$("#plbase").val(results.rows[0].plbase);
	//$("#plevol").val(results.rows[0].plevol);
	//$("#moltip").val(results.rows[0].moltiplicatore);
	$("#pl").val(results.rows[0].pl);
	$("#livelli").val(0);
	$("#evopot").val(0);
	$("#potevo").val(0);
}

function datiUno(tx, results) {
    //console.log(results.rows);
	$("#plbase1").val(results.rows[0].plbase);
	$("#plevol1").val(results.rows[0].plevol);
	$("#moltip1").val(results.rows[0].moltiplicatore);
	$("#pl1").val(results.rows[0].pl);
	$("#livelli1").val(0);
	$("#evopot1").val(0);
	$("#potevo1").val(0);
}

function datiDue(tx, results) {
    //console.log(results.rows);
	$("#plbase2").val(results.rows[0].plbase);
	$("#plevol2").val(results.rows[0].plevol);
	$("#moltip2").val(results.rows[0].moltiplicatore);
	$("#pl2").val(results.rows[0].pl);
	$("#livelli2").val(0);
	$("#evopot2").val(0);
	$("#potevo2").val(0);
}

function resettaCampi(){
	$("#plbase").val(0);
	//$("#plevol").val(0);
	//$("#moltip").val(0);
	$("#pl").val(0);
	$("#livelli").val(0);
	$("#evopot").val(0);
	$("#potevo").val(0);

	$("#plbase1").val(0);
	$("#plevol1").val(0);
	$("#moltip1").val(0);
	$("#pl1").val(0);
	$("#livelli1").val(0);
	$("#evopot1").val(0);
	$("#potevo1").val(0);

	$("#plbase2").val(0);
	$("#plevol2").val(0);
	$("#moltip2").val(0);
	$("#pl2").val(0);
	$("#livelli2").val(0);
	$("#evopot2").val(0);
	$("#potevo2").val(0);
}

// Transaction error callback
function errorCB(err) {
    console.log("Error processing SQL: "+err.code);
}
// Transaction success callback
function successCB() {
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 2000000);
	db.transaction(queryNomi, errorCB);
}

//Funzione richiamata sl change della select col nome POKEMON
//richiama i dati negli input fields
function getBase(val){
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 2000000);
	db.transaction(function (transaction) {
		transaction.executeSql('SELECT * FROM POKEMON where id='+val, [], datiBase, errorCB);
	}, errorCB)
}

function getUno(val){
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 2000000);
	db.transaction(function (transaction) {
		transaction.executeSql('SELECT * FROM POKEMON where id='+val, [], datiUno, errorCB);
	}, errorCB)
}

function getDue(val){
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 2000000);
	db.transaction(function (transaction) {
		transaction.executeSql('SELECT * FROM POKEMON where id='+val, [], datiDue, errorCB);
	}, errorCB)
}

//funzione per calcolare i PL finali
function calcolaPL(){
	var plbase = $("#plbase").val();
	//var plevol = $("#plevol").val();
	//var moltip = $("#moltip").val();
	var pliniz = parseInt($("#pl").val());
	var liv = $('#livelli').val();

	//var evopot = (pliniz*moltip) + (liv*plevol);
	var potevo = (liv*plbase+pliniz);
	//$("#evopot").val(evopot);
	$("#potevo").val(potevo);
}

function calcolaPL1(){
	var plbase = $("#plbase1").val();
	var plevol = $("#plevol1").val();
	var moltip = $("#moltip1").val();
	var pliniz = parseInt($("#pl1").val());
	var liv = $('#livelli1').val();

	var evopot = (pliniz*moltip) + (liv*plevol);
	var potevo = (liv*plbase+pliniz)*moltip;
	$("#evopot1").val(evopot);
	$("#potevo1").val(potevo);
}

function calcolaPL2(){
	var plbase = $("#plbase2").val();
	var plevol = $("#plevol2").val();
	var moltip = $("#moltip2").val();
	var pliniz = parseInt($("#pl2").val());
	var liv = $('#livelli2').val();

	var evopot = (pliniz*moltip) + (liv*plevol);
	var potevo = (liv*plbase+pliniz)*moltip;
	$("#evopot2").val(evopot);
	$("#potevo2").val(potevo);
}

// PhoneGap is ready
function inizializzaDB() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 2000000);
    db.transaction(populateDB, errorCB, successCB);

	//eventi scatenati dai menu select
	$("#pokeselect").on( "change", function() {
		if($(this).val() != 0){
			getBase($(this).val());
		}else{
			resettaCampi();
		}
	});

	$("#pokeselect1").on( "change", function() {
		if($(this).val() != 0){
			getUno($(this).val());
		}else{
			resettaCampi();
		}
	});

	$("#pokeselect2").on( "change", function() {
		if($(this).val() != 0){
			getDue($(this).val());
		}else{
			resettaCampi();
		}
	});

	//eventi per aggiungere e sottrarre i livelli
	$("#addliv").on("click", function(){
		if($("#pokeselect").val() != 0){
			$('#livelli').val( function(i, oldval) {
        		return ++oldval;
    		});
			calcolaPL();
		}else{
			alert("Devi prima selezionare un Pokemon!")
		}
	});

	$("#subliv").on("click", function(){
		if($("#pokeselect").val() != 0){
			if($("#livelli").val() > 0){
				$('#livelli').val( function(i, oldval) {
	        		return --oldval;
	    		});
			}
			calcolaPL();
		}else{
			alert("Devi prima selezionare un Pokemon!")
		}
	});

	$("#addliv1").on("click", function(){
		if($("#pokeselect1").val() != 0){
			$('#livelli1').val( function(i, oldval) {
        		return ++oldval;
    		});
			calcolaPL1();
		}else{
			alert("Devi prima selezionare un Pokemon!")
		}
	});

	$("#subliv1").on("click", function(){
		if($("#pokeselect1").val() != 0){
			if($("#livelli1").val() > 0){
				$('#livelli1').val( function(i, oldval) {
	        		return --oldval;
	    		});
			}
			calcolaPL1();
		}else{
			alert("Devi prima selezionare un Pokemon!")
		}
	});

	$("#addliv2").on("click", function(){
		if($("#pokeselect2").val() != 0){
			$('#livelli2').val( function(i, oldval) {
        		return ++oldval;
    		});
			calcolaPL2();
		}else{
			alert("Devi prima selezionare un Pokemon!")
		}
	});

	$("#subliv2").on("click", function(){
		if($("#pokeselect2").val() != 0){
			if($("#livelli2").val() > 0){
				$('#livelli2').val( function(i, oldval) {
	        		return --oldval;
	    		});
			}
			calcolaPL2();
		}else{
			alert("Devi prima selezionare un Pokemon!")
		}
	});
}
