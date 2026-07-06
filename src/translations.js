/* eslint-disable quote-props */
/* eslint-disable max-len */
/**
 * Translation file for this resouce.
 *
 * Structure:
 * - interface: name/description used by GUI formatMessage
 * - extensions: block strings used by VM formatMessage
 * - blocks: Blockly.Msg overrides (none here)
 */

export default {
    'interface': {
        'en': {'videoSensing.name': 'Video Sensing', 'videoSensing.description': 'Sense motion with the camera.'},
        'ru': {'videoSensing.name': 'Видео распознавание', 'videoSensing.description': 'Распознай движение с видео камеры'},
        'zh-cn': {'videoSensing.name': '视频侦测', 'videoSensing.description': '使用摄像头侦测运动。'},
        'zh-tw': {'videoSensing.name': '視訊偵測', 'videoSensing.description': '使用攝影機偵測動作。'}
    },
    'extensions': {
        'en': {
            'videoSensing.categoryName': 'Video Sensing',
            'videoSensing.direction': 'direction',
            'videoSensing.motion': 'motion',
            'videoSensing.off': 'off',
            'videoSensing.on': 'on',
            'videoSensing.onFlipped': 'on flipped',
            'videoSensing.setVideoTransparency': 'set video transparency to [TRANSPARENCY]',
            'videoSensing.sprite': 'sprite',
            'videoSensing.stage': 'stage',
            'videoSensing.videoOn': 'video [ATTRIBUTE] on [SUBJECT]',
            'videoSensing.videoToggle': 'turn video [VIDEO_STATE]',
            'videoSensing.whenMotionGreaterThan': 'when video motion > [REFERENCE]'
        },
        'ru': {
            'videoSensing.categoryName': 'Видео Распознавание',
            'videoSensing.direction': 'направление',
            'videoSensing.motion': 'движение',
            'videoSensing.off': 'выключить',
            'videoSensing.on': 'включить',
            'videoSensing.onFlipped': 'включить в обратную',
            'videoSensing.setVideoTransparency': 'установить прозрачность видео  [TRANSPARENCY]',
            'videoSensing.sprite': 'спрайт',
            'videoSensing.stage': 'сцена',
            'videoSensing.videoOn': 'видео [ATTRIBUTE]  на [SUBJECT]',
            'videoSensing.videoToggle': 'включить видео [VIDEO_STATE]',
            'videoSensing.whenMotionGreaterThan': 'когда скорость видео > [REFERENCE]'
        },
        'zh-cn': {
            'videoSensing.categoryName': '视频侦测',
            'videoSensing.direction': '方向',
            'videoSensing.motion': '运动',
            'videoSensing.off': '关闭',
            'videoSensing.on': '开启',
            'videoSensing.onFlipped': '镜像开启',
            'videoSensing.setVideoTransparency': '将视频透明度设为[TRANSPARENCY]',
            'videoSensing.sprite': '角色',
            'videoSensing.stage': '舞台',
            'videoSensing.videoOn': '相对于[SUBJECT]的视频[ATTRIBUTE]',
            'videoSensing.videoToggle': '[VIDEO_STATE]摄像头',
            'videoSensing.whenMotionGreaterThan': '当视频运动 > [REFERENCE]'
        },
        'zh-tw': {
            'videoSensing.categoryName': '視訊偵測',
            'videoSensing.direction': '方向',
            'videoSensing.motion': '動作',
            'videoSensing.off': '關閉',
            'videoSensing.on': '開啟',
            'videoSensing.onFlipped': '翻轉',
            'videoSensing.setVideoTransparency': '視訊透明度設為 [TRANSPARENCY]',
            'videoSensing.sprite': '角色',
            'videoSensing.stage': '舞台',
            'videoSensing.videoOn': '[SUBJECT] 的視訊 [ATTRIBUTE]',
            'videoSensing.videoToggle': '視訊設為 [VIDEO_STATE]',
            'videoSensing.whenMotionGreaterThan': '當視訊動作 > [REFERENCE]'
        }
    },
    'blocks': {
        'en': {},
        'ru': {},
        'zh-cn': {},
        'zh-tw': {}
    }
};
