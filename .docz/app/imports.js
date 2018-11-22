export const imports = {
  'packages/styles/readme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-styles-readme" */ 'packages/styles/readme.mdx'),
  'packages/button/docs/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-button-docs-button" */ 'packages/button/docs/button.mdx'),
  'packages/checkbox/docs/checkbox.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-checkbox-docs-checkbox" */ 'packages/checkbox/docs/checkbox.mdx'),
  'packages/entry/docs/entry.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-entry-docs-entry" */ 'packages/entry/docs/entry.mdx'),
  'packages/entry/docs/label.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-entry-docs-label" */ 'packages/entry/docs/label.mdx'),
  'packages/i18n/docs/i18n.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-i18n-docs-i18n" */ 'packages/i18n/docs/i18n.mdx'),
  'packages/layout/docs/layout.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-layout-docs-layout" */ 'packages/layout/docs/layout.mdx'),
}
