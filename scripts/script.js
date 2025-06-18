function cerrarVentana(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'none';
    setTimeout(() => {
      el.style.display = 'block';
    }, 5000);
  }
}
  const btnVolverArriba = document.getElementById('btnVolverArriba');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnVolverArriba.classList.add('mostrar');
    } else {
      btnVolverArriba.classList.remove('mostrar');
    }
  });

  btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
