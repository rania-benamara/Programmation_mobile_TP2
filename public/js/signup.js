document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nom: name, email, mot_de_pass: password })
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    alert('Sign up successful! Please log in.');
                    window.location.href = '/';
                } else {
                    alert('Sign up failed: ' + data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during sign up');
            }
        });
    }
});
