// Standard browser-compatible JavaScript for Google Chrome with Theme Support
;(() => {
  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn()
    } else {
      document.addEventListener("DOMContentLoaded", fn)
    }
  }

  // Theme Management
  function initTheme() {
    // Get saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem("portfolio-theme") || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
    updateThemeIcon(savedTheme)
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("portfolio-theme", newTheme)
    updateThemeIcon(newTheme)
  }

  function updateThemeIcon(theme) {
    const themeToggle = document.querySelector(".theme-toggle")
    if (themeToggle) {
      const icon = themeToggle.querySelector("i")
      if (icon) {
        if (theme === "dark") {
          icon.className = "fas fa-sun"
          themeToggle.setAttribute("aria-label", "Switch to light mode")
        } else {
          icon.className = "fas fa-moon"
          themeToggle.setAttribute("aria-label", "Switch to dark mode")
        }
      }
    }
  }

  // Declare Typed variable if it's not available
  const Typed = window.Typed

  ready(() => {
    // Initialize theme
    initTheme()

    // Current year for copyright
    const currentYearElement = document.getElementById("currentYear")
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear()
    }

    // Theme toggle functionality
    const themeToggle = document.querySelector(".theme-toggle")
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme)
    }

    // Typed.js for rotating text (only if Typed is available)
    if (typeof Typed !== "undefined") {
      const textRotateElement = document.querySelector(".text-rotate")
      if (textRotateElement) {
        new Typed(".text-rotate", {
          strings: [
            "I build amazing web experiences.",
            "I create beautiful user interfaces.",
            "I develop modern applications.",
            "I bring ideas to life.",
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          startDelay: 1000,
          loop: true,
        })
      }
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()

        const icon = this.querySelector("i")
        const isActive = navLinks.classList.contains("active")

        if (isActive) {
          // Close menu
          navLinks.classList.remove("active")
          this.setAttribute("aria-expanded", "false")
          if (icon) {
            icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
          }
          document.body.classList.remove("menu-open")
        } else {
          // Open menu
          navLinks.classList.add("active")
          this.setAttribute("aria-expanded", "true")
          if (icon) {
            icon.classList.remove("fa-bars")
            icon.classList.add("fa-times")
          }
          document.body.classList.add("menu-open")
        }
      })
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar")) {
        if (navLinks) {
          navLinks.classList.remove("active")
        }
        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", "false")
          const icon = menuToggle.querySelector("i")
          if (icon) {
            icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
          }
        }
        document.body.classList.remove("menu-open")
      }
    })

    // Close mobile menu when clicking on nav links
    const navLinkElements = document.querySelectorAll(".nav-links a")
    navLinkElements.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks) {
          navLinks.classList.remove("active")
        }
        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", "false")
          const icon = menuToggle.querySelector("i")
          if (icon) {
            icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
          }
        }
        document.body.classList.remove("menu-open")
      })
    })

    // Smooth scrolling for navigation links
    const hashLinks = document.querySelectorAll('a[href^="#"]')
    hashLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()

        const target = this.getAttribute("href")
        const targetElement = document.querySelector(target)

        if (targetElement) {
          // Update aria-current for navigation
          const allNavLinks = document.querySelectorAll(".nav-links a")
          allNavLinks.forEach((navLink) => {
            navLink.classList.remove("active")
            navLink.removeAttribute("aria-current")
          })

          const currentNavLink = document.querySelector('.nav-links a[href="' + target + '"]')
          if (currentNavLink) {
            currentNavLink.classList.add("active")
            currentNavLink.setAttribute("aria-current", "page")
          }

          // Smooth scroll
          const targetPosition = targetElement.offsetTop - 70
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })

    // Active navigation based on scroll position
    function updateActiveNavigation() {
      const scrollPosition = window.pageYOffset + 100
      const sections = document.querySelectorAll("section")

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const allNavLinks = document.querySelectorAll(".nav-links a")
          allNavLinks.forEach((navLink) => {
            navLink.classList.remove("active")
            navLink.removeAttribute("aria-current")
          })

          const activeNavLink = document.querySelector('.nav-links a[href="#' + sectionId + '"]')
          if (activeNavLink) {
            activeNavLink.classList.add("active")
            activeNavLink.setAttribute("aria-current", "page")
          }
        }
      })

      // Navbar background change on scroll
      const navbar = document.querySelector(".navbar")
      if (navbar) {
        if (scrollPosition > 100) {
          navbar.style.boxShadow = "var(--navbar-shadow)"
        } else {
          navbar.style.boxShadow = "var(--navbar-shadow)"
        }
      }
    }

    // Scroll animations
    function isElementInViewport(element, offset) {
      if (!element) return false

      offset = offset || 100
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      return rect.top <= windowHeight - offset && rect.bottom >= 0
    }

    function animateOnScroll() {
      // Elements to animate
      const elementsToAnimate = [
        ".section-header",
        ".about-content .about-image",
        ".about-content .about-text",
        ".timeline-item",
        ".cert-card",
        ".project-card",
        ".skill-card",
        ".contact-info",
        ".contact-form",
      ]

      elementsToAnimate.forEach((selector) => {
        const elements = document.querySelectorAll(selector)
        elements.forEach((element, index) => {
          if (isElementInViewport(element, 150)) {
            // Add a small delay for staggered effect
            setTimeout(() => {
              element.classList.add("animate")
            }, index * 100)
          }
        })
      })

      // Special handling for grids
      const projectCards = document.querySelectorAll(".projects-grid .project-card")
      projectCards.forEach((card, index) => {
        if (isElementInViewport(card, 150)) {
          setTimeout(() => {
            card.classList.add("animate")
          }, index * 150)
        }
      })

      const skillCards = document.querySelectorAll(".skills-grid .skill-card")
      skillCards.forEach((card, index) => {
        if (isElementInViewport(card, 150)) {
          setTimeout(() => {
            card.classList.add("animate")
          }, index * 100)
        }
      })

      const certCards = document.querySelectorAll(".cert-container .cert-card")
      certCards.forEach((card, index) => {
        if (isElementInViewport(card, 150)) {
          setTimeout(() => {
            card.classList.add("animate")
          }, index * 200)
        }
      })
    }

    // Throttled scroll event
    let scrollTimeout
    function handleScroll() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      scrollTimeout = setTimeout(() => {
        updateActiveNavigation()
        animateOnScroll()
      }, 10)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Run animation check on page load
    setTimeout(() => {
      animateOnScroll()
    }, 100)

    // Run animation check when page is fully loaded
    window.addEventListener("load", () => {
      setTimeout(() => {
        animateOnScroll()
      }, 200)
    })

    // Form submission with validation
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()

        // Get form values
        const nameInput = document.getElementById("name")
        const emailInput = document.getElementById("email")
        const messageInput = document.getElementById("message")

        const name = nameInput ? nameInput.value : ""
        const email = emailInput ? emailInput.value : ""
        const message = messageInput ? messageInput.value : ""

        // Basic validation
        let isValid = true
        let errorMessage = ""

        if (!name.trim()) {
          isValid = false
          errorMessage += "Name is required. "
          if (nameInput) {
            nameInput.setAttribute("aria-invalid", "true")
            nameInput.focus()
          }
        } else {
          if (nameInput) {
            nameInput.setAttribute("aria-invalid", "false")
          }
        }

        if (!email.trim() || !email.includes("@")) {
          isValid = false
          errorMessage += "Valid email is required. "
          if (emailInput) {
            emailInput.setAttribute("aria-invalid", "true")
            if (isValid) emailInput.focus()
          }
        } else {
          if (emailInput) {
            emailInput.setAttribute("aria-invalid", "false")
          }
        }

        if (!message.trim()) {
          isValid = false
          errorMessage += "Message is required."
          if (messageInput) {
            messageInput.setAttribute("aria-invalid", "true")
            if (isValid) messageInput.focus()
          }
        } else {
          if (messageInput) {
            messageInput.setAttribute("aria-invalid", "false")
          }
        }

        // If valid, submit the form
        if (isValid) {
          alert("Thanks for your message, " + name + "! I'll get back to you soon.")
          contactForm.reset()
          if (nameInput) nameInput.setAttribute("aria-invalid", "false")
          if (emailInput) emailInput.setAttribute("aria-invalid", "false")
          if (messageInput) messageInput.setAttribute("aria-invalid", "false")
        } else {
          alert("Please correct the following errors: " + errorMessage)
        }
      })
    }

    // Initialize animations on load
    updateActiveNavigation()
  })
})()
