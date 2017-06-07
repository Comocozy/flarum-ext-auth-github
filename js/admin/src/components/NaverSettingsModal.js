import SettingsModal from 'flarum/components/SettingsModal';

export default class NaverSettingsModal extends SettingsModal {
  className() {
    return 'NaverSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('comocozy-auth-naver.admin.naver_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('comocozy-auth-naver.admin.naver_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('comocozy-auth-naver.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('comocozy-auth-naver.admin.naver_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('comocozy-auth-naver.client_secret')}/>
      </div>
    ];
  }
}
