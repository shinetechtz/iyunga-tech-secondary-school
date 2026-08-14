/* ==========================================
   IYUNGA TECHNICAL SECONDARY SCHOOL - SCRIPT
   Day 4: JavaScript Interactions & Animations
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC WELCOME ALERT / GREETING ON HOME PAGE
    const heroText = document.querySelector(".hero-text h2");
    if (heroText) {
        const currentHour = new Date().getHours();
        let greeting = "Karibu Iyunga Technical!";
        
        if (currentHour < 12) {
            greeting = "Habari ya Asubuhi! Karibu Iyunga Technical";
        } else if (currentHour < 17) {
            greeting = "Habari ya Mchana! Karibu Iyunga Technical";
        } else {
            greeting = "Habari ya Jioni! Karibu Iyunga Technical";
        }
        
        console.log(`[ITSS System]: ${greeting}`);
    }

    // 2. CONTACT FORM VALIDATION & INTERACTION
    const contactForm = document.querySelector("form");
    if (contactForm) {
        const submitBtn = contactForm.querySelector(".btn-submit");
        
        if (submitBtn) {
            submitBtn.addEventListener("click", (e) => {
                e.preventDefault();
                
                const nameInput = contactForm.querySelector("input[type='text']").value.trim();
                const emailInput = contactForm.querySelectorAll("input[type='text']")[1].value.trim();
                const messageInput = contactForm.querySelector("textarea").value.trim();

                if (!nameInput || !emailInput || !messageInput) {
                    alert("Tafadhali jaza nafasi zote kabla ya kutuma ujumbe!");
                    return;
                }

                // Smooth Feedback Animation
                submitBtn.innerText = "Inatuma...";
                submitBtn.style.backgroundColor = "#d97706";
                
                setTimeout(() => {
                    alert(`Aksante ${nameInput}, ujumbe wako umepokelewa kikamilifu! Tutawasiliana nawe hivi karibuni.`);
                    contactForm.reset();
                    submitBtn.innerText = "SEND MESSAGE";
                    submitBtn.style.backgroundColor = "";
                }, 1200);
            });
        }
    }

    // 3. GALLERY IMAGE LIGHTBOX / ZOOM ANIMATION
    const galleryImages = document.querySelectorAll(".gallery-card img");
    galleryImages.forEach(img => {
        img.style.cursor = "pointer";
        img.style.transition = "transform 0.3s ease";

        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.05)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });

        img.addEventListener("click", () => {
            alert(`Picha: ${img.alt}\nIyunga Technical Secondary School Campus.`);
        });
    });

    // 4. BUTTON CLICK ANIMATION EFFECT
    const buttons = document.querySelectorAll(".btn-primary, .btn-outline, .portal-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            btn.style.transform = "scale(0.95)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);
        });
    });

});