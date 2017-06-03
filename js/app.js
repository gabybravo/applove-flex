(function modalImages(){
 	var proyImagenes = Array.from(document.getElementsByClassName("img-work"));
 	var modal = document.getElementById("img-work-modal");

 	var cuerpoModal, equis, icono;


 	proyImagenes.forEach(function(c){
 		c.addEventListener("click",function(){
 			modal.innerHTML="";
 			cuerpoModal = document.createElement("div");
 			cuerpoModal.classList.add("modal-completo");

 			cuerpoModal.innerHTML = c.innerHTML;

 			modal.appendChild(cuerpoModal);
 			modal.classList.remove("hide");

 			texto = Array.from(document.getElementsByClassName("n-producto"));
 			texto.forEach(function(b){
 				b.classList.add("hide");
 			}); 			
			
 			equis = document.createElement("div"); 
 			equis.classList.add("equis-img");
 			icono = document.createElement("i");
 			icono.setAttribute("class","fa fa-times");
 			icono.setAttribute("aria-hidden","true");

 			equis.appendChild(icono);
 			modal.appendChild(equis);

 			equis.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		});
		
 	});
 })();



