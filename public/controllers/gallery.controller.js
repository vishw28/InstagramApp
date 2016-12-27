/**
 * Created by Vishw on 12/26/2016.
 */
(function () {
    'use strict';

    angular.module('myApp')
        .controller('GalleryController',GalleryController);


        function GalleryController($sce,$http,Lightbox) {
            var gc = this;
            gc.Url = $sce.trustAsResourceUrl('https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN&count=35');

            gc.images = [];
            var imgArray = [];

            $http.jsonp(gc.Url)
                .then(function (response) {

                    gc.images=response.data.data;
                    angular.forEach(gc.images,function (value) {
                        imgArray.push(value.images.standard_resolution);
                    });
                    gc.openLightboxModal = function (index) {
                        Lightbox.openModal(imgArray,index);
                    }

                },(function (error) {
                    console.log(error);
                }));
        }

})();