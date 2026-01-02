

//Useful details Auto close

// Select all buttons inside details
document.querySelectorAll('.useful-link-get-start-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // stop instant navigation
    const parentDetails = this.closest('details');
    if (parentDetails) {
      parentDetails.removeAttribute('open'); // auto-close
    }
    // Redirect after short delay
    setTimeout(() => {
      window.location.href = this.parentElement.href;
    }, 300);
  });
});

//Useful details Auto close ends




//Support Us sections
    
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.support-btn');
    const message = document.getElementById('copy-message');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const number = btn.dataset.number;
            if (!number) return;

            // Use navigator.clipboard if available
            if (navigator.clipboard) {
                navigator.clipboard.writeText(number).then(() => {
                    showMessage(number);
                }).catch(() => fallbackCopy(number));
            } else {
                fallbackCopy(number);
            }
        });
    });

    function fallbackCopy(number) {
        const textarea = document.createElement('textarea');
        textarea.value = number;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showMessage(number);
        } catch {
            alert('Unable to copy. Please copy manually: ' + number);
        }
        document.body.removeChild(textarea);
    }

    function showMessage(number) {
        message.textContent = number + " copied to clipboard!";
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
        setTimeout(() => {
            message.style.opacity = "0";
            message.style.transform = "translateY(-10px)";
        }, 2000);
    }
});


//Support Us sections ends


//WhatsApp send message



document.getElementById('send-whatsapp').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const text = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    // WhatsApp number with country code (Kenya: +254)
    const phone = '254780493390';

    // Open WhatsApp link in new tab
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});




//WhatsApp send message ends here 