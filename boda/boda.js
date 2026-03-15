let LANGUAGE = 'CAT';

const texts = {
    CAT: {
        explanation: 'En temps de Covid tota distracció és benvinguda',
        placeholder: "Mira't bé el puzzle"
    },
    ESP: {
        explanation: 'En tiempos de Covid toda distracción es bienvenida...',
        placeholder: '¿Has mirado bien el puzle?'
    },
    ENG: {
        explanation: 'In times of Covid all distractions are welcome...',
        placeholder: 'Did you look at the puzzle in detail?'
    }
};

function setLanguage(lang) {
    LANGUAGE = lang;
    document.getElementById('explanation').textContent = texts[lang].explanation;
    document.getElementById('puzzle-input').placeholder = texts[lang].placeholder;
    document.getElementById('puzzle-input').style.borderColor = '';
    ['CAT', 'ESP', 'ENG'].forEach(l => {
        document.getElementById('btn-' + l).classList.toggle('active', l === lang);
    });
}

function handleSubmit() {
    const input = document.getElementById('puzzle-input');
    const val   = input.value;

    const robot   = /^[xX][xX][xX][iI][vV][iI][iI][xX][xX][iI]$/;
    const testigo = /^[Gg]ertrudis$/;
    const parra   = /^[Pp][aA][rR][rR][iI][sS][Qq][uU][iI][sS]$/;
    const marina  = /^[Mm][aA][rR][iI][nN][iI]$/;
    const china   = /^[Cc][hH][iI][nN][aA]\s?[wW][hH][iI][tT][eE]$/;
    const silbato = /^[Ss][iI][lL][bB][aA][tT][oO]$/;

    if (robot.test(val)) {
        input.style.borderColor = 'rgba(0,255,0,1)';
        const dest = { CAT: '/enllas', ESP: '/boda', ENG: '/wedding' };
        window.location.href = dest[LANGUAGE] || '/enllas';

    } else if (testigo.test(val)) {
        showLightbox('Testimonis');
    } else if (parra.test(val)) {
        showLightbox('TestimonisES');
    } else if (marina.test(val)) {
        showLightbox('TestimonisG');
    } else if (china.test(val)) {
        showLightbox('TestimonisEN');
    } else if (silbato.test(val)) {
        showLightbox('Silbato');
    } else {
        input.style.borderColor = 'rgba(255,0,0,1)';
    }
}

function showLightbox(name) {
    // TODO: replace with actual lightbox content
    alert(name);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('puzzle-input').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') handleSubmit();
    });
});
