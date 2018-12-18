
const configAndroid = {
  'packages/mobile[android]':
  {
    entry: './src/index.ts',
    buildDir: 'build/android',
    dllBuildDir: 'build/android/dll',
    stack:
      Stack {
        technologies:
        [ 'apollo',
        'react',
        'styled-components',
        'es6',
        'ts',
        'webpack',
        'i18next',
        'react-native',
        'android' ],
        platform: 'android' },
  defines:
    {
      __DEV__: true,
      __API_URL__: '"http://localhost:8080/graphql"',
      __WEBSITE_URL__: '"http://localhost:8080"',
      'process.env.STRIPE_PUBLIC_KEY': undefined,
      __CLIENT__: true
    },
  enabled: false,
  name: 'android',
  require:
    {
      [Function: require]
      resolve: [Function],
      probe: [Function],
      cwd:
      '/Users/aperkey/Documents/dev/apollo-universal-starter-kit/packages/mobile'
    },
  plugins:
    [WebpackPlugin {},
      WebAssetsPlugin {},
      CssProcessorPlugin {},
      ApolloPlugin {},
      TypeScriptPlugin {},
      BabelPlugin {},
      ReactPlugin {},
      ReactHotLoaderPlugin {},
      TCombPlugin {},
      FlowRuntimePLugin {},
      ReactNativePlugin {},
      ReactNativeWebPlugin {},
      StyledComponentsPlugin {},
      AngularPlugin {},
      VuePlugin {},
      I18NextPlugin {}],
  roles: ['build', 'watch'],
  cache: '../../.cache',
  webpackDll: true,
  reactHotLoader: false,
  persistGraphQL: false,
  id: 'packages/mobile[android]',
  nodeDebugger: true,
  sourceMap: true,
  minify: true,
  projectRoot: '/Users/aperkey/Documents/dev/apollo-universal-starter-kit' 
  }

const configIOS = {
  'packages/mobile[ios]': 
    {
      entry: './src/index.ts',
      buildDir: 'build/ios',
      dllBuildDir: 'build/ios/dll',
      stack:
        Stack {
          technologies:
          ['apollo',
            'react',
            'styled-components',
            'es6',
            'ts',
            'webpack',
            'i18next',
            'react-native',
            'ios'],
            platform: 'ios'
        },
      defines:
        {
        __DEV__: true,
        __API_URL__: '"http://localhost:8080/graphql"',
        __WEBSITE_URL__: '"http://localhost:8080"',
        'process.env.STRIPE_PUBLIC_KEY': undefined,
        __CLIENT__: true
        },
      enabled: true,
      name: 'ios',
      require:
        {
          [Function: require]
          resolve: [Function],
          probe: [Function],
          cwd:
          '/Users/aperkey/Documents/dev/apollo-universal-starter-kit/packages/mobile'
        },
      plugins:
        [WebpackPlugin {},
          WebAssetsPlugin {},
          CssProcessorPlugin {},
          ApolloPlugin {},
          TypeScriptPlugin {},
          BabelPlugin {},
          ReactPlugin {},
          ReactHotLoaderPlugin {},
          TCombPlugin {},
          FlowRuntimePLugin {},
          ReactNativePlugin {},
          ReactNativeWebPlugin {},
          StyledComponentsPlugin {},
          AngularPlugin {},
          VuePlugin {},
          I18NextPlugin {}],
      roles: ['build', 'watch'],
      cache: '../../.cache',
      webpackDll: true,
      reactHotLoader: false,
      persistGraphQL: false,
      id: 'packages/mobile[ios]',
      nodeDebugger: true,
      sourceMap: true,
      minify: true,
      projectRoot: '/Users/aperkey/Documents/dev/apollo-universal-starter-kit'
  }
}