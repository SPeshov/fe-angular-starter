/**
 * Created by pesho on 1/7/2016.
 */

WPAngularStarter.factory('Order', function($resource) {
    return $resource('http://localhost:8000/api/order/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
});