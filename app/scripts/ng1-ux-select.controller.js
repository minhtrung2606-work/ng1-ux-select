(function () {
  'use strict';
  angular
    .module('nmt.comp.ng1UxSelect')
    .controller('Ng1UxSelectCtrl', Ng1UxSelectCtrl)
  ;
  Ng1UxSelectCtrl.$inject = [];

  function Ng1UxSelectCtrl() {
    var vm = this;

    constructor();

    function constructor() {
      // Properties
      vm.loading = true;

      // Methods
      vm.onInputFocused = onInputFocused;
      vm.onToggleDropDown = onToggleDropDown;
    }

    function onInputFocused() {
      $('.dropdown-toggle').dropdown('toggle');
    }

    function onToggleDropDown($event) {
      if (vm.loading) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }
})();
