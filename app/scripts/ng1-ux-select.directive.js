(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect')
    .directive('ng1UxSelect', Ng1UxSelectDDO)
  ;
  Ng1UxSelectDDO.$inject = [];

  function Ng1UxSelectDDO() {
    var template = [
      '<div class="ng1-ux-select-comp">',
      '  <div class="input-group dropdown">',
      '    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" ng-focus="vm.onInputFocused()">',
      '    <ul class="dropdown-menu" aria-labelledby="ng1-ux-select-dropdown-label">',
      '      <li><a href="#">Action</a></li>',
      '      <li><a href="#">Another action</a></li>',
      '      <li><a href="#">Something else here</a></li>',
      '      <li role="separator" class="divider"></li>',
      '      <li><a href="#">Separated link</a></li>',
      '    </ul>',
      '    <span class="input-group-addon dropdown-toggle" role="button" id="ng1-ux-select-dropdown" data-toggle="dropdown"',
      '          aria-haspopup="true" aria-expanded="true"><span class="caret"></span></span>',
      '  </div>',
      '</div>'
    ];

    return {
      scope: {},
      restrict: 'E',
      template: template.join(''),
      controller: 'Ng1UxSelectCtrl',
      controllerAs: 'vm',
      bindToController: {}
    };
  }
})();
