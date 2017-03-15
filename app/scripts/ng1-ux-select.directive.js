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
      '    <input ng-model="vm.searchString" ng-keypress="vm.onKeyPressed()" ng-readonly="vm.loading" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" ng-focus="vm.onInputFocused()">',
      '    <ul class="dropdown-menu" aria-labelledby="ng1-ux-select-dropdown-label">',
      '      <li ng-repeat="item in vm.itemList track by $index"',
      '          ng-click="vm.onItemClicked(item)">',
      '        <a ng-class="{\'selected\': item.selected}">',
      '          <span><strong>{{item.name}}</strong></span><br/>',
      '          <span><small>{{vm.getItemDesc(item)}}</small></span>',
      '        </a>',
      '      </li>',
      '      <li class="disabled" ng-if="!vm.loading && (!vm.itemList || vm.itemList.length === 0)">',
      '        <a><small><dfn>No item existing</dfn></small></a>',
      '      </li>',
      '      <li ng-if="vm.loading">',
      '        <a><small>Loading...</small></a>',
      '      </li>',
      '    </ul>',
      '    <span ng-click="vm.onToggleDropDown($event)" class="input-group-addon dropdown-toggle" role="button" id="ng1-ux-select-dropdown" data-toggle="dropdown"',
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
      bindToController: {},
      link: function (scope, elem) {
        var vm = scope.vm;
        var ngElem = angular.element(elem);
        var ngDropDownElem = ngElem.find('.input-group.dropdown');

        if (vm) {
          vm.isDropdownOpened = isDropdownOpened;
        }

        isDropdownOpened();

        function isDropdownOpened() {
          var cssClass = ngDropDownElem.attr('class');
          return cssClass && cssClass.indexOf('open') > -1;
        }
      }
    };
  }
})();
