/**
 * Created by pesho on 1/7/2016.
 */

WPAngularStarter.factory('Pizza', function($resource) {
    return $resource('http://localhost:8000/api/pizza/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
});
