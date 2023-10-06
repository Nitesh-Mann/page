
gsap.from(
  ".header",
  {
      y:-50,
      opacity:0,
      delay:1,
      duration:0.6,

  }
)

gsap.from(
    ".contact-form",
    {
        x:100,
        opacity:0,
        delay:1,
        duration:0.6,

    }
)

gsap.from(
  ".sec1-head",
  {
      x:-100,
      opacity:0,
      delay:1,
      duration:0.6,

  }
)

gsap.from(
    ".links",
    {
        x:-100,
        opacity:0,
        delay:1,
        duration:0.6,

    }
)

gsap.from(".a1",{
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:false,
        start:"10% 90%",
        end:"20% 75%",
        toggleActions: 'play none none reverse',
    },
    y:200,
    duration:0.6,
    opacity:0,

})

gsap.from(".a2",{
    scrollTrigger:{
        trigger:".a2",
        scroller:"body",
        markers:false,
        start:"-20% 90%",
        end:"30% 70%",
        toggleActions: 'play none none reverse',

    },
    y:200,
    duration:0.6,
    opacity:0,

})

gsap.from(".a3",{
    scrollTrigger:{
        trigger:".a3",
        scroller:"body",
        markers:false,
        start:"-60% 90%",
        end:"30% 70%",
        toggleActions: 'play none none reverse',

    },
    y:200,
    duration:0.6,
    opacity:0,

})

gsap.from(".web-img",{
    scrollTrigger:{
        trigger:".web-img",
        scroller:"body",
        markers:false,
        start:"30% 90%",
        toggleActions: 'play none none reverse',
    },
    opacity:0,
    x:-300,
    duration:0.8,
})

gsap.from(".a4",{
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        markers:false,
        start:"20% 90%",
        end:"center center",
        toggleActions: 'play none none reverse',
    },
    y:80,
    duration:0.8,
    opacity:0,

})


gsap.from(".a5",{
    scrollTrigger:{
        trigger:".a5",
        scroller:"body",
        markers:false,
        start:"10% 90%",
        end:"60% 70%",
        toggleActions: 'play none none reverse',
    },
    x:-200,
    duration:0.6,
    opacity:0,

})

gsap.from(".a6",{
    scrollTrigger:{
        trigger:".a6",
        scroller:"body",
        markers:false,
        start:"-10% 90%",
        end:"50% 50%",
        toggleActions: 'play none none reverse',
    },
    x:100,
    duration:0.6,
    opacity:0,

})

const elementsToAnimate = document.querySelectorAll(".s1, .s2, .s3");

gsap.from(elementsToAnimate, {
  scrollTrigger: {
    trigger: ".s1",
    scroller: "body",
    markers: false,
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 400,
  scale:1,
  duration: 0.4,
  stagger: 0.2, 
});

const elementsToAnimate2 = document.querySelectorAll(".s4, .s5, .s6");

gsap.from(elementsToAnimate2, {
  scrollTrigger: {
    trigger: ".s4",
    scroller: "body",
    markers: false,
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 400,
  scale:1,
  duration: 0.4,
  stagger: 0.2, 
});


gsap.from(".t1, .t2, .t3, .t4", {
  scrollTrigger: {
    trigger: ".section5",
    scroller: "body",
    markers: false,
    start:"30% 90%",
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  scale:0.1,
  y:400,
  duration: 0.7,
  stagger: 0.2, 
});


gsap.from(".f-head",{
  scrollTrigger:{
      trigger:".footer",
      scroller:"body",
      markers:false,
      start:"30% 90%",
      toggleActions: 'play none none reverse',
  },
  x:200,
  duration:0.6,
  opacity:0,

})
gsap.from(".f-p",{
  scrollTrigger:{
      trigger:".footer",
      scroller:"body",
      markers:false,
      start:"30% 90%",
      toggleActions: 'play none none reverse',
  },
  x:-200,
  duration:0.6,
  opacity:0,

})

gsap.from(".l1, .l2, .l3, .l4" ,{
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    markers:false,
    start:"55% 90%",
    toggleActions: 'play none none reverse',

  },
  opacity: 0,
  scale:0.2,
  y:100,
  duration: 0.4,
  stagger: 0.1,
});

gsap.from(".f-span" ,{
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    markers:false,
    start:"55% 90%",
    toggleActions: 'play none none reverse',

  },
  opacity: 0,
  y:400,
  duration: 0.6,
});

gsap.from(".section6", {
    scrollTrigger: {
      trigger: ".section6",
      scroller: "body",
      markers: false,
      start: "55% 90%",
      toggleActions: 'play none none reverse',
    },
    x:200,
    opacity:0,
    duration: 0.4,
  });

gsap.to(".section6", {
    scrollTrigger: {
      trigger: ".section6",
      scroller: "body",
      markers: false,
      start: "55% 90%",
      toggleActions: 'play none none reverse',
    },
    border: "2px solid #52d766",
    delay:0.3,
    duration: 0.5,
});
  



// // header fixed//

$(document).ready(function() {
    var header = $(".header");
    var headerHeight = header.outerHeight();
    var scrollPosition = $(window).scrollTop();

    $(window).scroll(function() {
        scrollPosition = $(window).scrollTop();
        if (scrollPosition >= headerHeight) {
            header.addClass("fixed-header");
        } else {
            header.removeClass("fixed-header");
        }
    });
});

$(document).ready(function() {
  // Get the navigation links that you want to add the active class to
  var navLinks1 = $('.menus a');
  var navLinks2 = $('.header2 a');

  // Define the sections you want to track
  var sections = ['#about', '#service', '#footer2'];

  // Manually set the offset for the "footer2" section
  var footer2Offset = 350; // Adjust this value as needed

  // Listen for scroll events
  $(window).scroll(function() {
      // Get the current scroll position
      var scrollPosition = $(this).scrollTop();

      // Check if at the top of the page
      if (scrollPosition === 0) {
          // Remove the active class from all navigation links
          navLinks1.removeClass('active2');
          navLinks2.removeClass('active2');
      } else {
          // Loop through sections and add active class to the correct link
          for (var i = sections.length - 1; i >= 0; i--) {
              var targetSection = $(sections[i]);

              // Add the manual offset for the "footer2" section
              if (sections[i] === '#footer2') {
                  if (scrollPosition + footer2Offset >= targetSection.offset().top) {
                      setActiveLink(sections[i]);
                      break; // Exit the loop once an active section is found
                  }
              } else {
                  if (scrollPosition >= targetSection.offset().top) {
                      setActiveLink(sections[i]);
                      break; // Exit the loop once an active section is found
                  }
              }
          }
      }
  });

  // Function to set the active link
  function setActiveLink(targetId) {
      // Remove the active class from all navigation links
      navLinks1.removeClass('active2');
      navLinks2.removeClass('active2');

      // Add the active class to the specific navigation links
      $('.menus a[href="' + targetId + '"]').addClass('active2');
      $('.header2 a[href="' + targetId + '"]').addClass('active2');
  }
});

  


$(document).ready(function() {
    // Function to toggle the login box
    $("#toggleBtn, #toggleBtn2").click(function() {
        $(".contact-box").toggleClass("show");
    });

    // Function to close the login box when clicking the "ph-x" icon
    $("#closeIcon").click(function() {
        $(".contact-box").removeClass("show");
    });

    // Function to close the login box when clicking outside the box
    $(document).mouseup(function(e) {
        var container = $(".contact-box");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("show");
        }
    });
});


$(document).ready(function() {
  // Function to toggle the login box
  $(".ph-list").click(function() {
      $(".header2").toggleClass("show2");
  });



  // Function to close the login box when clicking outside the box
  $(document).mouseup(function(e) {
      var container = $(".header2");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.removeClass("show2");
      }
  });
});
