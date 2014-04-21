'use strict';

module.exports = function () {
  return {
    restrict : 'E',
    replace : true,
    link: require('../links/proposalLink'),
    templateUrl: '/component/proposal/proposalComponent'
  };
};