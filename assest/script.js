 document.addEventListener('DOMContentLoaded', function() {
            // Theme toggle functionality
            const themeToggle = document.getElementById('themeToggle');
            const themeIcon = document.getElementById('themeIcon');
            const html = document.documentElement;
            
            // Check for saved theme preference or use system preference
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                html.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
            
            themeToggle.addEventListener('click', () => {
                if (html.getAttribute('data-theme') === 'dark') {
                    html.setAttribute('data-theme', 'light');
                    themeIcon.classList.replace('fa-sun', 'fa-moon');
                    localStorage.setItem('theme', 'light');
                } else {
                    html.setAttribute('data-theme', 'dark');
                    themeIcon.classList.replace('fa-moon', 'fa-sun');
                    localStorage.setItem('theme', 'dark');
                }
            });

            // Form section toggling
            const showRegisterBtn = document.getElementById('show-register');
            const showLoginBtn = document.getElementById('show-login');
            const forgotPasswordBtn = document.getElementById('forgot-password');
            const backToLoginBtn = document.getElementById('back-to-login');
            
            const loginSection = document.getElementById('login-section');
            const registerSection = document.getElementById('register-section');
            const forgotSection = document.getElementById('forgot-section');
            
            const loginFooter = document.getElementById('login-footer');
            const registerFooter = document.getElementById('register-footer');

            function showSection(section) {
                // Hide all sections
                document.querySelectorAll('.form-section').forEach(el => {
                    el.classList.remove('active');
                });
                
                // Show the selected section
                section.classList.add('active');
                
                // Handle footer visibility
                if (section === loginSection) {
                    loginFooter.classList.add('active');
                    registerFooter.classList.remove('active');
                } else if (section === registerSection) {
                    loginFooter.classList.remove('active');
                    registerFooter.classList.add('active');
                } else {
                    loginFooter.classList.remove('active');
                    registerFooter.classList.remove('active');
                }
            }

            showRegisterBtn.addEventListener('click', () => showSection(registerSection));
            showLoginBtn.addEventListener('click', () => showSection(loginSection));
            forgotPasswordBtn.addEventListener('click', () => showSection(forgotSection));
            backToLoginBtn.addEventListener('click', () => showSection(loginSection));

            // OTP input auto-focus
            const otpInputs = document.querySelectorAll('.otp-input');
            otpInputs.forEach((input, index) => {
                input.addEventListener('input', function() {
                    if (this.value.length === 1 && index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                });

                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                        otpInputs[index - 1].focus();
                    }
                });
            });

            // Form validation
            document.getElementById('login-btn').addEventListener('click', function() {
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                if (!email || !password) {
                    alert('Please enter both email and password');
                    return;
                }
                
                // Simulate login
                console.log('Login attempt with:', email);
                alert('Login functionality would be implemented here');
            });

            document.getElementById('register-btn').addEventListener('click', function() {
                const fullName = document.getElementById('full-name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                
                if (!fullName || !email || !password || !confirmPassword) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }
                
                // Simulate registration
                console.log('Registration attempt for:', fullName, email);
                alert('Account creation would be processed here');
            });

            document.getElementById('send-reset-link').addEventListener('click', function() {
                const email = document.getElementById('forgot-email').value;
                
                if (!email) {
                    alert('Please enter your email address');
                    return;
                }
                
                // Simulate password reset
                console.log('Password reset requested for:', email);
                alert('Password reset link would be sent to: ' + email);
            });
        });