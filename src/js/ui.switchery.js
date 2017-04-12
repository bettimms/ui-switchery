/**
 * Created by betim on 4/11/2017.
 */

(function (app) {
    app.directive("uiSwitchery", ["$parse", uiSwitchery]);
    function uiSwitchery($parse) {
        return {
            restrict: "A",
            require: "^ngModel",
            scope: true,
            link: function (scope, element, attrs, ngModel) {
                var options = $parse(attrs.uiSwitchery)(scope);
                var switchery = new Switchery(element[0], options);

                element.bind("change", function () {
                    ngModel.$setViewValue(element.is(":checked"));
                });

                scope.$watch(attrs.ngModel, function (value) {
                    switchery.handleOnchange(value);
                });
                scope.$watch(attrs.ngDisabled, function (value) {
                    (switchery && value) ? switchery.disable() : switchery.enable();
                });
                scope.$on('$destroy', function () {
                    switchery.destroy();
                });
            }
        }
    }
})(angular.module("ui.switchery", []));