document.addEventListener('DOMContentLoaded', function () {
    function init(params) {
        var wavesurfer = WaveSurfer.create(WaveSurfer.util.extend({
            container: '#waveform'
        }, params));
        wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
        return wavesurfer;
    }

    var options = {
        height: 128,
        waveColor: '#fff',
        progressColor: 'rgba(0, 102, 153, 0.5)',
        cursorColor: '#fff',
        cursorWidth: 1,
        skipLength: 2,
        minPxPerSec: 20,
        pixelRatio: window.devicePixelRatio,
        fillParent: true,
        scrollParent: false,
        hideScrollbar: false,
        normalize: false,
        audioRate: 1,
        interact: true,
        splitChannels: false,
        autoCenter: true
    };

    var wavesurfer = init(options);

    var gui = new dat.GUI();
    Object.keys(options).forEach(function (key) {
        if (/color/i.test(key)) {
            var ctrl = gui.addColor(options, key);
        } else {
            ctrl = gui.add(options, key);
        }

        ctrl.onFinishChange = function () {
            wavesurfer.destroy();
            wavesurfer = init(options);
        };
    });
});
