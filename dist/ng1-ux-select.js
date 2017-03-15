(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect')
    .controller('Ng1UxSelectCtrl', Ng1UxSelectCtrl)
  ;
  Ng1UxSelectCtrl.$inject = ['$scope', '$timeout'];

  var Item = (function () {
    function Item(name) {
      this.name = name || 'Unknown';
      this.prop1 = 'Value of Prop 1 Value of Prop 1';
      this.prop2 = 'Value of Prop 2 Value of Prop 2';
    }

    return Item;
  })();

  function Ng1UxSelectCtrl($scope, $timeout) {
    var vm = this;

    var selectedItem;
    var debouceSearch;
    var itemList;
    var searchTimeoutId;
    var searchString;

    constructor();
    onInit();

    function constructor() {
      // Local variables
      debouceSearch = _.debounce(startSearching, 500);
      searchTimeoutId = -1;
      searchString = '';

      // Properties
      vm.loading = false;

      // Methods
      vm.getItemDesc = getItemDesc;
      vm.onInputFocused = onInputFocused;
      vm.onItemClicked = onItemClicked;
      vm.onKeyPressed = onKeyPressed;
      vm.onToggleDropDown = onToggleDropDown;
    }

    function getItemDesc(item) {
      var props = vm.descPaths.split(',');
      var itemDesc = [];
      _.each(props, function getItemPropValue(prop) {
        itemDesc.push(_.get(item, prop));
      });
      return itemDesc.join('; ');
    }

    function onInit() {
      vm.descPaths = 'prop1,prop2';
      vm.itemList = [
        new Item('Item 1'),
        new Item('Item 2'),
        new Item('Item 3'),
        new Item('Item 4'),
        new Item('Item 5')
      ];
    }

    function onInputFocused() {
      if (!vm.isDropdownOpened()) {
        $('.dropdown-toggle').dropdown('toggle');
      }
    }

    function onItemClicked(item) {
      if (selectedItem) {
        selectedItem.selected = false;
      }

      item.selected = true;
      vm.searchString = item.name;
      selectedItem = item;
    }

    function onKeyPressed() {
      debouceSearch();
    }

    function onToggleDropDown($event) {
      if (vm.loading) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }

    function search() {
      vm.loading = false;
      vm.searchString = searchString;
      searchString = '';
      vm.itemList = itemList;
      itemList = [];
      $timeout.cancel(searchTimeoutId);
    }

    function startSearching() {
      searchString = vm.searchString;
      vm.searchString = 'Loading...';
      itemList = vm.itemList;
      vm.itemList = [];
      vm.loading = true;
      $scope.$digest(); // This functon is called inside lodash env, scope must be digested to update the view
      searchTimeoutId = $timeout(search, 1 * 1000);
    }
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

(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect', [])
  ;
})();