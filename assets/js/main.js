// new Splide(".splide").mount();

var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: 40,
  pagination: false, // ページネーション非表示
  focus: 'center',
})

splide.mount()


document.addEventListener("DOMContentLoaded", function () {
  // メインスライダー
  const main = new Splide(".splide");

  // サムネイル
  const thumbnails = new Splide('.thumbnail-carousel', {
    fixedWidth: 60,
    fixedHeight: 35,
    gap: 15,
    type: 'slide', // スライドのループさせる
    pagination: false, // ページネーション非表示
    isNavigation: true, // 他のスライダーのナビゲーションとしてそれぞれのスライドをクリック可能にする
    focus: 'center', // アクティブなスライドを中央寄せ
    arrows: false, // 矢印非表示
  })
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
