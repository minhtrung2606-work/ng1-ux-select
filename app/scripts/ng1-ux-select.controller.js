(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect')
    .controller('Ng1UxSelectCtrl', Ng1UxSelectCtrl)
  ;
  Ng1UxSelectCtrl.$inject = ['$scope', '$timeout'];

  function Ng1UxSelectCtrl($scope, $timeout) {
    var vm = this;

    var debouceSearch;
    var searchTimeoutId;
    var searchString;

    constructor();

    function constructor() {
      // Local variables
      debouceSearch = _.debounce(startSearching, 500);
      searchTimeoutId = -1;
      searchString = '';

      // Properties
      vm.loading = false;

      // Methods
      vm.onInputFocused = onInputFocused;
      vm.onKeyPressed = onKeyPressed;
      vm.onToggleDropDown = onToggleDropDown;
    }

    function onInputFocused() {
      $('.dropdown-toggle').dropdown('toggle');
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
      console.log('search');
      vm.loading = false;
      vm.searchString = searchString;
      searchString = '';
      $timeout.cancel(searchTimeoutId);
    }

    function startSearching() {
      searchString = vm.searchString;
      vm.searchString = 'Loading...';
      vm.loading = true;
      $scope.$digest(); // This functon is called inside lodash env, scope must be digested to update the view
      searchTimeoutId = $timeout(search, 1 * 1000);
    }
  }
})();
