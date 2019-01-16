(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict



/** nat code */

Vue.component('vue-weather', { 
  props: ['city'],
  data () {
    return {
      weatherCodes: {
        200: {day: 'wi-day-storm-showers', night: 'wi-night-alt-storm-showers'},
        201: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        202: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        210: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        211: {day: 'wi-day-lightning', night: 'wi-night-alt-lightning'},
        212: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        221: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        230: {day: 'wi-day-storm-showers', night: 'wi-night-alt-storm-showers'},
        231: {day: 'wi-day-storm-showers', night: 'wi-night-alt-storm-showers'},
        232: {day: 'wi-day-storm-showers', night: 'wi-night-alt-storm-showers'},
        300: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        301: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        302: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        310: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        311: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        312: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        313: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        314: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        321: {day: 'wi-day-showers', night: 'wi-night-alt-showers'},
        500: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        501: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        502: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        503: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        504: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        511: {day: 'wi-day-hail', night: 'wi-night-alt-hail'},
        520: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        521: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        522: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        531: {day: 'wi-day-rain', night: 'wi-night-alt-rain'},
        600: {day: 'wi-day-snow', night: 'wi-night-alt-snow'},
        601: {day: 'wi-day-snow', night: 'wi-night-alt-snow'},
        602: {day: 'wi-day-snow', night: 'wi-night-alt-snow'},
        611: {day: 'wi-day-sleet', night: 'wi-night-alt-sleet'},
        612: {day: 'wi-day-sleet', night: 'wi-night-alt-sleet'},
        615: {day: 'wi-day-sleet', night: 'wi-night-alt-sleet'},
        616: {day: 'wi-day-sleet', night: 'wi-night-alt-sleet'},
        620: {day: 'wi-day-snow', night: 'wi-night-alt-snow'},
        621: {day: 'wi-day-snow', night: 'wi-night-alt-snow'},
        622: {day: 'wi-day-snow', night: 'wi-night-alt-snow'},
        701: {day: 'wi-day-cloudy-windy', night: 'wi-night-alt-cloudy-windy'},
        711: {day: 'wi-smoke', night: 'wi-smoke'},
        721: {day: 'wi-windy', night: 'wi-windy'},
        731: {day: 'wi-sandstorm', night: 'wi-sandstorm'},
        741: {day: 'wi-day-fog', night: 'wi-night-fog'},
        751: {day: 'wi-sandstorm', night: 'wi-sandstorm'},
        761: {day: 'wi-sandstorm', night: 'wi-sandstorm'},
        762: {day: 'wi-volcano', night: 'wi-volcano'},
        771: {day: 'wi-hurricane', night: 'wi-hurricane'},
        781: {day: 'wi-tornado', night: 'wi-tornado'},
        800: {day: 'wi-day-sunny', night: 'wi-night-clear'},
        801: {day: 'wi-day-cloudy', night: 'wi-night-alt-cloudy'},
        802: {day: 'wi-day-cloudy', night: 'wi-night-alt-cloudy'},
        803: {day: 'wi-day-cloudy', night: 'wi-night-alt-cloudy'},
        804: {day: 'wi-day-cloudy', night: 'wi-night-alt-cloudy'},
        900: {day: 'wi-tornado', night: 'wi-tornado'},
        901: {day: 'wi-hurricane', night: 'wi-hurricane'},
        902: {day: 'wi-hurricane', night: 'wi-hurricane'},
        903: {day: 'wi-snowflake-cold', night: 'wi-snowflake-cold'},
        904: {day: 'wi-hot', night: 'wi-hot'},
        905: {day: 'wi-strong-wind', night: 'wi-strong-wind'},
        906: {day: 'wi-day-hail', night: 'wi-night-alt-hail'},
        951: {day: 'wi-day-sunny', night: 'wi-night-clear'},
        952: {day: 'wi-day-windy', night: 'wi-night-alt-cloudy-gusts'},
        953: {day: 'wi-day-windy', night: 'wi-night-alt-cloudy-gusts'},
        954: {day: 'wi-day-windy', night: 'wi-night-alt-cloudy-gusts'},
        955: {day: 'wi-day-windy', night: 'wi-night-alt-cloudy-gusts'},
        956: {day: 'wi-day-windy', night: 'wi-night-alt-cloudy-gusts'},
        957: {day: 'wi-day-windy', night: 'wi-night-alt-cloudy-gusts'},
        958: {day: 'wi-gale-warning', night: 'wi-gale-warning'},
        959: {day: 'wi-gale-warning', night: 'wi-gale-warning'},
        960: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        961: {day: 'wi-day-thunderstorm', night: 'wi-night-alt-thunderstorm'},
        962: {day: 'wi-hurricane', night: 'wi-hurricane'}
      },
      appTitle: 'Vue Weather',
      dataApi: 'd4cce8c8ec573308495b39a61d882d2d',
      lang: 'en',
      units: 'imperial', // imperial OR metric
      weather: '',
      refreshIntervals: 600000, // 600000 milliseconds = 10 minutes
      latitude: '',
      longitude: ''
    }
  },
  template: `
    <section class="VueWeather">
      <div class="condition" v-if="weather">
        <h2 v-text="weather.name"></h2>
        <div class="description" v-text="weather.weather[0].description"></div>
        <div class="icon"><i :class="makeIcon()"></i></div>
        <div class="temp">{{ weather.main.temp.toFixed() }}<i :class="weather.units"></i></div>
      </div>
<div v-else><span class="fa fa-spinner fa-spin fa-3x"></span></div>
    </section>
  `,
  created () {
    
    // Get User's Location
    if(this.city === '') {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude  = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.performAJAX();
      }, error => {
        console.log("Unable to retrieve your location");
      });
    } else {
      this.performAJAX();
    }
    
    setInterval(e => {
      this.performAJAX();
    }, this.refreshIntervals);
  },
  methods: {
    performAJAX () {
      this.weather = '';
      
      let query = (this.city) 
        ? '&q=' + this.city 
        : '&lat=' + this.latitude + '&lon=' + this.longitude;
      
      axios.get('https://api.openweathermap.org/data/2.5/weather?' +
                'units=' + this.units + 
                '&lang=' + this.lang + 
                '&APPID=' + this.dataApi +
                query
      ).then(response => {
        this.weather = response.data;
        this.weather.units = (this.units === 'imperial') ? 'wi wi-fahrenheit':'wi wi-celsius';
      })
      .catch(error => {
        console.log(error);
      });
    },
    isDayOrNight () {
      let hour = new Date().getHours();
      return (hour > 6 && hour < 20) ? 'day':'night';
    },
    makeIcon () {
      if(this.isDayOrNight() === 'day') {
        return 'wi ' + this.weatherCodes[this.weather.weather[0].id].day;
      } else {
        return 'wi ' + this.weatherCodes[this.weather.weather[0].id].night;
      }
    }
  }
});

new Vue({
  el: '#app'
});
