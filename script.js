/* =========================================================
   SRI MANGALAMBIGA CATERING SERVICES
   WEBSITE JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuToggle.innerHTML = "✕";

        } else {

            menuToggle.innerHTML = "☰";

        }

    });


    /* Close menu when clicking a link */

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.innerHTML = "☰";

            });

        });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .service-premium-card, .gallery-item, .gallery-premium-item, .why-card, .why-premium-card, .about-content, .about-copy, .about-image, .about-photo, .contact-form-box, .contact-premium-form, .menu-premium-card, .feature-card"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= ENQUIRY FORM ================= */

const enquiryForm =
    document.getElementById("enquiryForm");


if (enquiryForm) {

    enquiryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get values */

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const eventType =
                document.getElementById("event").value;

            const guests =
                document.getElementById("guests").value;

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;

            const message =
                document.getElementById("message").value.trim();


            /* Basic validation */

            if (!name ||
                !phone ||
                !eventType ||
                !guests ||
                !date) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            /* Phone validation */

            if (!/^[0-9]{10}$/.test(phone)) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );

                return;

            }


            /* WhatsApp message */

            let whatsappMessage =

                "Hello Sri Mangalambiga Catering Services,%0A%0A" +

                "*New Catering Enquiry*%0A%0A" +

                "*Name:* " +
                encodeURIComponent(name) +

                "%0A" +

                "*Phone:* " +
                encodeURIComponent(phone) +

                "%0A" +

                "*Event:* " +
                encodeURIComponent(eventType) +

                "%0A" +

                "*Guests:* " +
                encodeURIComponent(guests) +

                "%0A" +

                "*Event Date:* " +
                encodeURIComponent(date) +

                "%0A" +

                "*Event Time:* " +
                encodeURIComponent(time || "Not specified") +

                "%0A";


            if (message) {

                whatsappMessage +=

                    "%0A*Additional Requirements:*%0A" +

                    encodeURIComponent(message);

            }


            /* WhatsApp number */

            const whatsappNumber =
                "919841015297";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank"
            );


            /* Reset form */

            enquiryForm.reset();

        });

}


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.querySelector(".footer-year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}