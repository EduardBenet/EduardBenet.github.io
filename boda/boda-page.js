let LANGUAGE = 'CAT';

const content = {
    CAT: {
        nav: ['Benvingut', 'Cerimònia', 'Sopar', 'Música', 'Allotjament', 'La subvenció', "Confirma l'assistència", 'COVID-19'],
        sections: [
            {
                header: 'Els nuvis',
                title: 'La nostra història d\'aventures',
                text: 'Ens vam conéixer fa 13 anys a la residència Penyafort-Montserrat. L\'any anterior, l\'Edu i un amic havien amagat una espardenya al sostre d\'una habitació de les noies per tenir una raó per poder presentar-se sense invitació. La resta és història; dos anys junts a Barcelona, cinc separats Denver - Barcelona, i finalment junts a Cambridge.'
            },
            {
                title: 'La Cerimònia',
                when: 'A les 12:30 de la tarda el 31 de Juliol de 2021. Afegir al calendari.',
                whenword: 'QUAN:',
                where: 'A la catedral de Tarragona',
                whereword: 'ON:',
                how: 'Com arribar - On apparcar/recollida bus',
                notes: 'Després de la cerimònia hi haurà servei d\'autobús per arribar i tornar del Mas Groc'
            },
            {
                title: 'El Sopar',
                where: 'Al Mas Groc, Riudoms',
                whereword: 'ON:',
                notes: 'Començarem aproximadament cap a les 14.30h. Veniu amb gana i moltes ganes de ballar!',
                confirm: "Confirma l\'assistència",
                title2: 'Com Arribar-hi',
                text2: 'Aquí teniu el mapa de google maps, aneu en compte perquè el pin no està exactament on toca. El Mas és una mica més endavant. La entrada és a la dreta arribant de Tarragona i és una mica dolenta. Aneu a poc a poc i pareu compte.',
                map: 'Descarrega\'t el plànol oficial'
            },
            {
                title: 'Ajuda\'ns a triar la música',
                text: 'Afegir-te a la llista és molt senzill. Pots obrir-la directament a Spotify. Sinó, obre l\'aplicació en un altre dispositiu, i des de la barra del buscador fes una foto al codi inferior.'
            },
            {
                title: 'Allotjament',
                text: 'Aquests són els hotels que us recomanem per proximitat i preu.  Hem reservat alguna habitació perquè no pugin els preus. Avisa´ns abans de fer la reserva.'
            },
            {
                header: 'Sense cap dubte, la vostra companyia en el nostre dia més especial és el millor regal. No obstant, si voleu contribuir d\'una altra forma podeu fer-ho aqui',
                title: '(Quan el COVID ens deixi, els hi farem una visita)'
            }
        ]
    },
    ESP: {
        nav: ['Bienvenido', 'Ceremonia', 'Banquete', 'Música', 'Alojamiento', 'La subvención', 'Confirma la asistencia', 'COVID-19'],
        sections: [
            {
                header: 'Los novios',
                title: 'Nuestra historia de aventuras',
                text: 'Nos conocimos hace 13 años en el colegio mayor Penyafort-Montserrat. El año anterior, Edu y un amigo habían escondido una zapatilla en el falso techo de una habitación de las chicas para tener una razón y presentarse sin invitación. El resto es historia; dos años juntos en Barcelona, cinco separados Denver - Barcelona, y finalmente juntos en Cambridge.'
            },
            {
                title: 'La Ceremonia',
                when: 'A las 12:30 de la mañana el 31 de Julio de 2021. Añadir al calendario',
                whenword: 'CUANDO:',
                where: 'En la catedral de Tarragona',
                whereword: 'DONDE:',
                how: 'Como llegar - Donde aparcar/recogida autobús',
                notes: 'Después de la ceremonia habrá servicio de autobús para ir y volver de Mas Groc'
            },
            {
                title: 'El Banquete',
                where: 'En Mas Groc, Riudoms',
                whereword: 'DONDE:',
                notes: 'Empezaremos aproximadamente hacia las 14:30h. Venid con hambre y con muchas ganas de bailar!!',
                confirm: "Confirma la asistencia",
                title2: 'Com Llegar',
                text2: 'Aquí tenéis el mapa de google maps, id con cuidado porque el pin no está exactamente donde toca. La Masía se encuentra un poco más adelante. La entrada está a la derecha llegando desde Tarragona y es un poco mala. Id poco a poco y con atención.',
                map: 'Descárgate el plano oficial'
            },
            {
                title: 'Ayúdanos a escoger la música',
                text: 'Añadirte a la lista es muy sencillo. Puedes abrirla directamente en Spotify. Sino, abre la aplicación en otro dispositivo, y desde la barra del buscador haz una foto al código inferior.'
            },
            {
                title: 'Alojamiento',
                text: 'Estos son los hoteles que os recomendamos. Hemos reservado algunas habitaciones para mantener el precio. Avísanos antes de hacer la reserva.'
            },
            {
                header: 'Sin lugar a dudas, vuestra compañía en nuestro día más especial es el mejor regalo. No obstante, si queréis contribuir de otra forma podéis hacerlo aquí',
                title: '(Cuando el COVID nos deje, les haremos una visita)'
            }
        ]
    },
    ENG: {
        nav: ['Welcome', 'Ceremony', 'Reception', 'Music', 'Accommodation', 'The subsidy', 'RSVP', 'COVID-19'],
        sections: [
            {
                header: 'The couple',
                title: 'Our adventure story',
                text: 'We met each other 13 years ago at the dorms Penyafort-Montserrat in Barcelona. The year before Edu and his roomie had hidden a slipper in the ceiling of a room of the girls building to have a reason for introducing themselves. The rest is history, two years together in Barcelona, five separated Denver-Barcelona, and finally together in Cambridge.'
            },
            {
                title: 'The Ceremony',
                when: 'Saturday 31st of July 2021 at 12 pm. Add to the calendar.',
                whenword: 'WHEN:',
                where: 'At the cathedral of Tarragona.',
                whereword: 'WHERE:',
                how: 'Get directions  - Where to park/bus meeting point',
                notes: 'After the ceremony there will be a bus service to get to and return from Mas Groc'
            },
            {
                title: 'Reception',
                where: 'At Mas Groc, Riudoms',
                whereword: 'WHERE:',
                notes: 'We will start around 14:30h. Come hungry and with your dance moves ready!',
                confirm: "RSVP",
                title2: 'Directions',
                text2: 'Here you have the location in google maps. Please be careful because the pin is not exactly right. The house is a bit further down the road. The entrance is on the right arriving from Tarragona and is not very good. Please go slowly and be careful.',
                map: 'Download the official directions!'
            },
            {
                title: 'Help us with the music',
                text: 'Adding yourself to the list is very esay. You can open it directly in Spotify using the top-right icon. Otherwise, open the app in a different device and, from the search bar, take a picture of the code below.'
            },
            {
                title: 'Accomodation',
                text: 'These are a couple hotels we can recommend.  We made some reservations to keep the price the same. Get in touch before booking them yourself.'
            },
            {
                header: 'Without any doubt, your company in our most special day is the best gift. Yet, if you wanted to contribute in a different way, you can do it here',
                title: '(When COVID allows us, we will pay them a visit)'
            }
        ]
    }
};

function setLanguage(lang) {
    LANGUAGE = lang;
    ['CAT', 'ESP', 'ENG'].forEach(l => {
        document.getElementById('lang-' + l).classList.toggle('active', l === lang);
    });
    renderSections();
}

function renderSections() {
    const sections = content[LANGUAGE].sections;
    const nav = content[LANGUAGE].nav;
    sections.forEach((sec, i) => {
        const el = document.getElementById('section-' + i);
        el.querySelector('.section-title').textContent = sec.title;
        if (!el) return;
        switch (i) {
            case 0:
                el.querySelector('.section-header').textContent = sec.header;
                el.querySelector('.section-text').textContent = sec.text;
                break;
            case 1:
                el.querySelector('.section-whenword').textContent = sec.whenword;
                el.querySelector('.section-when').textContent = sec.when;
                el.querySelector('.section-whereword').textContent = sec.whereword;
                el.querySelector('.section-where').textContent = sec.where;
                el.querySelector('.section-how').textContent = sec.how;
                el.querySelector('.section-notes').textContent = sec.notes;
                break;
            case 2:
                el.querySelector('.section-whereword').textContent = sec.whereword;
                el.querySelector('.section-where').textContent = sec.where;
                el.querySelector('.section-notes').textContent = sec.notes;
                el.querySelector('.section-confirm').textContent = sec.confirm;
                el.querySelector('.section-title2').textContent = sec.title2;
                el.querySelector('.section-text2').textContent = sec.text2;
                el.querySelector('.section-map').textContent = sec.map;
                break;
            case 3:
                el.querySelector('.section-text').textContent = sec.text;
                break;
            case 4:
                el.querySelector('.section-text').textContent = sec.text;
                break;
            case 5:
                el.querySelector('.section-header').textContent = sec.header;
        }
        const link = document.getElementById('drawer-' + i);
        if (link) link.textContent = nav[i] || sec.title;
    });
    const confirmLink = document.getElementById('drawer-6');
    if (confirmLink) {
        confirmLink.textContent = nav[6];
        confirmLink.href = 'confirm.html?lang=' + LANGUAGE;
    }
    const covidLink = document.getElementById('drawer-7');
    if (covidLink) {
        covidLink.textContent = nav[7];
        covidLink.href = 'covid19.html?lang=' + LANGUAGE;
    }
}

function toggleMenu() {
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');
    const open = drawer.classList.toggle('open');
    overlay.classList.toggle('open', open);
}

const partAltaMaps = {
    CAT: 'assets/mapa-part-alta-cat.jpg',
    ESP: 'assets/mapa-part-alta-esp.jpg',
    ENG: 'assets/mapa-part-alta-eng.jpg'
};

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang && ['CAT', 'ESP', 'ENG'].includes(lang)) {
        setLanguage(lang);
    } else {
        renderSections();
    }
    document.getElementById('nav-overlay').addEventListener('click', toggleMenu);

    // Map overlay (Google Maps)
    const mapOverlay = document.getElementById('map-overlay');
    document.getElementById('map-img').addEventListener('click', () => {
        mapOverlay.classList.add('open');
    });
    document.getElementById('map-overlay-close').addEventListener('click', () => {
        mapOverlay.classList.remove('open');
    });
    mapOverlay.addEventListener('click', (e) => {
        if (e.target === mapOverlay) mapOverlay.classList.remove('open');
    });

    // Part Alta image overlay
    const imgOverlay = document.getElementById('img-overlay');
    const imgOverlayImg = document.getElementById('img-overlay-img');
    document.querySelector('.section-how').addEventListener('click', () => {
        imgOverlayImg.src = partAltaMaps[LANGUAGE];
        imgOverlay.classList.add('open');
    });
    document.getElementById('img-overlay-close').addEventListener('click', () => {
        imgOverlay.classList.remove('open');
    });
    imgOverlay.addEventListener('click', (e) => {
        if (e.target === imgOverlay) imgOverlay.classList.remove('open');
    });
});
