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
        $translateProvider.preferredLanguage('fr');
        $translateProvider.fallbackLanguage(['en', 'fr']);
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useMissingTranslationHandlerLog();
    }]);

