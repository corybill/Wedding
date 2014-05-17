'use strict';

module.exports = function () {
    return {
        restrict : 'E',
        replace : true,
        link: require('../links/sheSaidYesLink'),
        templateUrl: '/component/proposal/sheSaidYesComponent'
    };
};