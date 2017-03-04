(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect')
    .directive('ng1UxSelect', Ng1UxSelectDDO)
  ;
  Ng1UxSelectDDO.$inject = [];

  function Ng1UxSelectDDO() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'ng1-ux-select.view.html',
      controller: 'Ng1UxSelectCtrl',
      controllerAs: 'vm',
      bindToController: {}
    };
  }
})();