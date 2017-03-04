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
      template: '<div>ng1-ux-select works!</div>',
      controller: 'Ng1UxSelectCtrl',
      controllerAs: 'vm',
      bindToController: {}
    };
  }
})();