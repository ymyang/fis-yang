fis.config.merge({
    urlPrefix: '',

    project: { charset: 'utf8'},

    roadmap: {
        path: [
            {
                reg: /^\/app\/components\/(.*)\/([\w\-_\.]*)\.(js)$/i,
                isMod: true,
                useSprite: false,
                useOptimizer: false,
                id: '$2'
            },
            {
                reg: /^\/app\/js\/(.*)\.(js|coffee)$/i,
                //��������ģ��ᱻjswrapper��װ
                isMod: true,
                useSprite: false,
                isAngular: true,
                //id��ȥ��sea-modules��.js��׺�м�Ĳ���
                id: '$1',
                //url: '/yliyun/sea-modules/app/$1.$2',
                //release: '/app/js/$1.$2'
            },
            {
                //.mixin.less��׺���ļ�
                reg: /\.mixin\.less$/,
                //�������������ã�������
                release: false
            },
            {
                //����js��css��coffee��less�ļ�
                reg: /\.(js|coffee|css|less)$/,
                //less��css�ļ�����csssprite����
                useSprite: true,
                //��Ҫ�ŵ�js��Դ����
                useMap: false
            },
            {
                //sea-modulesĿ¼�µ������ļ�
                reg: /^\/app\/js\/(.*)\.tpl$/i,
                isMod: false,
                useSprite: false,
                isHbsFile: true,
                isHtmlLike: true,
                release: false
            },
            {
                reg: /^\/app\/pages\/(.*)\.html/i,
                useMap: false,
                useCache: false
                //release: '/app/$1.html'
            },
            {
                //ǰ��ģ��
                reg: '**.tmpl',
                //������js�ļ���������ʶ��__inline, __uri����Դ��λ��ʶ
                isJsLike: true,
                //ֻ����Ƕ�����÷���
                release: false
            }
        ],
        ext: {
            //less���Ϊcss�ļ�
            less: 'css',
            //coffee���Ϊjs�ļ�
            coffee: 'js',
            // tpl ����Ϊjsģ�溯��
            tpl: 'js'
        }
    },

    modules: {//fis�������
        parser: {
            //.tmpl��׺���ļ�ʹ��fis-parser-utc�������
            tmpl: 'utc',
            //.coffee��׺���ļ�ʹ��fis-parser-coffee-script�������
            coffee: 'coffee-script',
            //.less��׺���ļ�ʹ��fis-parser-less�������
            less: 'less'
        },

        postprocessor: {
            js: ['jswrapper', 'require-async']
        },

        lint: {
            js: 'jshint'
        },

        postpackager: ['modjs', 'autoload', 'simple'],

        optimizer: {
            js: ['ng-annotate', 'uglify-js'],
            css: 'clean-css',
            png: 'png-compressor'
        }
    },

    settings: {
        parser: {
            'coffee-script': {
                //����coffee-script��װ������
                bare: true
            }
        },
        //lint: {
        //    jshint: {
        //        //�ų���lib��jquery��backbone��underscore�ļ��
        //        ignored: ['app/components/**', /jquery|backbone|underscore|\$|bootstrap/i],
        //        //ʹ�����ı���
        //        i18n: 'zh-CN'
        //    }
        //},
        postprocessor: {
            jswrapper: {
                //��fis��js��װ������������д
                type: 'amd'
            }
        },
        postpackager: {
            modjs: {
                subpath: 'pack/map.js'
            }
        }
    }
});
