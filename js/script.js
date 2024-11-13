//INICIO DEL CAROUSEL 
// Selecciona el botón
const infoButton = document.getElementById('infoButton');

infoButton.textContent = 'Escolares';
infoButton.href = '/html/escolares.html'; // Cambia la URL

// Selecciona los inputs del slide
const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');
const slide3 = document.getElementById('slide-3');
const slide4 = document.getElementById('slide-4');
const slide5 = document.getElementById('slide-5');
const slide6 = document.getElementById('slide-6');
const slide7 = document.getElementById('slide-7');

// Añade event listeners a cada slide para cambiar el texto y el href del botón
slide1.addEventListener('change', function () {
    if (slide1.checked) {
        infoButton.textContent = 'Escolares';
        infoButton.href = '/html/escolares.html'; // Cambia la URL
    }
});

slide2.addEventListener('change', function () {
    if (slide2.checked) {
        infoButton.textContent = 'Navidad';
        infoButton.href = '/html/navidad.html'; // Cambia la URL
    }
});

slide3.addEventListener('change', function () {
    if (slide3.checked) {
        infoButton.textContent = 'Septiembre';
        infoButton.href = '/html/septiembre.html'; // Cambia la URL
    }
});

slide4.addEventListener('change', function () {
    if (slide4.checked) {
        infoButton.textContent = 'Noviembre';
        infoButton.href = '/html/noviembre.html'; // Cambia la URL
    }
});

slide5.addEventListener('change', function () {
    if (slide5.checked) {
        infoButton.textContent = 'Halloween';
        infoButton.href = '/html/halloween.html'; // Cambia la URL
    }
});

slide6.addEventListener('change', function () {
    if (slide6.checked) {
        infoButton.textContent = 'Enero';
        infoButton.href = '/html/enero.html'; // Cambia la URL
    }
});

slide7.addEventListener('change', function () {
    if (slide7.checked) {
        infoButton.textContent = 'Febrero';
        infoButton.href = '/html/febrero.html'; // Cambia la URL
    }
});
//FIN DEL CAROUSEL

//INICIO DEL MENU
// Obtener la URL actual
const currentUrl = window.location.pathname;

// Obtener todos los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Recorrer cada elemento del menú
menuItems.forEach(item => {
    // Comparar el href del enlace con la URL actual
    if (item.getAttribute('href') === currentUrl) {
        item.classList.add('active');  // Agregar la clase "active"
    }
});


// Boton de ver mas en la pag de servicios

function toggleImages() {
    // Selecciona todas las filas con la clase "hidden"
    const hiddenRows = document.querySelectorAll('.image-row.hidden');
    const button = document.querySelector('.see-more button');

    // Verifica si las filas están ocultas
    if (hiddenRows[0].style.display === 'none' || !hiddenRows[0].style.display) {
        // Muestra las filas ocultas
        hiddenRows.forEach(row => row.style.display = 'flex');
        button.textContent = 'Ver menos'; // Cambia el texto del botón
    } else {
        // Oculta las filas nuevamente
        hiddenRows.forEach(row => row.style.display = 'none');
        button.textContent = 'Ver más'; // Cambia el texto del botón
    }
}


// opaca las imagenes en la misma pagina de las imagenes de servicios

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las imágenes dentro de la galería
    const images = document.querySelectorAll('.image-gallery img');

    images.forEach(img => {
        img.addEventListener('click', function () {
            // Primero, elimina las clases 'clicked' y 'dimmed' de todas las imágenes
            images.forEach(image => {
                image.classList.remove('clicked');
                image.classList.add('dimmed');
            });

            // Agrega la clase 'clicked' solo a la imagen que fue clickeada
            this.classList.add('clicked');
            this.classList.remove('dimmed');
        });
    });

    // Si haces clic fuera de cualquier imagen, quita el efecto
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.image-gallery img')) {
            images.forEach(image => {
                image.classList.remove('clicked', 'dimmed');
            });
        }
    });
});
