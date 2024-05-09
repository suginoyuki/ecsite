new Splide(".splide").mount();

document.addEventListener("DOMContentLoaded", function () {
  // メインスライダー
  const main = new Splide(".splide", {
    fixedWidth: 600,
    fixedHeight : 300,
    perPage: 1,
    perMpve: 1,
    gap:40,
    type: "slide",
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pagination: false, // ページネーション非表示
    arrows: true, // 矢印表示
  });

  // サムネイル
  const thumbnails = new Splide(".thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight : 30,
    type: "slide", // スライドのループさせる
    perPage: 3, // サムネイルの表示枚数
    pagination: false, // ページネーション非表示
    isNavigation: true, // 他のスライダーのナビゲーションとしてそれぞれのスライドをクリック可能にする
    focus: "center", // アクティブなスライドを中央寄せ
    arrows: false, // 矢印非表示
  });
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
