// Import jQuery and Typed.js
const $ = require("jquery")
const Typed = require("typed.js")

$(document).ready(() => {
  // Current year for copyright
  $("#currentYear").text(new Date().getFullYear())

  // Typed.js for rotating text
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

  // Mobile menu toggle
  $(".menu-toggle").click(function () {
    const expanded = $(this).attr("aria-expanded") === "true" || false
    $(this).attr("aria-expanded", !expanded)
    $(".nav-links").toggleClass("active")
  })

  // Smooth scrolling for navigation links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault()

    var target = this.hash
    var $target = $(target)

    // Update aria-current for navigation
    $(".nav-links a").attr("aria-current", null)
    $('.nav-links a[href="' + target + '"]').attr("aria-current", "page")

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 70,
      },
      800,
      "swing",
    )
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
        $(".nav-links a").removeClass("active").attr("aria-current", null)
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

  // Animate elements when they come into view
  function animateOnScroll() {
    $(".section-title, .section-subtitle, .underline").each(function () {
      var elementPosition = $(this).offset().top
      var topOfWindow = $(window).scrollTop()
      var windowHeight = $(window).height()

      if (elementPosition < topOfWindow + windowHeight - 100) {
        $(this).addClass("animated")
      }
    })

    $(
      ".about-image, .about-text, .timeline-item, .cert-card, .project-card, .skill-card, .contact-info, .contact-form",
    ).each(function () {
      var elementPosition = $(this).offset().top
      var topOfWindow = $(window).scrollTop()
      var windowHeight = $(window).height()

      if (elementPosition < topOfWindow + windowHeight - 100) {
        $(this).addClass("fadeInUp")
      }
    })
  }

  // Run animation on scroll
  $(window).on("scroll", animateOnScroll)

  // Run animation on page load
  animateOnScroll()

  // Form submission with validation
  $("#contactForm").submit(function (e) {
    e.preventDefault()

    // Get form values
    var name = $("#name").val()
    var email = $("#email").val()
    var message = $("#message").val()

    // Basic validation
    let isValid = true
    let errorMessage = ""

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
      // Here you would typically send the form data to a server
      // For demonstration, we'll just show an alert
      alert("Thanks for your message, " + name + "! I'll get back to you soon.")

      // Reset form
      this.reset()

      // Reset aria states
      $("#name, #email, #message").attr("aria-invalid", "false")
    } else {
      // Show error message
      alert("Please correct the following errors: " + errorMessage)
    }
  })
})
