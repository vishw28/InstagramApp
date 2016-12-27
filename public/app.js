/**
 * Created by Vishw on 12/26/2016.
 */
<<<<<<< HEAD
=======

(function () {
    'use strict'
    var app = angular.module('myApp',['ngRoute','ngResource']);

    app.config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/gallery',{
                    templateUrl:'views/gallery.view.html',
                    controller:'GalleryController',
                    controllerAs:'gc'
                })
                .otherwise({redirectTo:'/gallery'});
    }])
})();
>>>>>>> 179b436... implemented(instagram service)
