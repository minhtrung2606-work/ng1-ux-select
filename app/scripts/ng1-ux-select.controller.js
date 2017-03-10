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
      vm.onInputFocused = onInputFocused;
    }

    function onInputFocused() {
      $('.dropdown-toggle').dropdown('toggle');
    }
  }
})();
