/**
 * Created by yang on 2015/7/10.
 */
// ����ͼƬ�ϲ�����С���
fis.config.set('settings.spriter.csssprites.margin', 20);
fis.config.set('roadmap.path', [{
    reg: '**.css',
    useSprite: true
}]);

//���Ҫ���ݵͰ汾ie��ʾ͸��pngͼƬ����ʹ��pngquant��ΪͼƬѹ������
//����pngͼƬ͸��������ie�»���ʾ��ɫ����
//ʹ��spmx release����ʱ�����--optimize��-o����������Ч
//fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//����jshint���Ҫ�ų������ļ���Ĭ�ϲ����lib��jquery��backbone��underscore���ļ�
//ʹ��pure release����ʱ�����--lint��-l����������Ч
fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|backbone|underscore/i ]);

// ����simple���
fis.config.set('modules.postpackager', 'simple');

// ���ô������
fis.config.set('pack', {
    '/pkg/lib.js': [
        'js/lib/jquery.js',
        'js/lib/underscore.js',
        'js/lib/backbone.js',
        'js/lib/backbone.localStorage.js',
    ],
    // ����CSS�������CSS�����ͬʱ�����ͼƬ�ϲ�
    '/pkg/aio.css': '**.css'
});

fis.config.set('modules.preprocessor.js', 'annotate');
// ����simple����ɢ��Դ���Զ��ϲ�
 fis.config.set('settings.postpackager.simple.autoCombine', true);