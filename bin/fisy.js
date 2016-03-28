#!/usr/bin/env node

var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var cli = new Liftoff({
    name: 'fisy',
    processTitle: 'fisy',
    moduleName: 'fisy',
    configName: 'fis-conf',

    // only js supported!
    extensions: {
        '.js': null
    }
});

cli.launch({
    cwd: argv.r || argv.root,
    configPath: argv.f || argv.file
}, function(env) {
    var fis;
    if (!env.modulePath) {
        fis = require('../');
    } else {
        fis = require(env.modulePath);
    }

    // ���ò������·�������Ȳ��ұ�����Ŀ����� node_modules
    // Ȼ�����ȫ�ֻ������氲װ�� fis3 Ŀ¼����� node_modules
    fis.set('system.localNPMFolder', path.join(env.cwd, 'node_modules/fisy'));
    fis.set('system.globalNPMFolder', path.dirname(__dirname));
    fis.cli.run(argv, env);
});
