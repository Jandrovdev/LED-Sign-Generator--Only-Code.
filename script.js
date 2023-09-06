document.getElementById('download-btn').addEventListener('click', function () {
    document.getElementById('download-btn').style.display = 'none';

    html2canvas(document.body, {
        scale: 8
    }).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'led_sign.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        document.getElementById('download-btn').style.display = 'block';
    });
});
