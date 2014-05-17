'use strict';

module.exports = function () {
    return {
        restrict : 'E',
        replace : true,
        link: require('../links/codeLink'),
        templateUrl: '/component/proposal/codeComponent'
    };
};