'use strict';

System.register('comocozy/auth/naver/components/NaverSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, NaverSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      NaverSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(NaverSettingsModal, _SettingsModal);

        function NaverSettingsModal() {
          babelHelpers.classCallCheck(this, NaverSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (NaverSettingsModal.__proto__ || Object.getPrototypeOf(NaverSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(NaverSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'NaverSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('comocozy-auth-naver.admin.naver_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('comocozy-auth-naver.admin.naver_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('comocozy-auth-naver.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('comocozy-auth-naver.admin.naver_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('comocozy-auth-naver.client_secret') })
            )];
          }
        }]);
        return NaverSettingsModal;
      }(SettingsModal);

      _export('default', NaverSettingsModal);
    }
  };
});;
'use strict';

System.register('comocozy/auth/naver/main', ['flarum/extend', 'flarum/app', 'comocozy/auth/naver/components/NaverSettingsModal'], function (_export, _context) {
  "use strict";

  var app, NaverSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_comocozyAuthNaverComponentsNaverSettingsModal) {
      NaverSettingsModal = _comocozyAuthNaverComponentsNaverSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('comocozy/auth/naver', function () {
        app.extensionSettings['comocozy-auth-naver'] = function () {
          return app.modal.show(new NaverSettingsModal());
        };
      });
    }
  };
});
