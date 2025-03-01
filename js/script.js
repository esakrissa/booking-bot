// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Chat Demo Functionality
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.send-btn');
const chatMessages = document.querySelector('.chat-messages');

// Sample responses for the chat demo
const demoResponses = [
    "I'd be happy to help you find the perfect accommodation in Bali! Could you tell me your preferred area, budget, and travel dates?",
    "Ubud is a fantastic choice! It's known for its cultural experiences, rice terraces, and wellness retreats. Would you prefer a resort, villa, or boutique hotel?",
    "Based on your preferences, I recommend checking out these top-rated options in Seminyak with availability for your dates. All of these have excellent beach access and are highly rated by travelers.",
    "Nusa Penida is a beautiful island with stunning beaches and natural attractions. The best way to get there is by taking a fast boat from Sanur. Would you like me to recommend some boat services?",
    "For a family-friendly beach in Bali, I'd recommend Nusa Dua or Jimbaran. Both have calm waters and plenty of facilities. Nusa Dua has more resort options while Jimbaran offers a more local experience with seafood restaurants on the beach."
];

// Add chat functionality
if (sendButton && chatInput) {
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message !== '') {
        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate bot thinking
        setTimeout(() => {
            // Get random response from demo responses
            const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
            addMessage(randomResponse, 'bot');
            
            // Scroll to bottom of chat
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    
    const paragraph = document.createElement('p');
    paragraph.textContent = message;
    
    messageElement.appendChild(paragraph);
    chatMessages.appendChild(messageElement);
    
    // Scroll to bottom of chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Sticky Header on Scroll
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Initialize AOS (Animate on Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// Form Submission (prevent default for demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to your server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message (in a real app)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
} 