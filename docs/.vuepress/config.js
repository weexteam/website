module.exports = {
  title: 'WEEX',
  description: 'Weex',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "//gw.alicdn.com/tps/TB1XNqxPXXXXXcSXVXXXXXXXXXX-64-63.png"
      }
    ],
    [
      "script",
      {
        "src": "//g.alicdn.com/alilog/mlog/aplus_v2.js"
      }
    ],
    [
      "meta",
      {
        "name": "data-spm",
        "dataSpmProtocol": "i",
        "content": "a2c7j"
      }
    ],
    [
      "meta",
      {
        "name": "aplus-ajax",
        "content": "chksum"
      }
    ],
    [
      "meta",
      {
        "name": "aplus-waiting",
        "content": "MAN"
      }
    ],
    [
      "meta",
      {
        "name": "google-site-verification",
        "content": "FbH8DPHpxdDJlfkKLKXuXWOu69DI8ZRRP8O2Phg8UKw"
      }
    ],
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "WRr1iWvsYK"
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'en-US'
    },
    '/zh/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    "spm": "a2c7j",
    "repo": "apache/incubator-weex",
    "docsRepo": "apache/incubator-weex-site",
    "docsDir": "docs",
    "docsBranch": "master",
    "editLinks": true,
    "version": "v0.28",
    "versionLink": "/download/download.html",
    "logo": "/logo@2x.svg",
    "search": false,
    locales: {
      '/': {
        "selectText": "Languages",
        "label": "English",
        "lastUpdated": "Last Updated",
        "editLinkText": "Edit this page",
        "openIssueText": "Suggest",
        "scoreText": {
          "good": "Excellent doc",
          "bad": "Unusable doc"
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Docs', link: '/docs/' },
          { text: 'Third Party Tools', link: '/tools/' },
          { text: 'Download', link: '/download/' },
          { text: 'Community', link: '/community/' },
          { text: 'Blog', link: '/blog/' }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                ['introduction', 'Introduction'],
                ['front-end-frameworks', 'Front-End Frameworks'],
                ['platform-difference', 'Platform Difference'],
                ['use-vue-in-weex', 'Use Vue in Weex'],
                ['use-rax-in-weex', 'Use Rax in Weex'],
                ['playground', 'Playground App']
              ]
            },
            {
              title: 'Develop',
              collapsable: false,
              children: [
                ['develop/setup-develop-environment', 'Setup Develop Environment'],
                ['develop/create-a-new-app', 'Create a New App'],
                ['develop/weex_cli', 'Weex CLI'],
                ['develop/integrate-to-android-app', 'Integrate to Android'],
                ['develop/integrate-to-iOS-app', 'Integrate to iOS'],
                ['develop/weex_error_code', 'WeexErrorCode']
              ]
            },
            {
              title: 'Debug',
              collapsable: false,
              children: [
                ['debug/integrate-devtool-to-android', 'Integrate Devtool to Android'],
                ['debug/integrate-devtool-to-ios', 'Integrate Devtool to iOS'],
                ['debug/debug', 'Debug']
              ]
            },
            {
              title: 'Extend',
              collapsable: false,
              children: [
                ['extend/extend-android', 'Extend Android'],
                ['extend/extend-ios', 'Extend iOS'],
                ['extend/extend-ios-with-swift', 'Extend iOS with Swift'],
                ['extend/extend-web', 'Extend Web Renderer']
              ]
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: [
                ['advanced/asset-path', 'Asset Path'],
                ['advanced/downgrade', 'Downgrade'],
                ['advanced/use-vuex-and-vue-router', 'Use Vuex and vue-router'],
                ['advanced/multi-size-screen', 'Fit for multi-size screen']
              ]
            },
            {
              title: 'Contribute',
              collapsable: false,
              children: [
                ['contribute/how-to-contribute', 'Join Weex community'],
                ['contribute/thanks', 'Thanks'],
              ]
            }
          ],
          '/docs/': [
            {
              title: 'API',
              collapsable: false,
              children: [
                ['api/weex-variable', 'Weex Variable'],
                ['api/android-apis', 'Android APIs'],
                ['api/ios-apis', 'iOS APIs'],
                ['api/js-service', 'JS Service'],
                ['api/broadcast-channel', 'BroadcastChannel']
              ]
            },
            {
              title: 'Built-in Components',
              collapsable: false,
              children: [
                ['components/a', '<a>'],
                ['components/div', '<div>'],
                ['components/text', '<text>'],
                ['components/image', '<image>'],
                ['components/list', '<list>'],
                ['components/cell', '<cell>'],
                ['components/loading', '<loading>'],
                ['components/refresh', '<refresh>'],
                ['components/recycle-list', '<recycle-list>'],
                ['components/scroller', '<scroller>'],
                ['components/slider', '<slider>'],
                ['components/indicator', '<indicator>'],
                ['components/textarea', '<textarea>'],
                ['components/input', '<input>'],
                ['components/waterfall', '<waterfall>'],
                ['components/video', '<video>'],
                ['components/web', '<web>'],
                ['components/richtext', '<richtext>']
              ]
            },
            {
              title: 'Built-in Modules',
              collapsable: false,
              children: [
                ['modules/animation', 'animation'],
                ['modules/clipboard', 'clipboard'],
                ['modules/dom', 'dom'],
                ['modules/globalEvent', 'globalEvent'],
                ['modules/meta', 'meta'],
                ['modules/modal', 'modal'],
                ['modules/navigator', 'navigator'],
                ['modules/picker', 'picker'],
                ['modules/storage', 'storage'],
                ['modules/stream', 'stream'],
                ['modules/webview', 'webview'],
                ['modules/websockets', 'webSockets'],
                ['modules/deviceInfo', 'deviceInfo'],
                ['modules/console-log', 'console-log']
              ]
            },
            {
              title: 'Styles',
              collapsable: false,
              children: [
                ['styles/common-styles', 'Common Styles'],
                ['styles/text-styles', 'Text Styles'],
                ['styles/css-units', 'CSS Units'],
                ['styles/color-name', 'Color name']
              ]
            },
            {
              title: 'Events',
              collapsable: false,
              children: [
                ['events/common-events', 'Common Events'],
                ['events/event-bubbling', 'Event Bubble'],
                ['events/gesture', 'Gesture']
              ]
            }
          ],
          '/tools/': [
            ['extension', 'VSCode Extension'],
            ["dotwe", "Online Editor"],
            ['eeui', 'EEUI Framework']
          ],
          '/community/': [
            ['code-demos', 'Code Demos'],
            ['who-is-using-weex', 'Who is using Weex'],
            ['weex-third-party-extensions', 'Plugins Market']
          ],
          '/blog/': [
            ['write-a-blog', 'Write a Blog'],
            ['ios-weexcore.md', 'Adapt iOS WeexSDK to WeexCore'],
            ['weex-third-party-extensions','List of Third Party Plugin']
          ],
          '/download/':[
             ['download', "Source Download"],
             ['major_change', 'Major Change'] 
          ]
        },
        "algolia": {
          "apiKey": "a6896fe3619315a7f04e9a76bbbbbfcb",
          "indexName": "weex",
          "algoliaOptions": {
            "facetFilters": [
              "lang:en-US"
            ]
          }
        }
      },
      '/zh/': {
        "selectText": "????????????",
        "label": "????????????",
        "lastUpdated": "????????????",
        "editLinkText": "????????????",
        "openIssueText": "????????????",
        "scoreText": {
          "good": "??????????????????",
          "bad": "??????????????????"
        },
        nav: [
          { text: '??????', link: '/zh/guide/' },
          { text: '??????', link: '/zh/docs/' },
          { text: '???????????????', link: '/zh/tools/' },
          { text: '??????', link: '/zh/download/' },
          { text: '??????', link: '/zh/community/' },
          { text: '??????', link: '/zh/blog/' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '????????????',
              collapsable: false,
              children: [
                ['introduction', '??????'],
                ['front-end-frameworks', '????????????'],
                ['platform-difference', '????????????'],
                ['use-vue-in-weex', '???Weex?????????Vue.js'],
                ['use-rax-in-weex', '???Weex?????????Rax.js'],
                ['playground', 'Playground ??????']
              ]
            },
            {
              title: '??????',
              collapsable: false,
              children: [
                ['develop/setup-develop-environment', '??????????????????'],
                ['develop/create-a-new-app', '??????????????????app'],
                ['develop/weex_cli', 'Weex CLI'],
                ['develop/integrate-to-android-app', '?????????Android??????'],
                ['develop/integrate-to-iOS-app', '?????????iOS??????'],
                ['develop/weex_error_code', 'WEEX???????????????']
              ]
            },
            {
              title: '??????',
              collapsable: false,
              children: [
                ['debug/integrate-devtool-to-android', '??????Devtool???Android'],
                ['debug/integrate-devtool-to-ios', '??????Devtool???iOS'],
                ['debug/debug', '??????']
              ]
            },
            {
              title: '??????',
              collapsable: false,
              children: [
                ['extend/extend-android', '??????Android??????'],
                ['extend/extend-ios', '??????iOS??????'],
                ['extend/extend-ios-with-swift', '??????Swift??????iOS??????'],
                ['extend/extend-web', '??????Web??????']
              ]
            },
            {
              title: '????????????',
              collapsable: false,
              children: [
                ['advanced/asset-path', '????????????'],
                ['advanced/downgrade', '????????????'],
                ['advanced/use-vuex-and-vue-router', '??????Vuex???vue-router'],
                ['advanced/multi-size-screen', '????????????????????????']
              ]
            },
            {
              title: '??????',
              collapsable: false,
              children: [
                ['contribute/how-to-contribute', '?????? Weex ??????'],
                ['contribute/thanks', '??????'],
              ]
            }
          ],
          '/zh/docs/': [
            {
              title: 'API',
              collapsable: false,
              children: [
                ['api/weex-variable', 'Weex ????????????'],
                ['api/android-apis', 'Android ??????'],
                ['api/ios-apis', 'iOS ??????'],
                ['api/js-service', 'JS ??????'],
                ['api/broadcast-channel', '???????????????']
              ]
            },
            {
              title: '????????????',
              collapsable: false,
              children: [
                ['components/a', '<a>'],
                ['components/div', '<div>'],
                ['components/text', '<text>'],
                ['components/image', '<image>'],
                ['components/list', '<list>'],
                ['components/cell', '<cell>'],
                ['components/loading', '<loading>'],
                ['components/refresh', '<refresh>'],
                ['components/recycle-list', '<recycle-list>'],
                ['components/scroller', '<scroller>'],
                ['components/slider', '<slider>'],
                ['components/indicator', '<indicator>'],
                ['components/textarea', '<textarea>'],
                ['components/input', '<input>'],
                ['components/waterfall', '<waterfall>'],
                ['components/video', '<video>'],
                ['components/web', '<web>'],
                ['components/richtext', '<richtext>']
              ]
            },
            {
              title: '????????????',
              collapsable: false,
              children: [
                ['modules/animation', 'animation'],
                ['modules/clipboard', 'clipboard'],
                ['modules/dom', 'dom'],
                ['modules/globalEvent', 'globalEvent'],
                ['modules/meta', 'meta'],
                ['modules/modal', 'modal'],
                ['modules/navigator', 'navigator'],
                ['modules/picker', 'picker'],
                ['modules/storage', 'storage'],
                ['modules/stream', 'stream'],
                ['modules/webview', 'webview'],
                ['modules/websockets', 'webSockets'],
                ['modules/deviceInfo', 'deviceInfo'],
                ['modules/console-log', 'console-log']
              ]
            },
            {
              title: '??????',
              collapsable: false,
              children: [
                ['styles/common-styles', '????????????'],
                ['styles/text-styles', '????????????'],
                ['styles/css-units', 'CSS ??????'],
                ['styles/color-name', '?????????']
              ]
            },
            {
              title: '??????',
              collapsable: false,
              children: [
                ['events/common-events', '????????????'],
                ['events/event-bubbling', '????????????'],
                ['events/gesture', '??????']
              ]
            }
          ],
          '/zh/tools/': [
            ['extension', 'VSCode ??????'],
            ["dotwe", "Online Editor"],
            ["eeui", "EEUI ??????"]
          ],
          '/zh/community/': [
            ['code-demos', '????????????'],
            ['who-is-using-weex', '????????????Weex'],
            ['weex-third-party-extensions', '????????????']
          ],
          '/zh/blog/': [
            ['write-a-blog', '???????????????'],
            ['weex-auto-test-locating', 'Weex?????????????????????????????????'],
            ['ios-weexcore.md', 'iOS WeexSDK ?????? WeexCore'],
            ['weexcore-multiprocess-evolution', 'WeexCore ??????????????????????????????'],
            ['interaction-optimization', '??????????????????????????????????????????????????????'],
            ['what_is_the_most_important_assest_to_an_open_souce_project', '????????????????????????????????????????????????'],
            ['weex-third-party-extensions','Weex ????????????']
          ],
          '/zh/download/':[
            ['download', "???????????????"],
            ['major_change', '????????????']
          ]
        },
        "algolia": {
          "apiKey": "a6896fe3619315a7f04e9a76bbbbbfcb",
          "indexName": "weex",
          "algoliaOptions": {
            "facetFilters": [
              "lang:zh-CN"
            ]
          }
        }
      }
    }
  }
};
