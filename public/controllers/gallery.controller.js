/**
 * Created by Vishw on 12/26/2016.
 */
(function () {
    'use strict';

    angular.module('myApp')
        .controller('GalleryController',GalleryController);


        function GalleryController($sce,$http) {
            var gc = this;
            gc.Url = $sce.trustAsResourceUrl('https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN');

            gc.images = [];

            $http.jsonp(gc.Url)
                .then(function (response) {

                    gc.images=response.data.data;

                    console.log(gc.images);

                },(function (error) {
                    console.log(error);
                }));

        }

})();