// 15 Jun 2022 
// German Gtz - ActualizaciÃ³n para agregar compras a cadena de suministro

const tecnicasContainer = document.getElementById('tecnicas-container'),
escuelasContainer = document.getElementById('escuelas-container'),
mainSection = document.getElementsByClassName('main-section'),
instrucciones = document.getElementById('instrucciones'),
academiaTitle = document.getElementById('Academia'),
escuelasItems = document.getElementById('escuelas-items'),
carouselTecnicas = document.getElementById('carouselTecnicas'),
navbar = document.getElementsByClassName('navbar'),
arrow = document.getElementById('back-arrow');


// mobile
const escuelasInner = document.getElementById('escuelasInner'),
escuelasIndicators = document.getElementById('escuelasIndicators'),
academiaTitleM = document.getElementById('academia-title'),
escuelasMobile = document.getElementById('escuelas-mobile');


function openNav() {
    document.getElementById("SideNav").style.width = "70%";
}

function closeNav() {
    document.getElementById("SideNav").style.width = "0";
}

function openAcademia(academia) {
    let html = '';
    tecnicasContainer.style.display = 'none';
    escuelasContainer.style.display = 'block';
    mainSection[0].style.backgroundImage = "url('/content/grupobimbo/publications/8483/img/FondoWeb2-01.png')";
    instrucciones.innerText = 'Da clic en la Escuela que te interese y explora sus Competencias.';
    academiaTitle.innerText = academia.academia;

    academia.escuelas.forEach(item => {
        html += `<div class="academias-item">
                    <div class="academias-text">
                        Escuela ${item.nombre}
                    </div>
                    <a class="academias-btn" href="${item.link}">
                        <img src="/assets/img/IconoFlecha-02-AmarilloClaro.svg" alt="" class="academias-arrow">
                        <br>Ver Competencias
                    </a>
                </div>`
    });

    escuelasItems.innerHTML = html;

}


function closeAcademia() {
    tecnicasContainer.style.display = 'block';
    escuelasContainer.style.display = 'none';
    mainSection[0].style.backgroundImage = 'none';
    instrucciones.innerText = 'Da clic en la Academia que te interese y accede a sus Escuelas.';
}


function openAcademiaM(academia) {
    let indicators = '', carousel = '';
    tecnicasContainer.style.display = 'none';
    escuelasMobile.style.display = 'block';
    navbar[0].style.justifyContent = 'center';
    arrow.style.display = 'block';
    mainSection[0].style.backgroundImage = "url('/content/grupobimbo/publications/8483/img/Fondo2-M.png')";
    instrucciones.innerText = 'Da clic en la Escuela que te interese y explora sus Competencias.';
    academiaTitleM.innerText = academia.academia;

    for (let i = 0; i < academia.escuelas.length; i++) {
        indicators += `<li data-bs-target="#carouselEscuelas" data-bs-slide-to="${i}" ${(i===0) && 'class="active"' }></li>`;
        carousel += `<div class="carousel-item ${(i===0) && 'active'}">
        <div class="academias-item-c">
            <div class="academias-text">
                Escuela<br>${academia.escuelas[i].nombre}
            </div>
            <a class="academias-btn" href="${academia.escuelas[i].link}">
                <img src="/content/grupobimbo/publications/8483/img/iconos-comp/IconoFlecha-02-Amarillo.svg" alt="" class="academias-arrow">
                <br>Ver Competencias
            </a>
            <div class="academias-slide">${i+1} de ${academia.escuelas.length}</div>
        </div>
    </div>`;
        
    }

    escuelasInner.innerHTML = carousel;
    escuelasIndicators.innerHTML = indicators;

}


function closeAcademiaM() {
    tecnicasContainer.style.display = 'block';
    escuelasMobile.style.display = 'none';
    navbar[0].style.justifyContent = 'space-between';
    arrow.style.display = 'none';
    mainSection[0].style.backgroundImage = "url('/content/grupobimbo/publications/8483/img/Fondo1-M.png')";
    instrucciones.innerText = 'Da clic en la Academia que te interese y accede a sus Escuelas.';

}


const administracion = {
    academia: 'Administración y Finanzas',
    escuelas: [
        {nombre: 'Bienes Raíces', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206424162_1095765437_PDF.pdf'},
        {nombre: 'Contralorí­a', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206405594_1293411163_PDF.pdf'},
        {nombre: 'Jurí­dico', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206415684_1616760744_PDF.pdf'},
        {nombre: 'PlaneaciÃ³n Financiera', link: '/content/grupobimbo/publications/8483/img/GBU-prox.png'},
    ],
}


const auditoria = {
    academia: 'Auditorí­a',
    escuelas: [
        {nombre: 'Control Interno', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206510648_1738375156_PDF.pdf'},
        {nombre: 'Auditorí­a Interna', link: '/content/grupobimbo/publications/8483/img/GBU-prox.png'},
    ],
}


const cadenaSuministro = {
    academia: 'Cadena de Suministro',
    escuelas: [
        {nombre: 'Despacho', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206395210_527038134_PDF.pdf'},
        {nombre: 'Ingenierí­a', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206363891_1090012037_PDF.pdf'},
        {nombre: 'Logí­stica', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206371177_166755509_PDF.pdf'},
        {nombre: 'Mantenimiento', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206385126_655816418_PDF.pdf'},
        {nombre: 'Manufactura', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206355827_185532720_PDF.pdf'},
        {nombre: 'Vehículos', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206402809_1822230706_PDF.pdf'},
        {nombre: 'Compras', link: '/clientimg/grupobimbo/MaterialSource/d4ab026c-a59b-406b-a421-b327be772be6_Modelo_de_Competencias_T%C3%A9cnicas___Escuela_de_Compras.pdf'},
    ],
}

const comercial = {
    academia: 'Comercial',
    escuelas: [
        {nombre: 'Mercadotecnia', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022207121706_1248860642_PDF.pdf'},
        {nombre: 'Ventas', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022207131571_899130599_PDF.pdf'},
    ],
}


const bimbo = {
    academia: 'Grupo Bimbo',
    escuelas: [
        {nombre: 'Asuntos Corporativos', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206303085_1889540086_PDF.pdf'},
        {nombre: 'Comunicación', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206232505_1994294119_PDF.pdf'},
        {nombre: 'Sustentabilidad', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206295617_1538944663_PDF.pdf'},
    ],
}


const personas = {
    academia: 'Personas',
    escuelas: [
        {nombre: 'Atracción de Talento', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206312488_1750253177_PDF.pdf'},
        {nombre: 'Compensación', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206331395_929639302_PDF.pdf'},
        {nombre: 'Relaciones Laborales', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206315552_437367467_PDF.pdf'},
        {nombre: 'Seguridad y Bienestar', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206322568_1384860555_PDF.pdf'},
        {nombre: 'Talento y Desarrollo', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206305754_1828412961_PDF.pdf'},
    ],
}

const transformacion = {
    academia: 'Transformación',
    escuelas: [
        {nombre: 'Gestión Corporativa', link: '/clientimg/grupobimbo/MaterialSource/394654_2021022206475967_1966619065_PDF.pdf'},
        {nombre: 'Tecnologí­a de negocios', link: '/content/grupobimbo/publications/8483/img/GBU-prox.png'},
    ],
}