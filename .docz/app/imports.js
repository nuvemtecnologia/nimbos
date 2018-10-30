export const imports = {
  'packages/@nimbos/styles/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbos-styles-readme" */ 'packages/@nimbos/styles/readme.mdx'),
  'packages/@nimbos/button/docs/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbos-button-docs-button" */ 'packages/@nimbos/button/docs/button.mdx'),
  'packages/@nimbos/entry/docs/entry.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbos-entry-docs-entry" */ 'packages/@nimbos/entry/docs/entry.mdx'),
  'packages/@nimbos/entry/docs/label.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbos-entry-docs-label" */ 'packages/@nimbos/entry/docs/label.mdx'),
  'packages/@nimbos/i18n/docs/i18n.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbos-i18n-docs-i18n" */ 'packages/@nimbos/i18n/docs/i18n.mdx'),
  'packages/@nimbos/layout/docs/layout.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-nimbos-layout-docs-layout" */ 'packages/@nimbos/layout/docs/layout.mdx'),
}
