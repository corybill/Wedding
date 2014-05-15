'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    require: "lyrics",
    link: require('../links/lyricsLink'),
    controller: require('../controllers/lyricsController'),
    templateUrl: '/component/proposal/lyricsComponent'
  };
};