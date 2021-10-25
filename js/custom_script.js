/*
    ->->->->->->->->->->->->->->->->->->
	Project Name: Robert Downey
	Description: Responsive HTML5 Personal Portfolio Template
	Version: 1.0
    Author: Mr Munna
    -<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<-<
*/

function executing_preloader() {
  const bar = document.querySelector(".bar-inner");
  const bar_text = document.querySelector(".bar-text .value");
  var set_Value = 0;
  var yes = setInterval(function () {
    var generateRandom = Math.floor(Math.random() * 401);
    setTimeout(() => {
      if (set_Value <= 100) {
        bar.style.width = set_Value + "%";
        bar_text.innerText = set_Value + "%";
        set_Value++;
      } else {
        document.querySelector("body").classList.add("loaded");
        jQuery("#preloader-loader").css({
          display: "none",
        });
      }
    }, generateRandom);
  }, 30);
}
function check__Switcher_Activity() {
  var switchers = jQuery(".ColorSwitcher");
  switchers.each(function () {
    var a = jQuery(this);
    var switcher = a.find(".ColorSwitcher__switch");
    switcher.first().addClass("active");
    switcher.on("click", function () {
      var button = jQuery(this);
      if (!button.hasClass("active")) {
        switcher.removeClass("active");
        button.addClass("active");
      }
    });
  }),
    jQuery(document).on("click", function (e) {
      !jQuery(e.target).is(".ColorSwitcher .ColorSwitcher__control") &&
        !jQuery(e.target).is(".ColorSwitcher .ColorSwitcher__switch") &&
        jQuery(".ColorSwitcher").removeClass("ColorSwitcher--open");
    });
}
function colorSwitcher() {
  var colorSheets = [
    {
      color: "#08b4d3",
      title: "Switch to Default",
      href: "css/style.css",
    },
    {
      color: "#5e9e9f",
      title: "Soft Green",
      href: "css/color-changer/soft_green.css",
    },
    {
      color: "#ff5135",
      title: "Switch to Red",
      href: "css/color-changer/red_blood.css",
    },
    {
      color: "#4169e1",
      title: "Switch to Blue",
      href: "css/color-changer/blue_sky.css",
    },
    {
      color: "#0e9280",
      title: "Switch to Green",
      href: "css/color-changer/green_world.css",
    },
    {
      color: "#ec9f05",
      title: "Switch to Yellow",
      href: "css/color-changer/yellow_pillow.css",
    },
  ];
  ColorSwitcher.init(colorSheets);
}
function navbarToggle() {
  var list_mobile = jQuery(".main-nav > li");
  if (jQuery(".main-menu").length > 0) {
    var n = jQuery(".main-menu");
    n.each(function () {
      var n = jQuery(this),
        t = n.find(".menuicon");
      t.on("click", function (t) {
        var menu_button = jQuery(this);
        if (jQuery(window).width() < 767.99) {
          t.preventDefault(),
            jQuery(".menuicon").toggleClass("change"),
            n.find(".mobile-navbar").toggleClass("mobile-nav-visible"),
            setTimeout(function () {
              jQuery("body").toggleClass("has-mobile-nav");
            }, 200);
        } else {
          t.preventDefault(),
            jQuery(".menuicon").toggleClass("change"),
            n.find(".main-nav").toggleClass("main-nav-visible"),
            jQuery(".stretchy-nav-bg").toggleClass("fade");
        }
      });
    }),
      jQuery(document).on("click", function (t) {
        !jQuery(t.target).is(".main-menu") &&
          !jQuery(t.target).is(".main-menu .menuicon") &&
          !jQuery(t.target).is(".main-menu .menuicon .icon-container") &&
          !jQuery(t.target).is(".main-menu .menuicon .icon-container .bars") &&
          n.find(".main-nav").removeClass("main-nav-visible") &&
          n.find(".mobile-navbar").removeClass("mobile-nav-visible") &&
          setTimeout(function () {
            jQuery("body").removeClass("has-mobile-nav");
          }, 200) &&
          jQuery(".stretchy-nav-bg").removeClass("fade") &&
          jQuery(".menuicon").removeClass("change");
        if (jQuery(t.target).is(".porfolio-description-modal")) {
          stop_videos();
        }
      });
  }
}
function checkScreen() {
  var menu_button = jQuery(".main-menu .menuicon");
  var windowNav = jQuery(".main-menu").find(".main-nav");
  var mobileNav = jQuery(".main-menu").find(".mobile-navbar");
  if (jQuery(window).width() < 767.99) {
    if (menu_button.hasClass("change")) {
      menu_button.removeClass("change");
      if (
        mobileNav.hasClass("mobile-nav-visible") ||
        windowNav.hasClass("main-nav-visible") ||
        jQuery(".stretchy-nav-bg").hasClass("fade")
      ) {
        mobileNav.removeClass("mobile-nav-visible"),
          windowNav.removeClass("main-nav-visible"),
          setTimeout(function () {
            jQuery("body").removeClass("has-mobile-nav");
          }, 200),
          jQuery(".stretchy-nav-bg").removeClass("fade");
      }
    }
  } else {
    if (menu_button.hasClass("change")) {
      menu_button.removeClass("change");
      if (
        mobileNav.hasClass("mobile-nav-visible") ||
        windowNav.hasClass("main-nav-visible") ||
        jQuery(".stretchy-nav-bg").hasClass("fade")
      ) {
        mobileNav.removeClass("mobile-nav-visible"),
          windowNav.removeClass("main-nav-visible"),
          setTimeout(function () {
            jQuery("body").removeClass("has-mobile-nav");
          }, 200),
          jQuery(".stretchy-nav-bg").removeClass("fade");
      }
    }
  }
}
var resizeTimer;
jQuery(window).on("resize", function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    checkScreen();
  }, 250);
});
function hideShow() {
  jQuery(".mobile-nav > li , .main-nav > li").on("click", function (e) {
    if (!jQuery(this).hasClass("active")) {
      var tabNum = jQuery(this).index();
      var nthChild = tabNum + 3;
      jQuery(".mobile-nav > li.active , .main-nav > li.active").removeClass(
        "active"
      );
      jQuery(this).addClass("active");
      jQuery("#main > section.active-section").removeClass("active-section");
      jQuery("#main > section:nth-child(" + nthChild + ")").addClass(
        "active-section"
      );
      filterPortfolio();
    }
    e.preventDefault();
    if (
      jQuery(".porfolio-description-modal").hasClass("show") &&
      jQuery(".modal-backdrop").hasClass("show")
    ) {
      setTimeout(function () {
        jQuery(".modal-backdrop").remove();
        jQuery(".porfolio-description-modal")
          .removeClass("show")
          .css({ display: "none" });
        jQuery(".modal-backdrop").removeClass("show");
        stop_videos();
      }, 400);
    } else {
    }
  });
}
function progressBar() {
  $("#progress-status-1").circleDiagram({
    percent: "98%",
    size: "150",
    borderWidth: "10",
    bgFill: "#ffffff",
    frFill: "#08b4d3",
    textSize: "24",
    textColor: "#cb218d",
  });
  $("#progress-status-2").circleDiagram({
    percent: "53%",
    size: "150",
    borderWidth: "10",
    bgFill: "#ffffff",
    frFill: "#08b4d3",
    textSize: "24",
    textColor: "#cb218d",
  });
  $("#progress-status-3").circleDiagram({
    percent: "85%",
    size: "150",
    borderWidth: "10",
    bgFill: "#ffffff",
    frFill: "#08b4d3",
    textSize: "24",
    textColor: "#cb218d",
  });
  $("#progress-status-4").circleDiagram({
    percent: "79%",
    size: "150",
    borderWidth: "10",
    bgFill: "#ffffff",
    frFill: "#08b4d3",
    textSize: "24",
    textColor: "#cb218d",
  });
  $("#progress-status-5").circleDiagram({
    percent: "73%",
    size: "150",
    borderWidth: "10",
    bgFill: "#ffffff",
    frFill: "#08b4d3",
    textSize: "24",
    textColor: "#cb218d",
  });
  $("#progress-status-6").circleDiagram({
    percent: "56%",
    size: "150",
    borderWidth: "10",
    bgFill: "#ffffff",
    frFill: "#08b4d3",
    textSize: "24",
    textColor: "#cb218d",
  });
}
function filters_opener(button, list) {
  button.on("click", function () {
    var element = jQuery(this);
    if (element.hasClass("opened")) {
      element.removeClass("opened");
      list.removeClass("opened");
    } else {
      element.addClass("opened");
      list.each(function (i) {
        var ele = jQuery(this);
        setTimeout(function () {
          ele.addClass("opened");
        }, i * 100);
      });
    }
    return false;
  });
}
function stop_videos() {
  var videos = document.querySelectorAll("video");
  var video = Array.from(videos);
  for (i = 0; i < video.length; i++) {
    if (video[i].paused !== true && video[i].ended !== true) {
      // pause the current video running
      video[i].pause();
      return false;
    }
  }
}
function filterPortfolio() {
  jQuery(".portfolioExtend").isotope({
    itemSelector: ".portfolio-single",
    layoutMode: "fitRows",
  });
  jQuery(".filters-ul li a").click(function () {
    jQuery(".filters-ul li a").removeClass("active");
    jQuery(this).addClass("active");

    var selector = jQuery(this).attr("data-filter");
    jQuery(".portfolioExtend").isotope({
      filter: selector,
    });
    return false;
  });
}
function sliderPortfolio() {
  $("#portfolio-part .slider-portfolio-media").slick({
    dots: false,
    infinite: true,
    arrow: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-angle-right left"><</i>',
    nextArrow: '<i class="fas fa-angle-left right">></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
}

// Executable Functionality Run Here
jQuery(document).ready(function () {
  jQuery(".venobox").venobox();
  executing_preloader();
  colorSwitcher();
  check__Switcher_Activity();
  navbarToggle();
  checkScreen();
  hideShow();
  progressBar();
  sliderPortfolio();
  filters_opener(
    jQuery(".btn-filter-wrapper a"),
    jQuery(".portfolio-wrapper .filters-ul li")
  );
});
