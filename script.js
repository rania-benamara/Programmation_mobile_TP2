document.addEventListener('DOMContentLoaded',function() {
   const ajouter_bouton = document.getElementById('ajouter_bouton');
   const ajouter_formulaire = document.getElementById('ajouter_formulaire');
   const message = document.getElementById('message');
   const ajouter_form_btn = document.getElementById('ajouter_form_btn');
   const btn_retour = document.getElementById('btn_retour');
   const modifier_bouton = document.getElementById('modifier_bouton');
   const modifier = document.getElementById('modifier');
   const chercher_bouton = document.getElementById('chercher_bouton');
   const annuler_bouton = document.getElementById('annuler_bouton');
   const supprimer_bouton = document.getElementById('supprimer_bouton');
   
   ajouter_bouton.addEventListener('click', function(){
      ajouter_formulaire.style.display= 'block';
      message.style.display= 'none';
   });
   
   ajouter_form_btn.addEventListener('click', function(){
    ajouter_formulaire.style.display= 'none';
    message.style.display= 'block';
  });

  btn_retour.addEventListener('click', function(){
    ajouter_formulaire.style.display= 'none';
    message.style.display= 'none';
  });

  modifier_bouton.addEventListener('click', function(){
    modifier.style.display = 'block';
    ajouter_formulaire.style.display= 'none';
    message.style.display= 'none';
 });

  annuler_bouton.addEventListener('click', function(){
  modifier.style.display = 'none';
  ajouter_formulaire.style.display= 'none';
  message.style.display= 'none';
});
  
  supprimer_bouton.addEventListener('click', function(){
  modifier.style.display = 'block';
  ajouter_formulaire.style.display= 'none';
  message.style.display= 'none';
});

});