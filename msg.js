document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state management
    const navItems = document.querySelectorAll('.main-nav li');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Simulate user logout after 30 minutes of inactivity
    let inactivityTimer;
    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            alert('You will be logged out due to inactivity');
            // window.location.href = 'logout.html';
        }, 1800000); // 30 minutes
    };

    // Reset timer on any user activity
    window.onload = resetInactivityTimer;
    window.onmousemove = resetInactivityTimer;
    window.onmousedown = resetInactivityTimer;
    window.ontouchstart = resetInactivityTimer;
    window.onclick = resetInactivityTimer;
    window.onkeypress = resetInactivityTimer;

    // Welcome message animation
    const welcomeMessage = document.querySelector('.welcome-message');
    setTimeout(() => {
        welcomeMessage.style.opacity = '1';
        welcomeMessage.style.transform = 'translateY(0)';
    }, 300);

    // Responsive menu toggle (for mobile)
    function setupMobileMenu() {
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            const menuToggle = document.createElement('div');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            document.querySelector('.top-bar').prepend(menuToggle);

            menuToggle.addEventListener('click', function() {
                sidebar.classList.toggle('mobile-open');
            });
        }
    }

    setupMobileMenu();
    window.addEventListener('resize', setupMobileMenu);
});