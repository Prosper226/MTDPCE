
    
    let map1, map2, map3;
    let currentMap = 'map1';
    let locations = [
        { 
            nom: "Turbo Tech sarl", 
            responsable : "Yameogo Ismael", 
            adresse : "1200 logements", 
            email : "turbotech.burkina@gmail.com",
            contact : "60829797",
            lienPage : "https://www.facebook.com/profile.php?id=100063975257159", 
            lat: 12.35847438903609, 
            lon: -1.4888652047506956,
            map: 'map1'
        },
        { 
          nom: "Somaf Informatique", 
          responsable : "Abdoul Halim RABO", 
          adresse : "koulouba", 
          email : "...",
          contact : "78184040",
          lienPage : "https://web.facebook.com/somafinformatique", 
          lat: 12.364478187573383, 
          lon: -1.5198082332200107,
          map: 'map1'
        },
        { 
          nom: "Class Services Informatique", 
          responsable : "...", 
          adresse : "Bobo Dioulasso", 
          email : "...",
          contact : "62 22 22 40",
          lienPage : "https://www.facebook.com/CServicesinformatique/", 
          lat: 11.174116223475181, 
          lon: -4.297561975566846,
          map: 'map1'
        },
        { 
          nom: "ELKAF Technology", 
          responsable : "...", 
          adresse : "Bobo Dioulasso", 
          email : "...",
          contact : "76 58 21 58",
          lienPage : "https://www.facebook.com/elkaftechnology/", 
          lat: 11.172692426591974,
          lon: -4.273669262075291,
          map: 'map1'
        },
        { 
          nom: "Innova Informatique Soft", 
          responsable : "...", 
          adresse : "Ouahigouya", 
          email : "innovainfsoft@gmail.com",
          contact : "72804521",
          lienPage : "https://web.facebook.com/Innovainformatiquesoft/?_rdc=1&_rdr", 
          lat: 13.560274233214017,
          lon: -2.4093053043627704,
          map: 'map1'
        },
        { 
          nom: "PHÉNIX INFORMATIQUE", 
          responsable : "NEBIE Kader", 
          adresse : "Koudougou", 
          email : "...",
          contact : "25 44 14 50",
          lienPage : "https://informatique-phoenix.com/", 
          lat: 12.251008127282331,
          lon: -2.3568936711199866,
          map: 'map1'
        },
        { 
          nom: "CIEL BURKINA", 
          responsable : "...", 
          adresse : "Banfora", 
          email : "...",
          contact : "25 44 14 50",
          lienPage : "...", 
          lat: 10.696632573832291,
          lon: -4.764236956317483,
          map: 'map1'
        },
        {
           nom: "SYSTI",
	       responsable : "DONDASSE Boris",
	       adresse : "Ouagadougou, Burkina Faso",
	       email : "contact@systi.net",
	       contact: "+22672000008",
	       lienPage : "https://systi.net",
	       lat: 12.40290058606288, 
           lon: -1.4690169755470934,
           map: 'map1'
        },
        { 
            nom: "E-SERVICES SA", 
            responsable : "M.TASSEMBEDO", 
            adresse : "1er Etage Immeuble Pharmacie Augustine", 
            email : "eservicessa@eservicessa.com",
            contact : "(+226) 25 37 55 46 Standard (+226) 56 90 00 00 SAV",
            lienPage : "www.eservicessa.com", 
            lat: 12.325567229553583,  
            lon: -1.5031527182429127,
            map: 'map1'
        },
        { 
            nom: "DATASYS SARL", 
            responsable : "Yahaya ZOUNGRANA", 
            adresse : "9F5M+V39, Av. Kwame Nkrumah, Koulouba, Ouagadougou", 
            email : "info@datasys.bf",
            contact : "25 31 76 38 ",
            lienPage : "http://www.datasys.bf", 
            lat: 12.3596686, 
            lon: -1.5198362,
            map: 'map1'
        },
        { 
            nom: "NeXT's", 
            responsable : "Guy Martial Ouédraogo", 
            adresse : "Rue de la Science, Ouagadougou", 
            email : "info@nexts.bf",
            contact : "+226 25 33 25 88",
            lienPage : "www.nexts.bf", 
            lat: 12.3580966, 
            lon: -1.5200796,
            map: 'map1'
        },
        { 
            nom: "NOVACOM SOLUTIONS", 
            responsable : "Ousmane Sanogo ", 
            adresse : "1200 logements, Ouagadougou", 
            email : "novacom@novacom.bf",
            contact : "25653401",
            lienPage : "www.novacom.bf", 
            lat: 12.3688958, 
            lon: -1.500051,
            map: 'map1'
        },
        { 
            nom: "ABDI (Association Burkinabè des Domaines Internet)", 
            responsable : "Izaï Toé", 
            adresse : "01 BP 525 Ouagadougou", 
            email : "contact@abdi.bf",
            contact : "25332525",
            lienPage : "https://www.facebook.com/profile.php?id=100063975257159", 
            lat: 12.371593, 
            lon: -1.4947546,
            map: 'map2'
        },
        { 
            nom: "ATS BUSINESS INFORMATIQUE & TECHNOLOGIE", 
            responsable : "Tikou Ouandaogo", 
            adresse : "Karpala, Ouagadougou", 
            email : "atsinformatiq@gmail.com ",
            contact : "78082149",
            lienPage : "www.ats-bit.blogspot.com", 
            lat: 12.3346437, 
            lon: -1.4866714,
            map: 'map1'
        },
        { 
            nom: "Association des Informaticiens du Faso", 
            responsable : "...", 
            adresse : "06 BP 10734 06, Dassasgo, Ouagadougou", 
            email : "...",
            contact : "25366463",
            lienPage : "www.sitel.bf", 
            lat: 12.4316085, 
            lon: -1.802797,
            map: 'map2'
        },
        { 
            nom: "Association Burkinabè des Informaticiens de la Santé (ABIS)", 
            responsable : "Dr. Abdoulaye Tapsoba (Président)", 
            adresse : "Ouagadougou", 
            email : "info@abis.bf",
            contact : "25 34 45 66",
            lienPage : "...", 
            lat: 12.3413665,
            lon: -1.6238524,
            map: 'map2'
        },
        { 
            nom: "Association des Femmes en TIC du Burkina Faso (AFTIC)", 
            responsable : "Aïssata Diallo", 
            adresse : "Ouagadougou", 
            email : "contact@aftic.bf",
            contact : "+226 70 15 34 56",
            lienPage : "...", 
            lat: 12.408679571004354, 
            lon: -1.55167376820489,
            map: 'map2'
        },
        { 
            nom: "Association pour la Promotion des Logiciels Libres au Burkina Faso (APLLBF)", 
            responsable : "Sidiki Ouédraogo (Président)", 
            adresse : "Ouagadougou", 
            email : "contact@apllbf.bf",
            contact : "+226 25 32 16 89",
            lienPage : "...", 
            lat: 12.4033877,
            lon: -1.5229614,
            map: 'map2'
        },
        { 
            nom: "Réseau des Acteurs du Numérique au Burkina Faso (RANBF)", 
            responsable : "Michel Kaboré (Président)", 
            adresse : "Ouagadougou", 
            email : "info@ranbf.bf",
            contact : "+226 70 21 09 11",
            lienPage : "...", 
            lat: 12.3889565,
            lon: -1.5232093,
            map: 'map2'
        },
        { 
            nom: "GROUP ENINF TECHNOLOGIE - K", 
            responsable : "Souleymane Bouda", 
            adresse : "Ouagadougou", 
            email : "agencews@gmail.com",
            contact : "70 79 04 70",
            lienPage : "https://web.facebook.com/eninftech/?_rdc=1&_rdr", 
            lat: 12.4224261, 
            lon: -1.5644374,
            map: 'map1'
        },
        { 
            nom: "YAM PUKRI", 
            responsable : "Sylvestre OUEDRAOGO", 
            adresse : "Rue naba Bilgo, Ouagadougou", 
            email : "info@yam-pukri.org",
            contact : "25 37 39 74 / 70 25 04 49",
            lienPage : "https://yam-pukri.org", 
            lat: 12.3418426,
            lon: -1.5130843 ,
            map: 'map1'
        },
        { 
            nom: "H2i - H2 informatique", 
            responsable : "...", 
            adresse : "01 BP 5751, Av. Kwame Nkrumah, Ouagadougou", 
            email : "h2i@h2informatique.com",
            contact : "25308836",
            lienPage : "https://web.facebook.com/profile.php?id=100054590072513", 
            lat: 12.3583488, 
            lon: -1.5200922,
            map: 'map1'
        },
        { 
            nom: "Zenith Hi-Tech Burkina SARL", 
            responsable : "...", 
            adresse : "1200 logements", 
            email : "burkinazenith@gmail.com",
            contact : "+226 02 19 19 19",
            lienPage : "https://web.facebook.com/p/Z%C3%A9nith-Hi-Tech-Burkina-SARL-100064598356196/?locale=fr_FR&_rdc=1&_rdr", 
            lat: 12.3573072,
            lon: -1.4968437,
            map: 'map1'
        },
        { 
            nom: "2CS-BURKINA", 
            responsable : "...", 
            adresse : "Ouagadougou", 
            email : "...",
            contact : "70 21 54 56",
            lienPage : "www.2csburkina.com", 
            lat: 12.350185,
            lon: -1.5522906,
            map: 'map1'
        },
        { 
            nom: "BABOU INFORMATIQUE MULTI-SERVICE", 
            responsable : "...", 
            adresse : "Zogona, Ouagadougou", 
            email : "tougmapascalboubacar@gmail.com",
            contact : "+226 75 49 50 50",
            lienPage : "https://www.facebook.com/profile.php?id=100063975257159", 
            lat: 12.3789907,
            lon: -1.4991944,
            map: 'map1'
        },
        { 
            nom: "ALPHABECLIC", 
            responsable : "Konan Nabi", 
            adresse : "Secteur 5, Sogpelsé, Koudougou ", 
            email : "contact@alphabeclic.com",
            contact : "+226 71 72 74 73 ",
            lienPage : "https://alphabeclic.com/", 
            lat: 12.2414003,
            lon: -2.3888896,
            map: 'map1'
        },
        { 
            nom: "ECIF BURKINA ", 
            responsable : "Hamado SORGHO", 
            adresse : "1200 logements, Ouagadougou", 
            email : "ecif@ecifburkina.com",
            contact : "68 00 11 00",
            lienPage : "https://web.facebook.com/Ecif226sarl/?locale=fr_FR&_rdc=1&_rdr", 
            lat: 12.3646004, 
            lon: -1.5170877,
            map: 'map1'
        },
        { 
            nom: "Express Informatique", 
            responsable : "...", 
            adresse : "Koudougou", 
            email : "expressinformatiquekdg@gmail.com",
            contact : "71532932",
            lienPage : "https://web.facebook.com/p/Express-Informatique-100036100699822/?locale=fr_FR&_rdc=1&_rdr", 
            lat: 12.250577171745672, 
            lon: -2.3955273581326875,
            map: 'map1'
        },
        { 
            nom: "Monde Expert", 
            responsable : "...", 
            adresse : "Koudougou", 
            email : "info@mondexpert.org ",
            contact : "70 48 84 98 / 78 54 36 55 / 77 87 94 41",
            lienPage : "https://www.mondexpert.org/", 
            lat: 12.2562489, 
            lon: -2.3543063,
            map: 'map1'
        },
        { 
            nom: "AXONE INFORMATIQUE", 
            responsable : "...", 
            adresse : "Koudougou", 
            email : "...",
            contact : "76 74 26 02",
            lienPage : "https://www.axone-bf.com/", 
            lat: 12.2395625, 
            lon: -2.4032147,
            map: 'map1'
        },
        { 
            nom: "Computers'Doctor", 
            responsable : "...", 
            adresse : "Koudougou", 
            email : "...",
            contact : "57 20 11 42",
            lienPage : "https://web.facebook.com/people/Computers-Doctor/100092464370206/", 
            lat: 12.2505427, 
            lon: -2.3402707,
            map: 'map1'
        },
        { 
            nom: "Internet Puissance Plus", 
            responsable : "...", 
            adresse : "Ouaga 2000, Ouagadougou", 
            email : "info@internetpplus.com",
            contact : "74 84 59 59",
            lienPage : "https://internetpplus.com/", 
            lat: 12.30718337477704, 
            lon: -1.515694894223016,
            map: 'map1'
        },
        { 
            nom: "i-SOFT (Impact Soft Informatique)", 
            responsable : "....", 
            adresse : "Ouagadougou", 
            email : "...",
            contact : "+226 75 70 70 76",
            lienPage : "https://isoftbf.com/", 
            lat: 12.3580846,
            lon: -1.4907106,
            map: 'map1'
        },
        { 
            nom: "CFAO Technologies", 
            responsable : "...", 
            adresse : "2105 Avenue Houari Boumediene, Koulouba, Ouagadougou", 
            email : "hctbf@cfao.com",
            contact : "+226 25 32 80 00 / +226 25 32 80 80",
            lienPage : "www.cfao-technologies.com", 
            lat: 12.3655793, 
            lon: -1.518361,
            map: 'map1'
        },
        { 
            nom: "FOCUS INFORMATICS", 
            responsable : "...", 
            adresse : "Rue 203 - Kouritenga, Ouagadougou", 
            email : "contact@focus-informatique.com",
            contact : "+226 73089065/ 77665523",
            lienPage : "https://focus-informatique.com/", 
            lat: 12.3165538,
            lon: -1.5443992,
            map: 'map1'
        },
        { 
            nom: "CGI Technologies", 
            responsable : "...", 
            adresse : "Koulouba, Ouagadougou", 
            email : "70 37 17 17",
            contact : "60829797",
            lienPage : "http://www.groupcgitechnologies.com/", 
            lat: 12.3624132,
            lon: -1.5191909,
            map: 'map1'
        },
        { 
            nom: "Digitsyst Burkina", 
            responsable : "...", 
            adresse : "09 BP 454, O9, Ouagadougou", 
            email : "...",
            contact : "56196915",
            lienPage : "https://www.digitsystburkina.com/", 
            lat: 12.3686015,
            lon: -1.4624855,
            map: 'map1'
        },
        { 
            nom: "Société Burkinabè de l'informatique", 
            responsable : "...", 
            adresse : "Kalgondin, Ouagadougou", 
            email : "ilboudoibrahim159@gmail.com",
            contact : "54 32 08 20 ",
            lienPage : "https://www.facebook.com/p/Soci%C3%A9t%C3%A9-Burkinab%C3%A8-De-linformatique-100089116068852/", 
            lat: 12.3508164, 
            lon: -1.5016335,
            map: 'map1'
        },
        { 
            nom: "Yandoama Consulting", 
            responsable : "...", 
            adresse : "Wayalguin, Ouagadougou", 
            email : "contact@yandoama.com",
            contact : "+226 72979041",
            lienPage : "https://home.yandoama.com/", 
            lat: 12.4089636,
            lon: -1.4701224,
            map: 'map1'
        },
        { 
            nom: "BurkinaTech", 
            responsable : "Christian KOUTOU", 
            adresse : "1200 logements, Ouagadougou", 
            email : "Christiankoutou@gmail.com",
            contact : "70872230",
            lienPage : "https://web.facebook.com/Burkinateck70872230", 
            lat: 12.3587444,
            lon: -1.5000281,
            map: 'map1'
        }
    ];

    // Pagination variables
    let currentPage = 1;
    const rowsPerPage = 8;

    function initMap(mapId, lat, lon, zoom) {
        let map = L.map(mapId).setView([lat, lon], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        locations.filter(loc => loc.map === mapId).forEach(loc => {
            L.marker([loc.lat, loc.lon]).addTo(map)
                .bindPopup(
                    "<b>" + loc.nom + "<br>" +"<br>" +
              "<b>Responsable : </b>" + loc.responsable + "<br>" +
              "<b>Adresse : </b>" + loc.adresse + "<br>" +
              "<b>Email : </b>" + loc.email + "<br>" +
              "<b>Contact : </b>" + loc.contact + "<br>" +             
              "<b>LienPage : </b><a href='" + loc.lienPage + "' target='_blank'>" + loc.lienPage + "</a>"
                );
        });

        return map;
    }

    function showMap(mapId) {
        document.querySelectorAll('.map-container').forEach(map => map.style.display = 'none');
        document.getElementById(mapId).style.display = 'block';
        currentMap = mapId;
        currentPage = 1;
        updateTable(mapId);
    }

    function updateTable(mapId) {
        const tableBody = document.querySelector('#mapTable tbody');
        tableBody.innerHTML = '';

        const filteredLocations = locations.filter(loc => loc.map === mapId);
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedLocations = filteredLocations.slice(start, end);

        paginatedLocations.forEach(loc => {
            const row = document.createElement('tr');
            row.innerHTML = `<td class="clickable">${loc.nom}</td><td>${loc.lat}</td><td>${loc.lon}</td>`;
            row.onclick = function() {
                redirectToLocation(loc.lat, loc.lon);
            };
            tableBody.appendChild(row);
        });

        // Mise à jour du numéro de page
        document.getElementById('pageNumber').textContent = `Page ${currentPage} / ${Math.ceil(filteredLocations.length / rowsPerPage)}`;

        // Activer/Désactiver les boutons de pagination
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === Math.ceil(filteredLocations.length / rowsPerPage);
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            updateTable(currentMap);
        }
    }

    function nextPage() {
        const totalRows = locations.filter(loc => loc.map === currentMap).length;
        if (currentPage < Math.ceil(totalRows / rowsPerPage)) {
            currentPage++;
            updateTable(currentMap);
        }
    }

    function searchLocation() {
        const query = document.getElementById('search').value.toLowerCase();
        const result = locations.find(loc => loc.nom.toLowerCase().includes(query) && loc.map === currentMap);

        if (result) {
            redirectToLocation(result.lat, result.lon);
            alert(`Lieu trouvé : ${result.nom}`);
        } else {
            alert('Lieu non trouvé sur cette carte');
        }
    }

    function redirectToLocation(lat, lon) {
        if (currentMap === 'map1') map1.setView([lat, lon], 14);
        if (currentMap === 'map2') map2.setView([lat, lon], 14);
        if (currentMap === 'map3') map3.setView([lat, lon], 14);
    }

    // Initialisation des cartes
    document.addEventListener('DOMContentLoaded', function () {
        map1 = initMap('map1', 12.0753083, -1.6880314, 6);
        map2 = initMap('map2', 12.0753083, -1.6880314, 6);
        map3 = initMap('map3', 40.7128, -74.0060, 13);

        updateTable('map1');
        
    });
