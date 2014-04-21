'use strict';

module.exports = function () {
    return {
        restrict : 'E',
        replace : true,
        link: require('../links/imageLink'),
        require: 'imageFloater',
        controller: require('../controllers/imageController'),
        scope: {
            start: "@",
            end: "@",
            position: "@"
        },
        templateUrl: '/component/proposal/imageComponent'
    };
};