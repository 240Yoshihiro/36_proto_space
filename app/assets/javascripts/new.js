$(function(){
  // 画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
  $('#prototype_captured_images_attributes_0_content').change(function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        preview = $("#main_image_uploader").children("img");
        t = this;
    // 画像ファイル以外の場合は何もしない
    if(file.type.indexOf("image") < 0){
      return false;
    }
    // ファイル読み込みが完了した際のイベント登録
    reader.onload = (function(file) {
      return function(e) {
        //既存のプレビューを削除
        preview.empty();
        // .prevewの領域の中にロードした画像を表示するimageタグを追加
        preview.attr({
                  src: e.target.result,
                  height: "100%",
                  width:  "100%",
                  class:  "preview",
                  title:  file.name
                  });
      };
    })(file);
    reader.readAsDataURL(file);
  });

    $('#prototype_captured_images_attributes_1_content').change(function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        preview = $("#prototype_captured_images_attributes_1_content").siblings("img");
        t = this;
    if(file.type.indexOf("image") < 0){
      return false;
    }
    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.attr({
                  src: e.target.result,
                  height: "100%",
                  width:  "100%",
                  class:  "preview",
                  title:  file.name
                  });
      };
    })(file);
    reader.readAsDataURL(file);
  });

    $('#prototype_captured_images_attributes_2_content').change(function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        preview = $("#prototype_captured_images_attributes_2_content").siblings("img");
        t = this;
    if(file.type.indexOf("image") < 0){
      return false;
    }
    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.attr({
                  src: e.target.result,
                  height: "100%",
                  width:  "100%",
                  class:  "preview",
                  title:  file.name
                  });
      };
    })(file);
    reader.readAsDataURL(file);
  });

    $('#prototype_captured_images_attributes_3_content').change(function(e) {
    var file = e.target.files[0],
        reader = new FileReader(),
        preview = $("#prototype_captured_images_attributes_3_content").siblings("img");
        t = this;
    if(file.type.indexOf("image") < 0){
      return false;
    }
    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.attr({
                  src: e.target.result,
                  height: "100%",
                  width:  "100%",
                  class:  "preview",
                  title:  file.name
                  });
      };
    })(file);
    reader.readAsDataURL(file);
  });


});
