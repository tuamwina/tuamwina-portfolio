console.log("JavaScript is connected!"); 
const toggleButton = document.getElementById('theme-toggle'); 

 

toggleButton.addEventListener('click', function() { 

    document.body.classList.toggle('dark-mode'); 

    if (document.body.classList.contains('dark-mode')) { 

        toggleButton.textContent = 'Light Mode'; 

    } else { 

        toggleButton.textContent = 'Dark Mode'; 

    } 

    console.log("Dark mode toggled!"); 

}); 

const texts = [ 

    "Hi, I'm Tuamwina!", 

    "I'm a Business Intelligence and Data Analytics student", 

    "Future Data Scientist", 

    "passionate About Technology",

    "Welcome to My Portfolio!" 

]; 

 

let textIndex = 0; 

let charIndex = 0; 

let isDeleting = false; 

const typingElement = document.getElementById('typing-headline'); 

 

function typeEffect() { 

    const currentText = texts[textIndex]; 

    if (isDeleting) { 

        typingElement.textContent = currentText.substring(0, charIndex - 1); 

        charIndex--; 

    } else { 

        typingElement.textContent = currentText.substring(0, charIndex + 1); 

        charIndex++; 

    } 

    if (!isDeleting && charIndex === currentText.length) { 

        isDeleting = true; 

        setTimeout(typeEffect, 2000); 

        return; 

    } 

    if (isDeleting && charIndex === 0) { 

        isDeleting = false; 

        textIndex = (textIndex + 1) % texts.length; 

    } 

    const speed = isDeleting ? 50 : 100; 

    setTimeout(typeEffect, speed); 

} 



typeEffect(); 

const backToTopButton = document.getElementById('back-to-top'); 

 window.addEventListener('scroll', function() {

    if (window.scrollY > 100) { 

        backToTopButton.style.display = 'block'; 

    } else { 

        backToTopButton.style.display = 'none'; 

    } 

}); 

 

backToTopButton.addEventListener('click', function() { 

    window.scrollTo({ top: 0, behavior: 'smooth' }); 

}); 