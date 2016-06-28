angular.module('angular-include-replace', [])

    .directive('ngIncludeReplace', function() {
        return {
            require: 'ngInclude',
            link: function(scope, element, attrs) {
                element.replaceWith(element.children());
            }
        };
    });