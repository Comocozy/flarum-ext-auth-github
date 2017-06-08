import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('comocozy/auth/naver', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('naver',
      <LogInButton
        className="Button LogInButton--naver"
        icon="naver"
        path="/auth/naver">
        {app.translator.trans('comocozy-auth-naver.forum.log_in.with_naver_button')}
      </LogInButton>
    );
  });
});
