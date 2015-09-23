'use strict';

/**
 * @ngdoc overview
 * @name pulsetotemApp
 * @description
 * # translation
 *
 * Define translation configuration for application.
 */
angular
    .module('pulsetotemApp')
    .config(['$translateProvider', function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/locales/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage(['en', 'fr']);
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useMissingTranslationHandlerLog();
    }]);

