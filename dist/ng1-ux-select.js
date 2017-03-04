(function () {
  'use strict';
  angular
    .module('')
    .controller('Ng1UxSelectCtrl', Ng1UxSelectCtrl)
  ;
  Ng1UxSelectCtrl.$inject = [];

  function Ng1UxSelectCtrl() {

  }
})();
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
(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect', [])
  ;
})();