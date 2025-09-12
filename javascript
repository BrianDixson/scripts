const initAlchemyAnimations = () => {
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
        mainContainer.style.opacity = '1';

        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('stat-item')) {
                        const numberElement = entry.target.querySelector('.stat-number');
                        const target = parseInt(numberElement.getAttribute('data-target'));
                        animateNumber(numberElement, target);
                    }
                }
            });
        }, observerOptions);
        document.querySelectorAll('.service-card, .portfolio-item, .stat-item').forEach(el => { observer.observe(el); });

        function animateNumber(element, target) {
            let current = 0; const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) { current = target; clearInterval(timer); }
                element.textContent = Math.floor(current);
            }, 20);
        }

        document.querySelectorAll('.cta-button, .contact-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const ripple = document.createElement('span'); const rect = button.getBoundingClientRect(); const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2; const y = e.clientY - rect.top - size / 2;
                ripple.style.cssText = `position: absolute; width: ${size}px; height: ${size}px; left: ${x}px; top: ${y}px; background: radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, transparent 70%); border-radius: 50%; transform: scale(0); animation: mysticalRipple 0.8s ease-out; pointer-events: none;`;
                button.style.position = 'relative'; button.style.overflow = 'hidden'; button.appendChild(ripple);
                setTimeout(() => ripple.remove(), 800);
            });
        });

        const style = document.createElement('style');
        style.textContent = `@keyframes mysticalRipple { to { transform: scale(4); opacity: 0; } }`;
        document.head.appendChild(style);

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset; const crystals = document.querySelectorAll('.crystal');
            crystals.forEach((crystal, index) => {
                const speed = 0.3 + (index * 0.1); const rotation = scrolled * 0.1;
                crystal.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
            });
        });

        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e; const { innerWidth, innerHeight } = window; const xPos = (clientX / innerWidth - 0.5) * 30; const yPos = (clientY / innerHeight - 0.5) * 30;
                const overlay = document.querySelector('.mystical-overlay');
                if (overlay) {
                    overlay.style.background = `radial-gradient(circle at ${20 + xPos/2}% ${50 + yPos/2}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), radial-gradient(circle at ${80 - xPos/2}% ${20 - yPos/2}%, rgba(200, 162, 200, 0.15) 0%, transparent 50%), radial-gradient(circle at ${40 + xPos/2}% ${80 + yPos/2}%, rgba(232, 180, 184, 0.15) 0%, transparent 50%)`;
                }
            });
        }

        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.icon-mystical'); icon.style.transform = 'scale(1.2) rotate(360deg)'; icon.style.transition = 'transform 0.6s ease';
                const sparkle = document.createElement('div');
                sparkle.style.cssText = `position: absolute; top: -10px; right: -10px; width: 20px; height: 20px; background: var(--gold); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); animation: sparkle 1s ease-out forwards;`;
                this.style.position = 'relative'; this.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 1000);
            });
            card.addEventListener('mouseleave', function() {
                const icon = this.querySelector('.icon-mystical'); icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `@keyframes sparkle { 0% { transform: scale(0) rotate(0deg); opacity: 1; } 100% { transform: scale(1.5) rotate(180deg); opacity: 0; } }`;
        document.head.appendChild(sparkleStyle);

        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function() {
                const overlay = document.createElement('div');
                overlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 4, 21, 0.9); display: flex; align-items: center; justify-content: center; z-index: 1000; opacity: 0; transition: opacity 0.3s ease;`;
                const modal = document.createElement('div');
                modal.style.cssText = `background: linear-gradient(135deg, var(--deep-purple), var(--midnight)); padding: 3rem; border-radius: 20px; max-width: 500px; text-align: center; transform: scale(0.8); transition: transform 0.3s ease; border: 1px solid var(--gold); box-shadow: 0 0 50px rgba(212, 175, 55, 0.3);`;
                const projectName = this.querySelector('h3').textContent;
                modal.innerHTML = `<div style="font-size: 3rem; color: var(--gold); margin-bottom: 1rem;">✦</div><h2 style="margin-bottom: 1rem; font-family: 'Cormorant Garamond', serif; color: var(--text-primary);">${projectName}</h2><p style="color: var(--text-secondary); margin-bottom: 2rem;">Discover the mystical properties and sacred ingredients of this alchemical creation.</p><button class="close-modal" style="background: linear-gradient(45deg, var(--gold), var(--rose-gold)); color: var(--midnight); border: none; padding: 0.75rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 500;">Close</button>`;
                overlay.appendChild(modal); document.body.appendChild(overlay);
                setTimeout(() => { overlay.style.opacity = '1'; modal.style.transform = 'scale(1)'; }, 10);
                const closeModal = () => { overlay.style.opacity = '0'; modal.style.transform = 'scale(0.8)'; setTimeout(() => overlay.remove(), 300); };
                overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
                modal.querySelector('.close-modal').addEventListener('click', closeModal);
            });
        });

        const mysticalFloatStyle = document.createElement('style');
        mysticalFloatStyle.textContent = `@keyframes mysticalFloat { to { transform: translateY(-100vh) translateX(50px) rotate(360deg); opacity: 0; } }`;
        document.head.appendChild(mysticalFloatStyle);

        function createMysticalParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `position: absolute; width: 3px; height: 3px; background: var(--gold); border-radius: 50%; pointer-events: none; z-index: 1; box-shadow: 0 0 10px var(--gold);`;
            const heroSection = document.querySelector('.hero-section'); if (!heroSection) return;
            particle.style.left = Math.random() * 100 + '%'; particle.style.top = Math.random() * 100 + '%';
            heroSection.appendChild(particle);
            const duration = 8000 + Math.random() * 4000; particle.style.animation = `mysticalFloat ${duration}ms linear forwards`;
            setTimeout(() => particle.remove(), duration);
        }
        setInterval(createMysticalParticle, 1500);

        document.querySelectorAll('.alchemy-symbol, .contact-symbol, .section-symbol').forEach(symbol => {
            setInterval(() => {
                symbol.style.transform = 'rotate(360deg)'; setTimeout(() => { symbol.style.transition = 'transform 1s ease'; symbol.style.transform = 'rotate(0deg)'; }, 1000);
            }, 10000);
        });
    } else {
        setTimeout(initAlchemyAnimations, 50);
    }
};
initAlchemyAnimations();
