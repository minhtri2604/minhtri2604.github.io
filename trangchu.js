function myfunction1() {
    location.assign("http://127.0.0.1:5500/Sitemap.html")
}
function myfunction2() {
    location.assign("http://127.0.0.1:5500/kinhnghiemchongiay.html")
}
function myfunction3() {
    location.assign("http://127.0.0.1:5500/cachthucgiaohang.html")
}
function myfunction4() {
    location.assign("http://127.0.0.1:5500/chinhsachbaohanh.html")
}
function myfunction5() {
    location.assign("http://127.0.0.1:5500/huongdandoihang.html")
}


  // khai báo biến index và gán giá trị nó bằng 1/ /
  var index = 1
  showslider(index);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider(n) {
      showslider(index += n)
  }
  function showslider(n) {
      var i;
      var sliders = document.getElementsByClassName("myslider");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders.length) { index = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index = sliders.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders.length; i++) {
          sliders[i].style.display = "none"
      }
      sliders[index - 1].style.display = "block"
  }
  var index2 = 1
  showslider2(index2);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider2(n) {
      showslider2(index2 += n)
  }
  function showslider2(n) {
      var i;
      var sliders2 = document.getElementsByClassName("myslider2");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders2.length) { index2 = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index2 = sliders2.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders2.length; i++) {
          sliders2[i].style.display = "none"
      }
      sliders2[index2 - 1].style.display = "block"
  }
  var index3 = 1
  showslider3(index3);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider3(n) {
      showslider3(index3 += n)
  }
  function showslider3(n) {
      var i;
      var sliders3 = document.getElementsByClassName("myslider3");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders3.length) { index3 = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index3 = sliders3.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders3.length; i++) {
          sliders3[i].style.display = "none"
      }
      sliders3[index3 - 1].style.display = "block"
  }
  var index4 = 1
  showslider4(index4);

  //tạo 1 hàm funcontion có chức năng là cộng trang bằng cách truyền vào tham số n rồi tăng hoặc giảm biết index// 
  function plusslider4(n) {
      showslider4(index4 += n)
  }
  function showslider4(n) {
      var i;
      var sliders4 = document.getElementsByClassName("myslider4");
      // tham số n truyền vào mà lớn hơn độ dài của slider thì nó sẽ quay về vị trí thứ 1
      if (n > sliders4.length) { index4 = 1 }

      // nếu tham số n tryền vào mà nhỏ hơn 1 thì index sẽ bằng độ dài slider và sẽ bằng vị trí cuối cùng của độ dài
      if (n < 1) { index4 = sliders4.length }
      // chạy hết độ dài của slider rồi cho ẩn các thành phần
      for (i = 0; i < sliders4.length; i++) {
          sliders4[i].style.display = "none"
      }
      sliders4[index4 - 1].style.display = "block"
  }
  