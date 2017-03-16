(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect')
    .directive('ng1UxSelect', Ng1UxSelectDDO)
  ;
  Ng1UxSelectDDO.$inject = [];

  function Ng1UxSelectDDO() {
    var template = [
      '<div class="ng1-ux-select-comp dropdown">',
      '  <input ng-model="vm.searchString" ng-keypress="vm.onKeyPressed()" ng-readonly="vm.loading"',
      '         class="form-control dropdown-toggle" id="ng1-ux-select-dropdown" data-toggle="dropdown"',
      '         aria-haspopup="true" aria-expanded="true">',
      '  <ul class="dropdown-menu" aria-labelledby="ng1-ux-select-dropdown">',
      '    <li ng-repeat="item in vm.itemList track by $index"',
      '        ng-click="vm.onItemClicked(item)">',
      '      <a ng-class="{\'selected\': item.selected}">',
      '        <span><strong>{{item.name}}</strong></span><br/>',
      '        <span><small>{{vm.getItemDesc(item)}}</small></span>',
      '      </a>',
      '    </li>',
      '    <li class="disabled" ng-if="!vm.loading && (!vm.itemList || vm.itemList.length === 0)">',
      '      <a><small><dfn>No item existing</dfn></small></a>',
      '    </li>',
      '    <li ng-if="vm.loading">',
      '      <a><small>Loading...</small></a>',
      '    </li>',
      '  </ul>',
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
        // CONSTANT
        var ESC_KEY = 27;

        var vm = scope.vm;
        var ngElem;
        var ngDropDownElem;

        constructor();

        function constructor() {
          // Local variable initiation
          ngElem = angular.element(elem);
          ngDropDownElem = ngElem.find('.ng1-ux-select-comp.dropdown');

          // Expose more API
          if (vm) {
            vm.closeDropdown = closeDropdown;
            vm.isDropdownOpened = isDropdownOpened;
            vm.openDropdown = openDropdown;
          }

          // Add event listeners
          ngElem.on('keyup', onElemKeyUp);
          scope.$on('destroy', onScopeDestroyed);
        }

        function closeDropdown() {
          if (vm.isDropdownOpened()) {
            $('.dropdown-toggle').dropdown('toggle');
          }
        }

        function isDropdownOpened() {
          var cssClass = ngDropDownElem.attr('class');
          return cssClass && cssClass.indexOf('open') > -1;
        }

        function onElemKeyUp(event) {
          var keyCode = event.keyCode;
          if (keyCode === ESC_KEY) {
            vm.closeDropdown();
          } else {
            console.log(keyCode);
          }
        }

        function openDropdown() {
          if (!vm.isDropdownOpened()) {
            $('.dropdown-toggle').dropdown('toggle');
          }
        }

        function onScopeDestroyed() {
          ngElem.off('keyup', onElemKeyUp);
          ngDropDownElem = null;
          ngElem = null;
        }
      }
    };
  }
})();
