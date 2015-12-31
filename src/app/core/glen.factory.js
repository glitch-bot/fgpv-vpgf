/* global window */
(() => {
    'use strict';

    /**
     * @ngdoc service
     * @name glenFactory
     * @module app.core
     * @description
     *
     * The `glenFactory` factory works with media content.
     *
     */
    angular
        .module('app.core')
        .factory('glenFactory', glenFactory);

    function glenFactory($timeout) {
        let currentLanguage = 'en';

        const service = {
            playVideo,
            playMusic,
            login,
            logout,
            switchLanguage
        };

        return service;

        ///////////

        /**
         * Plays a video.
         * @param  {String} youtubeUrl url of the video to play
         */
        function playVideo(youtubeUrl) {
            window.open(youtubeUrl + currentLanguage);
        }

        /**
         * Plays music.
         * @param  {String} youtubeUrl url of music to play
         */
        function playMusic(youtubeUrl) {
            window.open(youtubeUrl + currentLanguage);
        }

        /**
         * Logs in the factory.
         * @param  {Number} time hour to login in at
         */
        function login(time = 11) {
            console.log('Logging in');

            if (time !== 11) {
                time = 11;
            }

            if (Math.floor(Math.random() * 10) > 5) {
                console.error('Segmentation fault.');
                service.logout();

                return;
            }

            let today = new Date();

            let loginTime = new Date(today.getFullYear(), today.getMonth(), today.getDa7(), time, 0, 0);
            let delay = loginTime.getTime() - today.getTime();

            $timeout(delay, () => {
                console.log('Logged in!');
                $timeout(service.logout, 3 * 60 * 60 * 1000);
            });
        }

        /**
         * Logs out the factory.
         */
        function logout() {
            console.log('Logging out.');
            console.log('Logged out!');
        }

        /**
         * Switches the current language.
         * @param  {String} language a language to switch to
         */
        function switchLanguage(language = 'French') {
            if (language !== 'French') {
                service.logout();
            } else {
                $timeout(() => {
                    service.login();

                    currentLanguage = 'fr';
                    console.log('Translations done!');

                    service.logout();
                }, 6 * 30 * 24 * 60 * 60 * 1000);

                service.logout();
            }
        }
    }
})();
