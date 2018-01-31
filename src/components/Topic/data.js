export default {
    "id": "5a2403226190c8912ebaceeb",
    "author_id": "4f447c2f0a8abae26e01b27d",
    "tab": "share",
    "content": "<div class=\"markdown-text\"><p><img src=\"//dn-cnode.qbox.me/FhSNYCv6Ab9wzT6aUSfKLa0GtP4w\" alt=\"image.png\"></p>\n<blockquote>\n<p>原文地址：知乎专栏 <a href=\"https://zhuanlan.zhihu.com/p/31640541\">https://zhuanlan.zhihu.com/p/31640541</a></p>\n</blockquote>\n<p>给大家介绍下，Egg 2.0 正式版，今天 12.3 冒泡啦，距 3.21 的 <a href=\"https://zhuanlan.zhihu.com/p/25860846\">Egg 1.0 版本</a> 时隔 8 个月。</p>\n<p><img src=\"//dn-cnode.qbox.me/FrC_ZbrhyLkhVIquPOsMqPhvqsHX\" alt=\"image.png\"></p>\n<blockquote>\n<p><a href=\"https://eggjs.org/\">Egg</a> 是阿里 Node.js 的核心基础框架，面向『企业级的 Web 基础框架』这个领域，提供了「微内核 + 插件机制 + 框架定制能力」，完美达成生态共建和差异化定制的平衡点。<br>\n既适合个人小项目快速开发，也适合团队架构师基于自身的技术架构在 Egg 基础上扩展出适合特定团队业务场景的框架。<br>\n它沉淀自阿里在各行各业不同领域的大规模工程实践经验，稳定支撑了多年天猫双11大促，顶级流量压力。</p>\n</blockquote>\n<h2>2.0 特性</h2>\n<ul>\n<li>基于 Koa 2.x\n<ul>\n<li>异步解决方案直接基于 Async Function 。</li>\n<li>去除 co 兼容后<a href=\"https://github.com/eggjs/egg/wiki/co-vs-async\">堆栈信息更清晰</a>。</li>\n</ul>\n</li>\n<li>框架层优化带来 <a href=\"https://eggjs.github.io/benchmark/plot/\">30% 左右的性能提升</a>，不含 Node 8 带来的提升。</li>\n<li>为了方便开发者快速升级，保持了对 Egg 1.x 以及 generator function 的兼容。</li>\n</ul>\n<p><img src=\"//dn-cnode.qbox.me/Fuf5DkXMxM7wfClcN6B6LzX5d18Q\" alt=\"image.png\"></p>\n<h2>如何升级</h2>\n<p><strong><a href=\"https://eggjs.org/\">Egg</a> 的理念之一是渐进式增强，故我们为开发者提供渐进升级的体验。</strong></p>\n<ol>\n<li>Node.js 使用最新的 LTS 版本（&gt;=8.9.0）。</li>\n<li>修改 package.json 中 egg 的依赖为 ^2.0.0。</li>\n<li>检查相关插件是否发布新版本（可选）。</li>\n<li>重新安装依赖，跑单元测试。</li>\n</ol>\n<p><strong>搞定！几乎不需要修改任何一行代码，就已经完成了升级。</strong></p>\n<p>这得益于 Egg 对 1.x 的兼容，但为了更好的统一代码风格，以及更佳的性能和错误堆栈，我们建议开发者参考 <a href=\"https://eggjs.org/zh-cn/migration.html\">升级指南</a> 进一步升级。</p>\n<h2>未来规划</h2>\n<p>如您所知，Egg 采用的是 <strong>『微内核 + 插件 + 上层框架』</strong> 模式。</p>\n<p>其中微内核经过 3 年 4 个版本，以及在阿里的大规模应用，已经打磨的非常稳定。</p>\n<p>接下来我们的<strong>重心主要在开发者体验方面的优化</strong>，包括：</p>\n<ul>\n<li>更好的开发者体验，包括 TypeScript，开发者工具，IDE 工具等方面。</li>\n<li>社区扶持\n<ul>\n<li>协助业界的前端团队，打造适合特定团队业务场景的上层框架，欢迎勾搭。</li>\n<li>分享我们在团队、协作、规范化等方面的经验。</li>\n<li>分享在 Docker，GraphQL，SSR 等方面的探索和最佳实践分享。</li>\n</ul>\n</li>\n<li>国际化，官网和<a href=\"https://github.com/eggjs/egg/issues/363\">文档翻译</a>等。</li>\n</ul>\n<p>同时，我们也欢迎社区更多的<a href=\"https://github.com/orgs/eggjs/projects\">参与</a>，一起打造更完善的生态。</p>\n<p><img src=\"//dn-cnode.qbox.me/Fg_WHGNC13j2azgEWb-ONk5whle5\" alt=\"image.png\"></p>\n<h2>我们这一年</h2>\n<p>截止至今天(2017-12-03)：</p>\n<ul>\n<li><strong>GitHub 5.6k star</strong>，555 forks，npm 月下载量 11,140 (不含阿里内网数据)。</li>\n<li>从 1.0 到 2.0，我们一共发布了 <a href=\"https://github.com/eggjs/egg/releases\">18 个版本</a>，处理了 820 个 issue，收到了 500+ (主库 272) 个 Pull Request 。</li>\n<li>开发者体验方面的优化包括：<a href=\"https://eggjs.org/zh-cn/core/development.html#%E4%BD%BF%E7%94%A8-egg-bin-%E8%B0%83%E8%AF%95\">断点调试代理</a>，<a href=\"https://eggjs.org/zh-cn/core/development.html#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95\">单元测试+覆盖率</a>，<a href=\"https://eggjs.org/zh-cn/core/deployment.html#%E9%83%A8%E7%BD%B2\">部署工具</a>，TypeScript 支持，<a href=\"https://github.com/eggjs/vscode-eggjs\">VSCode 插件</a>，文档优化等等。</li>\n</ul>\n<p><strong>社区方面：</strong></p>\n<ul>\n<li>来自 BAT，丁香园，全民直播等多家兄弟公司的反馈和插件回馈。</li>\n<li>来自 <a href=\"https://github.com/eggjs/egg/network/dependents\">GitHub Dependents</a> 的统计：992 Repositories, 231 Packages</li>\n<li><a href=\"https://npms.io/search?q=egg-\">NPM 搜索结果</a>超过 400 个。</li>\n<li>上层框架：\n<ul>\n<li><a href=\"https://github.com/alibaba/beidou\">北斗</a> - Isomorphic framework for server-rendered React apps</li>\n<li><a href=\"https://github.com/avetjs/avet\">avet</a> - A very comfortable framework for writing isomorphic applications</li>\n</ul>\n</li>\n<li>如果你有好的分享，PR 传送门：<a href=\"https://github.com/eggjs/awesome-egg\">awesome-egg</a></li>\n</ul>\n<p><strong>趣味数据：</strong></p>\n<ul>\n<li>官网访问量中，Mac 占 47% → 这比例挺高的，看来 Node 程序猿都很幸福。</li>\n<li>周末的访问量约为平时的 1/3 → 看来 Node 程序猿周末加班少。（滑稽</li>\n<li>官网访问来源：站内，直链，外链各 30% 多，来自搜索引擎的较少。</li>\n</ul>\n<p><strong>分享交流：</strong></p>\n<ul>\n<li>在 <a href=\"http://2017.jsdc.tw/\">台灣 JSDC2017 開發者年會</a> 和 <a href=\"http://2017.imweb.io/index.html#schedule\">腾讯IMWebConf</a> 分享了『<a href=\"https://github.com/atian25/blog/raw/master/assets/files/Egg%20%26%20Node.js%20%E4%BB%8E%E5%B0%8F%E5%B7%A5%E5%9D%8A%E8%B5%B0%E5%90%91%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BC%80%E5%8F%91.pdf\">Egg &amp; Node.js 从小工坊走向企业级开发</a>』</li>\n</ul>\n<p><img src=\"//dn-cnode.qbox.me/FgFUrGpNw07LKQPYzGgZp64j7CZH\" alt=\"image.png\"></p>\n<ul>\n<li>Node TSC @张秋怡 在 <a href=\"https://nina17.sched.com/event/Atii/nodejs-at-alibaba-a-joyee-cheung-alibaba-cloud\">Node Interactive North America 2017</a> 和 <a href=\"http://nodefest.jp/2017/schedule.html#joyee\">東京Node学園祭2017</a> 分享了『<a href=\"https://github.com/joyeecheung/talks/blob/master/node_fest_2017/nodejs_at_alibaba_tokyo.pdf\">Node.js at Alibaba</a>』。</li>\n</ul>\n<p><img src=\"//dn-cnode.qbox.me/Fl5IyrfAMzQ49Uz3eQ67i2FLL09H\" alt=\"image.png\"></p>\n<ul>\n<li><a href=\"/user/ngot\">@ngot</a> 在 <a href=\"https://www.bagevent.com/event/751307\">Node Party</a> 分享了『<a href=\"https://github.com/Hangzhou-Node-Party/Node-Party/blob/master/2017-08-19/Egg.js%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E9%9B%86%E5%9B%A2%E7%9A%84%E7%9A%84%E5%AE%9E%E8%B7%B5%E8%BF%90%E7%94%A8.pdf\">Egg.js 在阿里巴巴集团的实践运用</a>』</li>\n<li>@姜天意 在 <a href=\"http://2017.imweb.io/index.html#schedule\">腾讯IMWebConf</a> 分享了 『<a href=\"https://github.com/jtyjty99999/share/blob/master/security%20risk%20in%20node%20web.pdf\">脆弱的 Node.js</a>』</li>\n</ul>\n<h2>写在最后</h2>\n<p>开源，痛并快乐着。</p>\n<p><img src=\"//dn-cnode.qbox.me/Fiamh5LNYR3e2E0HtdhrO3sVfHrs\" alt=\"image.png\"></p>\n</div>",
    "title": "企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async",
    "last_reply_at": "2018-01-29T16:18:59.945Z",
    "good": true,
    "top": true,
    "reply_count": 105,
    "visit_count": 18821,
    "create_at": "2017-12-03T13:58:58.901Z",
    "author": {
        "loginname": "atian25",
        "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
    },
    "replies": [
        {
            "id": "5a2404d7110a338547d6e3dc",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>顺便拉下票，OSChina 开源中国正在举办 <a href=\"http://www.oschina.net/project/top_cn_2017?from=hometop\">2017年度最受欢迎中国开源软件评选</a>，请为 Egg 打 Call~</p>\n<p>另外，顶楼『分享交流』章节的两个 Slide 推荐看下~</p>\n</div>",
            "ups": [
                "57878e7969d72f545483cbe5",
                "5a1cccc56190c8912ebacdc3",
                "5826f60ac1d3b2b57db5e225",
                "532c696c63ea35176f020651",
                "5a210c92476ea1170b733c51",
                "595379550d52eaae214014d4",
                "5a414dbc9807389a1809f6ce",
                "5a2d29da9807389a1809f29e",
                "5a1917cc110a338547d6e20e",
                "58c2b2d479f557ff16f0f201",
                "57ce20ca80ad316647adcbe9",
                "59acb8859e95202d08c91f0a",
                "5a5432faa3692d014f4f1307",
                "54b0f146ce87bace2444ceca",
                "598d0f2fb98d634b1180ca59",
                "5a56dc30afa0a121784a8b0a",
                "5487adcbfa1171ca10c11bcc",
                "5a5a28989d371d4a059eea8f",
                "5a5e0c139288dc8153287e8e",
                "5a6591279d371d4a059eece9",
                "5a65d735afa0a121784a8e83",
                "5a629bd5ce45d440451461a2"
            ],
            "create_at": "2017-12-03T14:06:15.753Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a2406b48eab6ee92a694627",
            "author": {
                "loginname": "waitingsong",
                "avatar_url": "https://avatars2.githubusercontent.com/u/1763067?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>不错。继续完善。</p>\n</div>",
            "ups": [
                "5a2893278230827a182934fc",
                "5826f60ac1d3b2b57db5e225",
                "5a3084ca8230827a18293693",
                "5a2f2a968230827a1829363c",
                "5a08ef14dea908392cfc88e7",
                "598d0f2fb98d634b1180ca59",
                "5a41ed279807389a1809f6f6",
                "5a5a28989d371d4a059eea8f",
                "5a5e0c139288dc8153287e8e",
                "5a6973199d371d4a059eee17",
                "5a66884bce45d44045146251",
                "5a629bd5ce45d440451461a2"
            ],
            "create_at": "2017-12-03T14:14:12.593Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a2414b28eab6ee92a69462b",
            "author": {
                "loginname": "vanishcode",
                "avatar_url": "https://avatars0.githubusercontent.com/u/20496444?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>加油！async万岁~</p>\n</div>",
            "ups": [
                "5826f60ac1d3b2b57db5e225",
                "5940a06e8ce045ee166a1500",
                "5a2f2a968230827a1829363c",
                "59acb8859e95202d08c91f0a",
                "5a66e999ce45d4404514628d",
                "5a66884bce45d44045146251",
                "5a66879fce45d44045146250",
                "5a629bd5ce45d440451461a2"
            ],
            "create_at": "2017-12-03T15:13:54.543Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24a616110a338547d6e3e8",
            "author": {
                "loginname": "richenlin",
                "avatar_url": "https://avatars3.githubusercontent.com/u/6151439?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持支持！！</p>\n</div>",
            "ups": [
                "5826f60ac1d3b2b57db5e225",
                "5a2f2a968230827a1829363c",
                "5a5e0c139288dc8153287e8e",
                "5a66879fce45d44045146250",
                "5a66884bce45d44045146251",
                "5a629bd5ce45d440451461a2"
            ],
            "create_at": "2017-12-04T01:34:14.958Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24aad98eab6ee92a69463d",
            "author": {
                "loginname": "dengnan123",
                "avatar_url": "https://avatars3.githubusercontent.com/u/25699654?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>厉害了</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "5826f60ac1d3b2b57db5e225",
                "58c2b2d479f557ff16f0f201",
                "598d0f2fb98d634b1180ca59",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T01:54:33.600Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24ad45110a338547d6e3eb",
            "author": {
                "loginname": "EryouHao",
                "avatar_url": "https://avatars0.githubusercontent.com/u/17328747?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>赞👍</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "58c2b2d479f557ff16f0f201",
                "5a5e9bf0a3692d014f4f1508",
                "5a66884bce45d44045146251"
            ],
            "create_at": "2017-12-04T02:04:53.384Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24ad616190c8912ebacf05",
            "author": {
                "loginname": "Richar-Dada",
                "avatar_url": "https://avatars2.githubusercontent.com/u/16242499?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>加油!加油!</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "5a1b85a1110a338547d6e238",
                "59acb8859e95202d08c91f0a",
                "5a66879fce45d44045146250",
                "5a6687719288dc8153288080",
                "59fa85b2e95aa6373e17fd64"
            ],
            "create_at": "2017-12-04T02:05:21.439Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24afc56190c8912ebacf08",
            "author": {
                "loginname": "AserSayHi",
                "avatar_url": "https://avatars3.githubusercontent.com/u/5109665?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>赞👍赞👍赞👍</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "58c2b2d479f557ff16f0f201",
                "598d0f2fb98d634b1180ca59",
                "59acb8859e95202d08c91f0a",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T02:15:33.971Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24b4bd8eab6ee92a694648",
            "author": {
                "loginname": "wbget",
                "avatar_url": "https://avatars0.githubusercontent.com/u/12776391?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>接触eggjs半年，真的感谢贵团队，你们辛苦了！</p>\n</div>",
            "ups": [
                "4f447c2f0a8abae26e01b27d",
                "5a1cccc56190c8912ebacdc3"
            ],
            "create_at": "2017-12-04T02:36:45.875Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24b5e6110a338547d6e3f0",
            "author": {
                "loginname": "avwo",
                "avatar_url": "https://avatars2.githubusercontent.com/u/11450939?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>性能提升30%是怎么做到的？</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-04T02:41:42.030Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24b890110a338547d6e3f3",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/avwo\">@avwo</a> 主要的一部分损耗在于 co，因为 Egg 1 是兼容 async 的，做法就是使用 co 包裹。而在 Egg 2 里面，async-first，大部分情况下不需要包裹了，这块能减少不少。</p>\n<p>具体的可以看：<a href=\"https://github.com/eggjs/benchmark/pull/14\">https://github.com/eggjs/benchmark/pull/14</a></p>\n<p>PS：对绝大部分应用来说，这些性能根本没啥意义。</p>\n</div>",
            "ups": [
                "56f3854c0a5a2cfb3ad149e2",
                "58cf56bbda3a9843406a468c",
                "598d0f2fb98d634b1180ca59"
            ],
            "create_at": "2017-12-04T02:53:04.251Z",
            "reply_id": "5a24b5e6110a338547d6e3f0",
            "is_uped": false
        },
        {
            "id": "5a24c4b886f955d94a269f9a",
            "author": {
                "loginname": "i5ting",
                "avatar_url": "https://avatars3.githubusercontent.com/u/3118295?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>具有里程碑意义，社区价值较大，置顶</p>\n</div>",
            "ups": [
                "4f447c2f0a8abae26e01b27d",
                "57b08034a4f7e29c763413ef",
                "5a278de49807389a1809f19f",
                "5989b8c4a5bf6b1076b6356b",
                "548bd25257fd3ae46b23343d",
                "5a1b85a1110a338547d6e238",
                "590c2ed552c3650e042a7fd9",
                "58cf56bbda3a9843406a468c",
                "5a2f2a968230827a1829363c"
            ],
            "create_at": "2017-12-04T03:44:56.755Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24c5921c0db2f94a3aee7d",
            "author": {
                "loginname": "beliefgp",
                "avatar_url": "https://avatars1.githubusercontent.com/u/12657964?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>赞👍赞👍赞👍</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "58c2b2d479f557ff16f0f201",
                "59acb8859e95202d08c91f0a",
                "59fa85b2e95aa6373e17fd64"
            ],
            "create_at": "2017-12-04T03:48:34.804Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24c59d1c0db2f94a3aee7f",
            "author": {
                "loginname": "zhangzhaoaaa",
                "avatar_url": "https://avatars3.githubusercontent.com/u/3007631?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持支持</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-04T03:48:45.158Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24d2d786f955d94a269fa2",
            "author": {
                "loginname": "x-cold",
                "avatar_url": "https://avatars1.githubusercontent.com/u/6903313?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持支持</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-04T04:45:11.524Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24d7f01c0db2f94a3aee81",
            "author": {
                "loginname": "qujinxiong",
                "avatar_url": "https://avatars1.githubusercontent.com/u/15104950?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>留个纪念</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "5a2d29da9807389a1809f29e"
            ],
            "create_at": "2017-12-04T05:06:56.663Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24d8059178b0a14ac01e1f",
            "author": {
                "loginname": "hi363138911",
                "avatar_url": "https://avatars3.githubusercontent.com/u/16540329?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持</p>\n</div>",
            "ups": [
                "598d0f2fb98d634b1180ca59",
                "5a66884bce45d44045146251",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T05:07:17.921Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24e6e31c0db2f94a3aee86",
            "author": {
                "loginname": "holyselina",
                "avatar_url": "https://avatars0.githubusercontent.com/u/6049595?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持已投票</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T06:10:43.843Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24ef3d1c0db2f94a3aeea0",
            "author": {
                "loginname": "yeyeye0525",
                "avatar_url": "https://avatars2.githubusercontent.com/u/6251133?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>6666\n<img src=\"//dn-cnode.qbox.me/Fk14SCgLc_OLFhVVQ7fMkKT72aV9\" alt=\"xiaogui.jpg\"></p>\n</div>",
            "ups": [
                "59101c3e3504ce1c2ac4597c",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T06:46:21.017Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24f4611c0db2f94a3aeea5",
            "author": {
                "loginname": "htoooth",
                "avatar_url": "https://avatars3.githubusercontent.com/u/1717023?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持，支持</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-04T07:08:17.756Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a24f89486f955d94a269fad",
            "author": {
                "loginname": "liuxuech",
                "avatar_url": "https://gravatar.com/avatar/bf0bb51a0e5dc539cfd50a729da821a2?d=https%3A%2F%2Fidenticons.github.com%2Ffd069215517d74253e1d059df6df1110.png&r=x"
            },
            "content": "<div class=\"markdown-text\"><p>已经在研究了 支持支持。</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T07:26:12.979Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a250b81b31761bd4a42d892",
            "author": {
                "loginname": "2YANG",
                "avatar_url": "https://avatars0.githubusercontent.com/u/22020731?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>支持</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-04T08:46:57.944Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a25fc8886f955d94a269fcc",
            "author": {
                "loginname": "weichunpeng",
                "avatar_url": "https://avatars1.githubusercontent.com/u/13563689?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>为 Egg 打 Call~~~ 马上在项目中用起来。\n另外，有兴趣的可以关注<a href=\"https://github.com/alibaba/beidou\">beidou</a> 同构框架, 基于eggjs, 共同建设eggjs生态</p>\n</div>",
            "ups": [
                "4f447c2f0a8abae26e01b27d",
                "5a56dc30afa0a121784a8b0a",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-05T01:55:20.383Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a260840b31761bd4a42d8ba",
            "author": {
                "loginname": "coldraincn",
                "avatar_url": "https://avatars0.githubusercontent.com/u/3365574?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>如果非要用windows server，该怎么部署。没有入口文件，怎么用pm2</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-05T02:45:20.177Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a267da98230827a182934a5",
            "author": {
                "loginname": "hezhongfeng",
                "avatar_url": "https://avatars2.githubusercontent.com/u/12163050?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>牛逼~下个个人项目一定使用</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-05T11:06:17.508Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a27397a9807389a1809f16e",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/coldraincn\">@coldraincn</a> 写个 index.js 调用 egg.startCluster 即可</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-06T00:27:38.209Z",
            "reply_id": "5a260840b31761bd4a42d8ba",
            "is_uped": false
        },
        {
            "id": "5a274e1ed3114d3e18fac843",
            "author": {
                "loginname": "fomenyesu",
                "avatar_url": "https://avatars2.githubusercontent.com/u/9565499?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>已投票，这个项目好用，支持！\n<a href=\"https://github.com/fomenyesu/egg-restapi-module-tool\">egg-restapi-module-tool</a>\n已经加入oauth2.0功能，下一步争取升级到egg2.0 。</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-06T01:55:42.368Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a27570b8230827a182934ae",
            "author": {
                "loginname": "danielsss",
                "avatar_url": "https://avatars3.githubusercontent.com/u/5127897?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>看完security risk in node web， 瞬间觉得Egg强壮的很…</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-06T02:33:47.531Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a276923d92f2f5b185acc35",
            "author": {
                "loginname": "pengkobe",
                "avatar_url": "https://avatars0.githubusercontent.com/u/8745334?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>这文案杠杠的！ 支持！</p>\n</div>",
            "ups": [
                "5a56dc30afa0a121784a8b0a",
                "5a66884bce45d44045146251"
            ],
            "create_at": "2017-12-06T03:50:59.346Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a281c3bd3114d3e18fac892",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/danielsss\">@danielsss</a> 在蚂蚁金服线上系统使用的就是这套方案，当然级别不低</p>\n</div>",
            "ups": [
                "58e5afac147b1e0a5ec4e43b",
                "5a66884bce45d44045146251",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-06T16:35:07.125Z",
            "reply_id": "5a27570b8230827a182934ae",
            "is_uped": false
        },
        {
            "id": "5a2899f0d3114d3e18fac89a",
            "author": {
                "loginname": "x-cold",
                "avatar_url": "https://avatars1.githubusercontent.com/u/6903313?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/coldraincn\">@coldraincn</a> PM2 有api的，通过api调用启动脚本就好了。\n<a href=\"http://pm2.keymetrics.io/docs/usage/pm2-api/\">http://pm2.keymetrics.io/docs/usage/pm2-api/</a></p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-07T01:31:28.217Z",
            "reply_id": "5a260840b31761bd4a42d8ba",
            "is_uped": false
        },
        {
            "id": "5a28eba48230827a18293533",
            "author": {
                "loginname": "waitingsong",
                "avatar_url": "https://avatars2.githubusercontent.com/u/1763067?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/coldraincn\">@coldraincn</a>\n<a href=\"https://github.com/eggjs/egg-scripts/pull/11\">https://github.com/eggjs/egg-scripts/pull/11</a> window下停止服务的解决办法。 貌似egg在考虑保存pid方式的实现\n<a href=\"https://github.com/eggjs/egg-cluster/pull/51\">https://github.com/eggjs/egg-cluster/pull/51</a> windows下隐藏worker窗口实现</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-07T07:20:04.493Z",
            "reply_id": "5a260840b31761bd4a42d8ba",
            "is_uped": false
        },
        {
            "id": "5a29007a9807389a1809f1f7",
            "author": {
                "loginname": "rapido88",
                "avatar_url": "https://avatars1.githubusercontent.com/u/17946850?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/waitingsong\">@waitingsong</a> 😂😂😂</p>\n<p>来自酷炫的 <a href=\"https://github.com/TakWolf/CNode-Material-Design\">CNodeMD</a></p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-07T08:48:58.310Z",
            "reply_id": "5a28eba48230827a18293533",
            "is_uped": false
        },
        {
            "id": "5a29ec80d92f2f5b185accdc",
            "author": {
                "loginname": "five6",
                "avatar_url": "https://avatars1.githubusercontent.com/u/21968901?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>从发布3.21发布1.0就一直在用，真心赞。</p>\n</div>",
            "ups": [
                "4f447c2f0a8abae26e01b27d"
            ],
            "create_at": "2017-12-08T01:36:00.478Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a2a67e2d92f2f5b185accfc",
            "author": {
                "loginname": "Robert-lihouyi",
                "avatar_url": "https://avatars2.githubusercontent.com/u/15374358?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>厉害👍</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-08T10:22:26.719Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a2a72fd9807389a1809f240",
            "author": {
                "loginname": "daileimail",
                "avatar_url": "https://avatars1.githubusercontent.com/u/9097275?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>很溜，以后有外包就用它了</p>\n</div>",
            "ups": [
                "53be3c03a3ccaece73ba0606",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-08T11:09:49.115Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a2b5c1ed3114d3e18fac92b",
            "author": {
                "loginname": "danielsss",
                "avatar_url": "https://avatars3.githubusercontent.com/u/5127897?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a> 😢原来如此，蚂蚁三次面试与各位大神又失之交臂了.  只能再默默的努力了\n自豪地采用 <a href=\"https://github.com/lanceli/cnodejs-ionic\">CNodeJS ionic</a></p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-09T03:44:30.094Z",
            "reply_id": "5a281c3bd3114d3e18fac892",
            "is_uped": false
        },
        {
            "id": "5a2be23e9807389a1809f27c",
            "author": {
                "loginname": "daileimail",
                "avatar_url": "https://avatars1.githubusercontent.com/u/9097275?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>今天体验了一番，是时候重构项目了\nFrom <a href=\"https://github.com/soliury/noder-react-native\">Noder</a></p>\n</div>",
            "ups": [
                "58953aec7274550b057a5cf6",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-09T13:16:46.585Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a2bf30a8230827a182935c4",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/daileimail\">@daileimail</a> 从啥重构到啥？</p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251",
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-09T14:28:26.206Z",
            "reply_id": "5a2be23e9807389a1809f27c",
            "is_uped": false
        },
        {
            "id": "5a30dad0f15b4f306d2f02e1",
            "author": {
                "loginname": "rebornvip",
                "avatar_url": "https://avatars0.githubusercontent.com/u/5562776?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>cool</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-13T07:46:24.457Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a31291dd92f2f5b185ace30",
            "author": {
                "loginname": "ShuHongXie",
                "avatar_url": "https://avatars0.githubusercontent.com/u/29592635?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/qujinxiong\">@qujinxiong</a></p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-13T13:20:29.630Z",
            "reply_id": "5a24d7f01c0db2f94a3aee81",
            "is_uped": false
        },
        {
            "id": "5a312a509807389a1809f37c",
            "author": {
                "loginname": "ShuHongXie",
                "avatar_url": "https://avatars0.githubusercontent.com/u/29592635?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/avwo\">@avwo</a> 厉害了</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-13T13:25:36.046Z",
            "reply_id": "5a24b5e6110a338547d6e3f0",
            "is_uped": false
        },
        {
            "id": "5a312b049807389a1809f37f",
            "author": {
                "loginname": "ShuHongXie",
                "avatar_url": "https://avatars0.githubusercontent.com/u/29592635?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/AserSayHi\">@AserSayHi</a></p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-13T13:28:36.588Z",
            "reply_id": "5a24afc56190c8912ebacf08",
            "is_uped": false
        },
        {
            "id": "5a3203fdd92f2f5b185ace64",
            "author": {
                "loginname": "MedusaLeee",
                "avatar_url": "https://avatars0.githubusercontent.com/u/17797874?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>有没有完全使用typescript来写的计划。使用完全的oop风格来编写代码。</p>\n</div>",
            "ups": [
                "5a0b14fd310be7561d4c048d"
            ],
            "create_at": "2017-12-14T04:54:21.147Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a321bd78230827a18293712",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/MedusaLeee\">@MedusaLeee</a> Egg 本身不会用 TS 重写，但我们会提供一些周边的支持来方便开发者用 TS 写 Egg 应用。</p>\n<p>我们的 example 那边有 TS 的示例，蚂蚁那边的 Egg 应用也有很多都是 TS 写的。</p>\n</div>",
            "ups": [
                "5989b8c4a5bf6b1076b6356b",
                "583b92d327d001d606ac19f1"
            ],
            "create_at": "2017-12-14T06:36:07.422Z",
            "reply_id": "5a3203fdd92f2f5b185ace64",
            "is_uped": false
        },
        {
            "id": "5a33ec849807389a1809f41a",
            "author": {
                "loginname": "axetroy",
                "avatar_url": "https://avatars2.githubusercontent.com/u/9758711?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/weichunpeng\">@weichunpeng</a>\n基于egg的阿里又一框架，何等原理能快2-5倍？</p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251"
            ],
            "create_at": "2017-12-15T15:38:44.882Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a347158d1536726354b7de8",
            "author": {
                "loginname": "yt-theme",
                "avatar_url": "https://avatars2.githubusercontent.com/u/17000357?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>666</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-16T01:05:28.052Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3471cc8230827a18293792",
            "author": {
                "loginname": "yt-theme",
                "avatar_url": "https://avatars2.githubusercontent.com/u/17000357?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>666</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-16T01:07:24.153Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3480c18230827a18293799",
            "author": {
                "loginname": "gaoli861121",
                "avatar_url": "https://avatars0.githubusercontent.com/u/11898652?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>厉害</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2017-12-16T02:11:13.263Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a34bad4d92f2f5b185acf01",
            "author": {
                "loginname": "weichunpeng",
                "avatar_url": "https://avatars1.githubusercontent.com/u/13563689?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/axetroy\">@axetroy</a> 这个2-5倍是相比于客户端渲染而言的，另外这是我们项目的一个采样数据，影响性能的因素实在太多了，不能一概而论。\n可以听一下我在D2的分享《打造高可靠与高性能的React同构解决方案》, 直播回放地址我回头贴出来。主要讲的是，复杂场景下，如何将同构性能提升10倍以上。\n<a href=\"https://github.com/alibaba/beidou/blob/master/packages/beidou-docs/articles/high-performance-isomorphic-app.md\">《React同构与极致的性能优化》</a> 这篇文章里面记录了部分D2分享内容。</p>\n</div>",
            "ups": [
                "4f447c2f0a8abae26e01b27d",
                "5a3e6abfd92f2f5b185ad176"
            ],
            "create_at": "2017-12-16T06:19:00.742Z",
            "reply_id": "5a33ec849807389a1809f41a",
            "is_uped": false
        },
        {
            "id": "5a34cee4d92f2f5b185acf0f",
            "author": {
                "loginname": "WangXiaoyYing",
                "avatar_url": "https://avatars1.githubusercontent.com/u/17040010?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>同问</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a",
                "5a2d29da9807389a1809f29e"
            ],
            "create_at": "2017-12-16T07:44:36.858Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3a258dd1536726354b7f72",
            "author": {
                "loginname": "MuffinK",
                "avatar_url": "https://avatars0.githubusercontent.com/u/10372173?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>准备试用以下&lt;br/&gt;&lt;br/&gt;&lt;a class=“form” href=“<a href=\"https://github.com/shinygang/Vue-cnodejs\">https://github.com/shinygang/Vue-cnodejs</a>”&gt;I‘m webapp-cnodejs-vue&lt;/a&gt;</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-20T08:55:41.175Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3a5f5dd92f2f5b185ad08c",
            "author": {
                "loginname": "yt-theme",
                "avatar_url": "https://avatars2.githubusercontent.com/u/17000357?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>666</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-20T13:02:21.002Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3a5fafd1536726354b7f87",
            "author": {
                "loginname": "yt-theme",
                "avatar_url": "https://avatars2.githubusercontent.com/u/17000357?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>好的</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-20T13:03:43.316Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3b5a418230827a1829393e",
            "author": {
                "loginname": "SuperZee",
                "avatar_url": "https://avatars3.githubusercontent.com/u/11755669?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>egg-sequelize 如何向 Controller 一样支持多级目录？</p>\n</div>",
            "ups": [
                "5a38adeb8230827a1829386e"
            ],
            "create_at": "2017-12-21T06:52:49.496Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3b5a4e9807389a1809f5c6",
            "author": {
                "loginname": "SuperZee",
                "avatar_url": "https://avatars3.githubusercontent.com/u/11755669?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a></p>\n</div>",
            "ups": [],
            "create_at": "2017-12-21T06:53:02.750Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3b5eecd92f2f5b185ad0c8",
            "author": {
                "loginname": "SuperZee",
                "avatar_url": "https://avatars3.githubusercontent.com/u/11755669?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>目前发现定义在 app/model 下面的 xxx.js 可以在 <a href=\"http://this.app.model.xxx\">this.app.model.xxx</a> 访问到，但是定义在  app/model/baes/user.js 目录下的就不能在 this.app.mode.user 访问到了，只能通过 models 来访问</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-21T07:12:44.422Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a3baa83d1536726354b7fe4",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/SuperZee\">@SuperZee</a> 暂时还不支持，等死月实现，有个 ISSUE 可以关注下</p>\n</div>",
            "ups": [
                "59e54bfdeab6a653687401e5",
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-21T12:35:15.621Z",
            "reply_id": "5a3b5eecd92f2f5b185ad0c8",
            "is_uped": false
        },
        {
            "id": "5a3cdad8d1536726354b804d",
            "author": {
                "loginname": "panchangzhi",
                "avatar_url": "https://avatars2.githubusercontent.com/u/19465824?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>哇偶，想什么来什么。最近，自己捣鼓搭建，各种搜资料，看大神奇技淫巧。</p>\n</div>",
            "ups": [
                "59acb8859e95202d08c91f0a"
            ],
            "create_at": "2017-12-22T10:13:44.305Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a4445e8d92f2f5b185ad2c2",
            "author": {
                "loginname": "matthiaschen",
                "avatar_url": "https://avatars3.githubusercontent.com/u/10129875?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>赞一个</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-28T01:16:24.052Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a44ad0ad92f2f5b185ad2ff",
            "author": {
                "loginname": "AkiraSun",
                "avatar_url": "https://avatars1.githubusercontent.com/u/21287041?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>egg 有没有钉钉交流群？</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-28T08:36:26.574Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a45033bd92f2f5b185ad323",
            "author": {
                "loginname": "wangqian6151",
                "avatar_url": "https://avatars1.githubusercontent.com/u/11264495?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>加油赞一个</p>\n</div>",
            "ups": [
                "5a37414ad92f2f5b185acf80"
            ],
            "create_at": "2017-12-28T14:44:11.653Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a4520e9f320ae9f0dd5816a",
            "author": {
                "loginname": "wangqian6151",
                "avatar_url": "https://avatars1.githubusercontent.com/u/11264495?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>加油赞一个</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-28T16:50:49.488Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a4520edd92f2f5b185ad32c",
            "author": {
                "loginname": "wangqian6151",
                "avatar_url": "https://avatars1.githubusercontent.com/u/11264495?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>加油赞一个</p>\n</div>",
            "ups": [
                "58cf56bbda3a9843406a468c"
            ],
            "create_at": "2017-12-28T16:50:53.002Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a471dba9807389a1809f851",
            "author": {
                "loginname": "shenjianzch",
                "avatar_url": "https://avatars0.githubusercontent.com/u/7286498?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>egg api全英文的 好尴尬啊<a href=\"/user/atian25\">@atian25</a> 有没中文的 原谅我的英文不是很好</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-30T05:01:46.031Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a473fbc9807389a1809f855",
            "author": {
                "loginname": "waitingsong",
                "avatar_url": "https://avatars2.githubusercontent.com/u/1763067?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/shenjianzch\">@shenjianzch</a> 做软件开发的不会英文。。。</p>\n</div>",
            "ups": [],
            "create_at": "2017-12-30T07:26:52.523Z",
            "reply_id": "5a471dba9807389a1809f851",
            "is_uped": false
        },
        {
            "id": "5a488e70f320ae9f0dd581f1",
            "author": {
                "loginname": "shenjianzch",
                "avatar_url": "https://avatars0.githubusercontent.com/u/7286498?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/waitingsong\">@waitingsong</a> 那不是说不会 只是说看起来有点吃力 毕竟中午看起来要顺畅的多</p>\n</div>",
            "ups": [
                "58cf56bbda3a9843406a468c"
            ],
            "create_at": "2017-12-31T07:14:56.349Z",
            "reply_id": "5a473fbc9807389a1809f855",
            "is_uped": false
        },
        {
            "id": "5a4a14058230827a18293c08",
            "author": {
                "loginname": "wenchangshou2",
                "avatar_url": "https://avatars3.githubusercontent.com/u/7298188?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>&lt;p style=“text-align:right”&gt;&lt;a href=“<a href=\"https://github.com/lumia2046/cnode\">https://github.com/lumia2046/cnode</a>”&gt; — — 来自lumia2046-react-cnode&lt;/a&gt;&lt;/p&gt;</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-01T10:57:09.910Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a4c50619ea8f8bc490e6444",
            "author": {
                "loginname": "andylei18",
                "avatar_url": "https://avatars2.githubusercontent.com/u/8412644?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a> 加入 node_modules 这个组织需要什么样的条件？</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-03T03:39:13.902Z",
            "reply_id": "5a2bf30a8230827a182935c4",
            "is_uped": false
        },
        {
            "id": "5a4c5341ebc575dc49b270a3",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/AkiraSun\">@AkiraSun</a> 没有，我们比较崇尚异步交流。我这边可以考虑建一个自助群，但只用于开发者之间的自助交流。 egg 团队的同学都有自己业务的，不会参与实时答疑。</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-03T03:51:29.647Z",
            "reply_id": "5a44ad0ad92f2f5b185ad2ff",
            "is_uped": false
        },
        {
            "id": "5a4c5368ebc575dc49b270a6",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/shenjianzch\">@shenjianzch</a> 学吧，又没几个单词，人不逼下自己都不知道自己多牛逼</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-03T03:52:08.415Z",
            "reply_id": "5a471dba9807389a1809f851",
            "is_uped": false
        },
        {
            "id": "5a4c53c099d207fa49f5cb64",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/andylei18\">@andylei18</a> 这样要问 苏千 了，应该是熟悉开源项目协作规范，代码规范，持续参与开源项目吧</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-03T03:53:36.066Z",
            "reply_id": "5a4c50619ea8f8bc490e6444",
            "is_uped": false
        },
        {
            "id": "5a4f94d7a89c475d7ea4fa26",
            "author": {
                "loginname": "lipengzhou",
                "avatar_url": "https://avatars2.githubusercontent.com/u/23165266?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>恭喜恭喜</p>\n<p>来自酷炫的 <a href=\"https://github.com/TakWolf/CNode-Material-Design\">CNodeMD</a></p>\n</div>",
            "ups": [],
            "create_at": "2018-01-05T15:08:07.768Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a4fcd29a3692d014f4f1242",
            "author": {
                "loginname": "Alexerx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/22076610?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>我要试试用egg去参加服务外包比赛了🌝</p>\n<p>来自酷炫的 <a href=\"https://github.com/TakWolf/CNode-Material-Design\">CNodeMD</a></p>\n</div>",
            "ups": [
                "4f447c2f0a8abae26e01b27d"
            ],
            "create_at": "2018-01-05T19:08:25.191Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a50a85799d207fa49f5cc8a",
            "author": {
                "loginname": "ZirkleTsing",
                "avatar_url": "https://avatars3.githubusercontent.com/u/12378910?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>厉害</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-06T10:43:35.852Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a50b81da89c475d7ea4fa7c",
            "author": {
                "loginname": "huilinqiu",
                "avatar_url": "https://avatars2.githubusercontent.com/u/23007559?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><blockquote>\n<blockquote>\n<p>正有兴趣去看看egg,期待有惊喜<img src=\"//dn-cnode.qbox.me/Fsq2OElq_ND3jGzDmfjzG5H9gp4y\" alt=\"usereg.png\"></p>\n</blockquote>\n</blockquote>\n</div>",
            "ups": [],
            "create_at": "2018-01-06T11:50:53.199Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a529b55a3692d014f4f12a8",
            "author": {
                "loginname": "songyi199111",
                "avatar_url": "https://avatars1.githubusercontent.com/u/13469073?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>学习了</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-07T22:12:37.393Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a52f3eaa3692d014f4f12bf",
            "author": {
                "loginname": "frank320",
                "avatar_url": "https://avatars3.githubusercontent.com/u/20333833?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>赞赞赞</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-08T04:30:34.788Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a52fec3a89c475d7ea4fada",
            "author": {
                "loginname": "zwkukumaomao",
                "avatar_url": "https://avatars2.githubusercontent.com/u/6367348?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>不错 初来乍到 希望越做越好</p>\n<p>来自酷炫的 <a href=\"https://github.com/TakWolf/CNode-Material-Design\">CNodeMD</a></p>\n</div>",
            "ups": [],
            "create_at": "2018-01-08T05:16:51.751Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a543390a3692d014f4f1308",
            "author": {
                "loginname": "Linbubin",
                "avatar_url": "https://avatars0.githubusercontent.com/u/19225429?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>兹次</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-09T03:14:24.631Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a543e60afa0a121784a8a91",
            "author": {
                "loginname": "hhx311",
                "avatar_url": "https://avatars0.githubusercontent.com/u/13504104?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>666\n\r&lt;br&gt;&lt;br&gt;来自&lt;a href=“<a href=\"https://lzxb.github.io/react-cnode/\">https://lzxb.github.io/react-cnode/</a>” target=&quot;_blank&quot;&gt;react-cnode手机版&lt;/a&gt;</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-09T04:00:32.986Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5829d5a3692d014f4f13f9",
            "author": {
                "loginname": "shenjianzch",
                "avatar_url": "https://avatars0.githubusercontent.com/u/7286498?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a> 我想用this.app.curl()去请求的时候 封装一层 就是如果有token 我就带着没有我就不带 怎么做啊 类似这样this.app.curl(url,{\nheaders:{\n\ttoken:this.ctx.session.token\n}\n})\n不然的话只能每个请求都都要一个配置headers的</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-12T03:21:57.535Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5830549d371d4a059eea4c",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>自己在 <code>app/extend/context.js</code> 中封装一个方法即可</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-12T03:49:40.653Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5966ffafa0a121784a8b84",
            "author": {
                "loginname": "CokeWithIce",
                "avatar_url": "https://avatars2.githubusercontent.com/u/10985971?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>感觉17年发布的egg。现在就更新了？阿里的程序员怕是吐血更新。。。\n刚学玩express4再看egg怕是要挂了。。。</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-13T01:55:11.650Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a59b5e29288dc8153287dee",
            "author": {
                "loginname": "Songqunlong",
                "avatar_url": "https://avatars3.githubusercontent.com/u/22027672?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>666     —from <a href=\"https://github.com/mov1er/cnode-code\">Vue + Muse-UI</a></p>\n</div>",
            "ups": [],
            "create_at": "2018-01-13T07:31:46.373Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5c632f9288dc8153287e31",
            "author": {
                "loginname": "web-css",
                "avatar_url": "https://avatars2.githubusercontent.com/u/34559074?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><strong>jkljkllkj</strong>\n<em>asfaf</em>\n<strong>ffd</strong><img src alt=\"alt\"></p>\n<table>\n<thead>\n<tr>\n<th>![alt](column1</th>\n<th>column2</th>\n<th>column3</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n<tr>\n<td>-------</td>\n<td>-------</td>\n<td>-------</td>\n</tr>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n<tr>\n<td>column1</td>\n<td>column2</td>\n<td>column3</td>\n</tr>\n</tbody>\n</table>\n<p>)</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-15T08:15:43.847Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5ec565a3692d014f4f1518",
            "author": {
                "loginname": "suntopo",
                "avatar_url": "https://avatars0.githubusercontent.com/u/5196122?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a> 看了eggjs源码，感觉还有多复杂的，类的抽象，继承以及方法的重载大量在运用，刚开始看的时候，很容易被绕晕，请问在开发eggjs的时候，会不会画UML图或时序图之类的帮助开发？</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-17T03:39:17.270Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5ec6f4afa0a121784a8ca0",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/suntopo\">@suntopo</a></p>\n<blockquote>\n<p>多复杂的，类的抽象，继承以及方法的重载大量在运用</p>\n</blockquote>\n<p>具体指？</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-17T03:45:56.458Z",
            "reply_id": "5a5ec565a3692d014f4f1518",
            "is_uped": false
        },
        {
            "id": "5a5ecbff9288dc8153287ebb",
            "author": {
                "loginname": "suntopo",
                "avatar_url": "https://avatars0.githubusercontent.com/u/5196122?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a> 以agent_worker中的loader为例，继承关系Agent-&gt;EggApplication-&gt;EggCore-&gt;Koa</p>\n<p>在实例化Agent的时候，从EggCore中constructor方法调用Agent中的get [EGG_LOADER]方法</p>\n<p>当时在看代码的时候没有留意到Agent中有重写这个方法，所以纠结里一段时间，感觉要是有个UML图或时序图之类，可以让开发者比较容易的感受到egg的运转。</p>\n<p>另外，里面抽象的类很多，一下也无法在脑袋里建立这样一个蓝图，当初大神们在开发egg的时候，是否有这样的图来指导或协助多人开发？</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-17T04:07:27.269Z",
            "reply_id": "5a5ec6f4afa0a121784a8ca0",
            "is_uped": false
        },
        {
            "id": "5a5ee0a99288dc8153287ec2",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/suntopo\">@suntopo</a> 这块当时是 <a href=\"/user/popomore\">@popomore</a> 一人搞定的，应该没有，原始讨论在：<a href=\"https://github.com/eggjs/egg/issues/19\">https://github.com/eggjs/egg/issues/19</a></p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251"
            ],
            "create_at": "2018-01-17T05:35:37.641Z",
            "reply_id": "5a5ecbff9288dc8153287ebb",
            "is_uped": false
        },
        {
            "id": "5a5ee0eea3692d014f4f151e",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>这几个继承我觉得还好了， Koa 之上加一个 loader 规范就是 EggCore，专注于 loader 这一层的基础规范，然后 Egg 是再上一层的整合。</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-17T05:36:46.423Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5ee4929288dc8153287ece",
            "author": {
                "loginname": "suntopo",
                "avatar_url": "https://avatars0.githubusercontent.com/u/5196122?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/atian25\">@atian25</a> 单看egg-core的确是很简单，我开始写koa时都是手动load，后来每个文件夹里都写里个index.js自动load当前文件夹中的文件，发现类似loader的雏形。</p>\n<blockquote>\n<p>然后 Egg 是再上一层的整合</p>\n</blockquote>\n<p>再往上走就感觉开始考验智商了，看了eeg，egg-cluster发现原来还可以这样玩，不愧是大牛，egg带来的启发很大，真赞。</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-17T05:52:18.226Z",
            "reply_id": "5a5ee0eea3692d014f4f151e",
            "is_uped": false
        },
        {
            "id": "5a5eea0a9288dc8153287ed3",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>Egg 上面还有的，我们支持框架定制。\n像我这边的关系就是：</p>\n<pre class=\"prettyprint language-js\"><code>Koa -&gt; Egg -&gt; @ali&#x2F;egg (阿里 Egg 基础框架) -&gt; @ali&#x2F;nut (UC Egg 基础框架)-&gt; @ali&#x2F;larva (阿里游戏 Egg 基础框架)\n</code></pre></div>",
            "ups": [],
            "create_at": "2018-01-17T06:15:38.006Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a5eea7c9d371d4a059eeb81",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/suntopo\">@suntopo</a> 看完这么多源码了啊，不打算写篇文章么？</p>\n</div>",
            "ups": [
                "5a67dea99288dc81532880f2"
            ],
            "create_at": "2018-01-17T06:17:32.867Z",
            "reply_id": "5a5ee4929288dc8153287ece",
            "is_uped": false
        },
        {
            "id": "5a6043009d371d4a059eebeb",
            "author": {
                "loginname": "zuoyi615",
                "avatar_url": "https://avatars2.githubusercontent.com/u/16532703?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>官网文档没看见操作mongoDB的插件呢</p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080"
            ],
            "create_at": "2018-01-18T06:47:28.696Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a6047569288dc8153287f3e",
            "author": {
                "loginname": "atian25",
                "avatar_url": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/zuoyi615\">@zuoyi615</a> <a href=\"https://github.com/eggjs/egg-mongoose\">https://github.com/eggjs/egg-mongoose</a></p>\n</div>",
            "ups": [
                "5a6687719288dc8153288080",
                "5a66884bce45d44045146251"
            ],
            "create_at": "2018-01-18T07:05:58.738Z",
            "reply_id": "5a6043009d371d4a059eebeb",
            "is_uped": false
        },
        {
            "id": "5a616c399288dc8153287f86",
            "author": {
                "loginname": "zuoyi615",
                "avatar_url": "https://avatars2.githubusercontent.com/u/16532703?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>@\tatian25 谢谢</p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251"
            ],
            "create_at": "2018-01-19T03:55:37.263Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a682053afa0a121784a8f17",
            "author": {
                "loginname": "sananiki",
                "avatar_url": "https://avatars0.githubusercontent.com/u/12467779?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>good</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-24T05:57:39.665Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a69810fce45d44045146364",
            "author": {
                "loginname": "five6",
                "avatar_url": "https://avatars1.githubusercontent.com/u/21968901?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p><a href=\"/user/beliefgp\">@beliefgp</a> 赞赞赞</p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251"
            ],
            "create_at": "2018-01-25T07:02:39.250Z",
            "reply_id": "5a24c5921c0db2f94a3aee7d",
            "is_uped": false
        },
        {
            "id": "5a6aede99d371d4a059eeed3",
            "author": {
                "loginname": "hdl3951846",
                "avatar_url": "https://avatars0.githubusercontent.com/u/34757653?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>good</p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251"
            ],
            "create_at": "2018-01-26T08:59:21.249Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a6b0719afa0a121784a9040",
            "author": {
                "loginname": "xiaomi915",
                "avatar_url": "https://avatars1.githubusercontent.com/u/35682297?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>good</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-26T10:46:49.220Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a6b104a9d371d4a059eeee3",
            "author": {
                "loginname": "15225594476",
                "avatar_url": "https://avatars3.githubusercontent.com/u/34757602?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>good</p>\n</div>",
            "ups": [
                "5a66884bce45d44045146251"
            ],
            "create_at": "2018-01-26T11:26:02.345Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a6e83bfafa0a121784a90be",
            "author": {
                "loginname": "xiaomi915",
                "avatar_url": "https://avatars1.githubusercontent.com/u/35682297?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>goog</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-29T02:15:27.163Z",
            "reply_id": null,
            "is_uped": false
        },
        {
            "id": "5a6e8ccb9288dc815328830e",
            "author": {
                "loginname": "lingliZhang888",
                "avatar_url": "https://avatars1.githubusercontent.com/u/34758398?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>9999</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-29T02:54:03.620Z",
            "reply_id": "4f447c2f0a8abae26e01b27d",
            "is_uped": false
        },
        {
            "id": "5a6f4973ce45d440451464dc",
            "author": {
                "loginname": "hc3001",
                "avatar_url": "https://avatars2.githubusercontent.com/u/27906237?v=4&s=120"
            },
            "content": "<div class=\"markdown-text\"><p>沙发</p>\n</div>",
            "ups": [],
            "create_at": "2018-01-29T16:18:59.929Z",
            "reply_id": null,
            "is_uped": false
        }
    ],
    "is_collect": false
}