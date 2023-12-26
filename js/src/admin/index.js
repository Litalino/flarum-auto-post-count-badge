import app from 'flarum/admin/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('litalino/flarum-auto-post-count-badge', () => {
  app.extensionData.for('litalino-auto-post-count-badge').registerPage(SettingsPage);
});

import * as components from './components';

export { components };
