import { css } from 'docz-plugin-css';
import doczPluginGithubPage from 'docz-plugin-github-page';

export default {
  plugins: [css({ preprocessor: 'sass' }), doczPluginGithubPage()],
  title: 'Nimbos',
  description: 'Nimbos - SPA Framework',
  indexHtml: '.docz/index_template.html',
  base: '/nimbos/',
  themeConfig: {
    codeSandbox: false
  },
  codeSandbox: false
};
