document.addEventListener('DOMContentLoaded', function() {

  
    // Function to check if we're on the home page
    function isHomePage() {
        return window.location.pathname === '/home' || window.location.pathname === '/home.html';
    }

    // Only run this code if we're on the home page
    if (isHomePage()) {
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
   
        if (ajouter_bouton) {
   ajouter_bouton.addEventListener('click', function(){
                ajouter_formulaire.style.display = 'block';
                message.style.display = 'none';
      modifier.style.display = 'none';
   });
        }
   
        if (ajouter_form_btn) {
   ajouter_form_btn.addEventListener('click', function(){
                ajouter_formulaire.style.display = 'none';
                message.style.display = 'block';
  });
        }

        if (btn_retour) {
  btn_retour.addEventListener('click', function(){
                ajouter_formulaire.style.display = 'none';
                message.style.display = 'none';
  });
        }

        if (modifier_bouton) {
  modifier_bouton.addEventListener('click', function(){
    modifier.style.display = 'block';
                ajouter_formulaire.style.display = 'none';
                message.style.display = 'none';
 });
        }

        if (annuler_bouton) {
  annuler_bouton.addEventListener('click', function(){
  modifier.style.display = 'none';
                ajouter_formulaire.style.display = 'none';
                message.style.display = 'none';
});
        }
  
        if (supprimer_bouton) {
  supprimer_bouton.addEventListener('click', function(){
  modifier.style.display = 'block';
                ajouter_formulaire.style.display = 'none';
                message.style.display = 'none';
});
}

        fetchContacts();
    }

    function getAuthHeader() {
        const token = localStorage.getItem('token');
        return { 'Authorization': token };
    }

    async function fetchContacts() {
  try {
    const response = await fetch('/contacts', {
      headers: getAuthHeader()
    });
    if (response.ok) {
      const contacts = await response.json();
      // Update UI with contacts
    } else {
      console.error('Failed to fetch contacts');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
});
