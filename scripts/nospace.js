/**
 * Description:
 *     removes white space from text. useful for html values that cannot have spaces
 * Usage:
 *   {{some_text | nospace}}
 */
angular.module('helpmeApp')
.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '-');
    };
});