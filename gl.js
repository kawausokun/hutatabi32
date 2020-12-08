onload = function() {
    // canvasエレメントを取得
    var c = document.getElementById('canvas');
    c.width = 500;
    c.height = 300;

    // webglコンテキストを取得
    var gl = c.getContext('webgl') || c.getContext('experimental-webgl');

    // canvasを黒でクリア(初期化)する
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT); //GL_COLOR_BUFFER_BIT	カラー バッファ
};



//var c = document.getElementById('canvas');
//c.width = 500;
//c.height = 300;
//var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
//gl.clear(gl.COLOR_BUFFER_BIT);
//gl.clearColor(0.0, 0.0, 0.0, 1.0);