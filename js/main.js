// Standard browser-compatible JavaScript
const $ = window.$ // Declare the $ variable
const Typed = window.Typed // Declare the Typed variable

$(document).ready(() => {
  // Current year for copyright
  $("#currentYear").text(new Date().getFullYear())

  // Typed.js for rotating text (only if Typed is available)
  if (typeof Typed !== "undefined") {
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

  // Mobile menu toggle - FIXED VERSION
  $(".menu-toggle").on("click", function (e) {
    e.preventDefault()
    e.stopPropagation()

    console.log("Menu button clicked!") // Debug log

    const $navLinks = $(".nav-links")
    const $icon = $(this).find("i")
    const isActive = $navLinks.hasClass("active")

    if (isActive) {
      // Close menu
      $navLinks.removeClass("active")
      $(this).attr("aria-expanded", "false")
      $icon.removeClass("fa-times").addClass("fa-bars")
      $("body").removeClass("menu-open")
    } else {
      // Open menu
      $navLinks.addClass("active")
      $(this).attr("aria-expanded", "true")
      $icon.removeClass("fa-bars").addClass("fa-times")
      $("body").addClass("menu-open")
    }
  })

  // Close mobile menu when clicking outside
  $(document).on("click", (e) => {
    if (!$(e.target).closest(".navbar").length) {
      $(".nav-links").removeClass("active")
      $(".menu-toggle").attr("aria-expanded", "false")
      $(".menu-toggle i").removeClass("fa-times").addClass("fa-bars")
      $("body").removeClass("menu-open")
    }
  })

  // Close mobile menu when clicking on nav links
  $(".nav-links a").on("click", () => {
    $(".nav-links").removeClass("active")
    $(".menu-toggle").attr("aria-expanded", "false")
    $(".menu-toggle i").removeClass("fa-times").addClass("fa-bars")
    $("body").removeClass("menu-open")
  })

  // Smooth scrolling for navigation links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault()

    var target = this.hash
    var $target = $(target)

    if ($target.length) {
      // Update aria-current for navigation
      $(".nav-links a").removeClass("active").removeAttr("aria-current")
      $('.nav-links a[href="' + target + '"]')
        .addClass("active")
        .attr("aria-current", "page")

      $("html, body").animate(
        {
          scrollTop: $target.offset().top - 70,
        },
        800,
        "swing",
      )
    }
  })

  // Active navigation based on scroll position
  $(window).on("scroll", function () {
    var scrollPosition = $(this).scrollTop() + 100

    // Highlight active nav item
    $("section").each(function () {
      var sectionTop = $(this).offset().top
      var sectionHeight = $(this).outerHeight()
      var sectionId = $(this).attr("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        $(".nav-links a").removeClass("active").removeAttr("aria-current")
        $('.nav-links a[href="#' + sectionId + '"]')
          .addClass("active")
          .attr("aria-current", "page")
      }
    })

    // Navbar background change on scroll
    if (scrollPosition > 100) {
      $(".navbar").css("background-color", "rgba(255, 255, 255, 0.95)")
      $(".navbar").css("box-shadow", "0 2px 10px rgba(0, 0, 0, 0.1)")
    } else {
      $(".navbar").css("background-color", "rgba(255, 255, 255, 0.95)")
      $(".navbar").css("box-shadow", "none")
    }
  })

  // ========================================
  // FIXED SCROLL ANIMATIONS - BOTTOM TO TOP
  // ========================================

  function isElementInViewport(element, offset = 100) {
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
      $(selector).each(function (index) {
        

        if (isElementInViewport(this, 150)) {
          // Add a small delay for staggered effect
          setTimeout(() => {
            $(this).addClass("animate")
          }, index * 100) // 100ms delay between each element
        }
      })
    })

    // Special handling for grids (projects, skills, certs)
    $(".projects-grid .project-card").each(function (index) {
      if (isElementInViewport(this, 150)) {
        setTimeout(() => {
          $(this).addClass("animate")
        }, index * 150)
      }
    })

    $(".skills-grid .skill-card").each(function (index) {
      if (isElementInViewport(this, 150)) {
        setTimeout(() => {
          $(this).addClass("animate")
        }, index * 100)
      }
    })

    $(".cert-container .cert-card").each(function (index) {
      if (isElementInViewport(this, 150)) {
        setTimeout(() => {
          $(this).addClass("animate")
        }, index * 200)
      }
    })
  }

  // Throttled scroll event for better performance
  let scrollTimeout
  $(window).on("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    scrollTimeout = setTimeout(() => {
      animateOnScroll()
    }, 10)
  })

  // Run animation check on page load
  setTimeout(() => {
    animateOnScroll()
  }, 100)

  // Run animation check when page is fully loaded
  $(window).on("load", () => {
    setTimeout(() => {
      animateOnScroll()
    }, 200)
  })

  // Form submission with validation
  $("#contactForm").submit(function (e) {
    e.preventDefault()

    // Get form values
    var name = $("#name").val()
    var email = $("#email").val()
    var message = $("#message").val()

    // Basic validation
    var isValid = true
    var errorMessage = ""

    if (!name.trim()) {
      isValid = false
      errorMessage += "Name is required. "
      $("#name").attr("aria-invalid", "true").focus()
    } else {
      $("#name").attr("aria-invalid", "false")
    }

    if (!email.trim() || !email.includes("@")) {
      isValid = false
      errorMessage += "Valid email is required. "
      $("#email").attr("aria-invalid", "true").focus()
    } else {
      $("#email").attr("aria-invalid", "false")
    }

    if (!message.trim()) {
      isValid = false
      errorMessage += "Message is required."
      $("#message").attr("aria-invalid", "true").focus()
    } else {
      $("#message").attr("aria-invalid", "false")
    }

    // If valid, submit the form (or show success message)
    if (isValid) {
      alert("Thanks for your message, " + name + "! I'll get back to you soon.")
      this.reset()
      $("#name, #email, #message").attr("aria-invalid", "false")
    } else {
      alert("Please correct the following errors: " + errorMessage)
    }
  })
})
