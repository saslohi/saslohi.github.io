function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function nayta_sivu(id, banneri, teksti_cv) {
  let paasivut = document.getElementsByClassName('paasivu');
  
  for (let i = 0; i < paasivut.length; i++) {
    if (paasivut[i].id == id) {
      paasivut[i].style.display = 'block';
    } else {
      paasivut[i].style.display = 'none';
    }
  }

  let ylabanneri = document.getElementsByClassName('ylabanneriSaska')
  ylabanneri[0].className = "ylabanneriSaska " + banneri;

  let tekstiCV = document.getElementsByClassName('teksticvBannerissa')
  tekstiCV[0].className = "teksticvBannerissa " + teksti_cv;
  
  // Tarvitsee timeoutin ja scrollauksen mobiilimoodia varten

  setTimeout(function() {window.scrollTo(0,0);}, 10);
  
}