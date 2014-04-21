/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 3/2/14
 * Time: 6:41 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

/**
 * This controller is not properly used.  Directive Controllers should be used as an API to be referenced by all instances of the directive.
 */
module.exports = function ($scope, $personService, $attrs) {

    function init() {
        $scope.fullName = $personService.getFullName($attrs.name);
        $scope.relationship = $personService.getRelationship($attrs.name);
        $scope.caption = $personService.getCaption($attrs.name);
    }

    init();
};
