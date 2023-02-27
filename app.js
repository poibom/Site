
$('#zoom_01').ezPlus({
  scrollZoom: true,
  zoomType: 'lens',
    lensShape: 'round',
    lensSize: 300
});



$('#zoom_02').ezPlus({
  scrollZoom: true,
  zoomType: 'lens',
    lensShape: 'round',
    lensSize: 300
});

$('#zoom_08').ezPlus({
 
  
    lensSize: 100
});
 


// Criar botão subir/descer
var scrollTopBtn = document.createElement("div");
scrollTopBtn.classList.add("scroll-top-btn");
scrollTopBtn.innerHTML = "&uarr;";
document.body.appendChild(scrollTopBtn);

// Exibir ou ocultar o botão
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.classList.add("show-scroll-top-btn");
  } else {
    scrollTopBtn.classList.remove("show-scroll-top-btn");
  }
};

// Função de rolagem para o topo ou para o final da página
scrollTopBtn.onclick = function() {
  if (document.body.scrollTop > document.documentElement.scrollTop) {
    document.body.scrollIntoView({behavior: "smooth", block: "start"});
  } else {
    document.documentElement.scrollIntoView({behavior: "smooth", block: "end"});
  }
};
