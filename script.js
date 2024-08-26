document.addEventListener('touchmove', function(event) {
    event.preventDefault(); // ページがスクロールするのを防ぐ

    const touch = event.touches[0]; // 最初のタッチを取得
    const circle = document.getElementById('circle');
    
    // タッチ位置に黒い丸を移動
    circle.style.left = touch.pageX + 'px';
    circle.style.top = touch.pageY + 'px';
}, { passive: false }); // passive: false は preventDefault() を有効にするために必要
