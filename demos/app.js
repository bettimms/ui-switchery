/**
 * Created by betim on 2/15/2017.
 */

angular.module("app", ["ui.switchery"])
    .config(function (uiSwitcheryConfigProvider) {
        var defaults = {
            secondaryColor: '#dfdfdf'
            , jackColor: '#fff'
            , jackSecondaryColor: null
            , className: 'switchery'
            , disabled: false
            , disabledOpacity: 0.5
            , speed: '0.4s'
            , size: 'default'
        };
        uiSwitcheryConfigProvider.setOptions(defaults);
    });