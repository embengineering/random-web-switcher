(function() {

  var locations = [
    'http://brag.headspring.com/boards/headspring/show-off',
    'https://embengineering-kyfl-rock.herokuapp.com/'
  ];

  var locationLength = locations.length;
  var counter = 0;

  init();

  function init() {
    setInterval(changeLocation, 30000);
    changeLocation();
  }

  function changeLocation() {
    iframe.src = locations[++counter % locationLength];
  }

})();
