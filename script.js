document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const submitButton = document.getElementById('submitMessage');
    const messageDisplay = document.getElementById('messageDisplay');

    // Array to store messages
    let messages = [];

    // Function to create a message element
    const createMessageElement = (message) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `
            <p>${message}</p>
            <small>${new Date().toLocaleString()}</small>
        `;
        return messageElement;
    };

    // Function to display messages
    const displayMessages = () => {
        messageDisplay.innerHTML = '';
        messages.forEach(message => {
            messageDisplay.appendChild(createMessageElement(message));
        });
    };

    // Handle message submission
    submitButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        
        if (message) {
            messages.unshift(message); // Add new message to the beginning
            messageInput.value = ''; // Clear input
            displayMessages();
            
            // Add animation
            const newMessage = messageDisplay.firstChild;
            newMessage.style.opacity = '0';
            newMessage.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                newMessage.style.opacity = '1';
                newMessage.style.transform = 'translateY(0)';
            }, 10);
        }
    });

    // Add some sample messages
    const sampleMessages = [
        "Thank you for always being there for me, Dad!",
        "You're the best father anyone could ask for!",
        "Happy Father's Day to all the amazing dads out there!"
    ];

    messages = sampleMessages;
    displayMessages();
}); 