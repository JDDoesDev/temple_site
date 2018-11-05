$(function () {
  var today = checkDate();
  $('.flavor-otd').text(function () {
    var todayFlavor = flavorOTD(today);
    return todayFlavor;
  });

  function checkDate() {
    var date = new Date();
    var today = date.getDay();
    return today;
  }

  function flavorOTD(today) {
    var flavor;

    switch (today) {
      case 0:
      case 6:
        flavor = 'Pumpkin Creme Brulee';
        break;
      case 1:
        flavor = 'Highlander Grogg';
        break;
      case 2:
        flavor = 'Sinful Delight';
        break;
      case 3:
        flavor = 'Jamaican Me Crazy';
        break;
      case 4:
        flavor = 'Cookie Butter';
        break;
      case 5:
        flavor = 'Caramel';
        break;
      default:
        break;
    }

    return flavor;
  }
});

