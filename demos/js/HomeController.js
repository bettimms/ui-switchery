/**
 * Created by betim on 4/11/2017.
 */

(function (app) {

    app.controller("HomeController", ["$timeout", HomeController])
    function HomeController($timeout) {
        var vm = this;

        vm.defaults = {
            color: '#bd214c'
            , secondaryColor: '#dfdfdf'
            , jackColor: '#fff'
            , jackSecondaryColor: null
            , className: 'switchery'
            , disabled: false
            , disabledOpacity: 0.5
            , speed: '0.4s'
            , size: 'large'
        };

        vm.disabled = false;
        vm.switchA = true;
        vm.switchB = false;
        vm.changeModel = function () {
            vm.switchA = !vm.switchA;
        }

        vm.items = [
            {name: "Item A", isSelected: true},
            {name: "Item B", isSelected: false}
        ];
        vm.selectItem = function (item) {
            vm.selectedItem = item;
        }
        vm.toggleDisable = function () {
            vm.disabled = !vm.disabled;
        }
        vm.onChange = function () {
            console.log("Changed");
        }
        $timeout(function () {
            // vm.changeModel();
        }, 3000);
    };

})(angular.module("app"));