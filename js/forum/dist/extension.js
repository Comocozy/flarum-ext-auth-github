'use strict';

System.register('comocozy/auth/naver/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('comocozy-auth-naver', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('naver', m(
            LogInButton,
            {
              className: 'Button LogInButton--naver',
              icon: 'naver',
              path: '/auth/naver' },
            app.translator.trans('comocozy-auth-naver.forum.log_in.with_naver_button')
          ));
        });
      });
    }
  };
});