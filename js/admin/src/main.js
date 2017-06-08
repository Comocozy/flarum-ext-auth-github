import { extend } from 'flarum/extend';
import app from 'flarum/app';

import NaverSettingsModal from 'comocozy/auth/naver/components/NaverSettingsModal';

app.initializers.add('comocozy/auth/naver', () => {
  app.extensionSettings['comocozy-auth-naver'] = () => app.modal.show(new NaverSettingsModal());
});
