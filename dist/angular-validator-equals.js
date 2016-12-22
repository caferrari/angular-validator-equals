'use strict';

(function (angular) {

  'use strict';

  angular.module('validatorEquals', []).directive('equals', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        parent: "=equals"
      },
      link: function link(scope, elem, attrs, ngModel) {

        ngModel.$validators.equals = function (modelValue, viewValue) {
          return modelValue === scope.parent;
        };

        scope.$watch('parent', ngModel.$validate);
        scope.$watch(function () {
          return (ngModel || {}).$modelValue;
        }, function () {
          if (!ngModel) return;
          ngModel.$setTouched();
          ngModel.$validate();
        });
      }
    };
  });
})(angular);