'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    require: "poem",
    link: require('../links/poemLink'),
    controller: require('../controllers/poemController'),
    templateUrl: '/component/proposal/poemComponent'
  };
};