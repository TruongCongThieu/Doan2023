import React from 'react'

export default function Content() {
  return (
    <>
  {/*  eND*/}
  <div className="banner_content">
    <img src="img/BANNER.jpg" alt="" />
  </div>
  {/* Danh mục chức năng */}
  <div className="listpet">
    <h3> DANH MỤC THÚ CƯNG </h3>
    <div className="menu-grid-table">
      <a className="menu-grid" href="Buy_Pet.html">
        <img src="img/pet1.png" alt="" />
        <h> Mua Bán Thú Cưng </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet2.png" alt="" />
        <h> Phối giống cho thú </h>
      </a>
      <a className="menu-grid" href="Pet_Shop.html">
        <img src="img/pet3.png" alt="" />
        <h> Thú Y gần bạn </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet4.png" alt="" />
        <h> Cộng Đồng yêu thú </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet5.png" alt="" />
        <h> Cẩm nang thú cưng </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet6.png" alt="" />
        <h> Sản phẩm và dịch vụ </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet7.png" alt="" />
        <h> Sự kiện khuyến mãi </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet8.png" alt="" />
        <h> Mua Bán Thú Cưng </h>
      </a>
      <a className="menu-grid" href="Search_Information.html">
        <img src="img/pet9.png" alt="" />
        <h> Tra cứu thông tin </h>
      </a>
      <a className="menu-grid" href="#">
        <img src="img/pet10.png" alt="" />
        <h> Bảng giá chó mèo </h>
      </a>
    </div>
  </div>
  {/* Slide show Quảng Cáo */}
  <div id="slideshow">
    <div className="slide-next">
      <div className="slide">
        <img src="IMG/slide_show1.jpg" />
      </div>
      <div className="slide">
        <img src="IMG/Slide_show2.jpg" />
      </div>
      <div className="slide">
        <img src="IMG/slide_show3.jpg" />
      </div>
      <div className="slide">
        <img src="IMG/slide_show4.jpg" />
      </div>
    </div>
  </div>
  <div className="new_top">
    <div className="title_page">
      <h3> Tin rao nổi bật </h3>
    </div>
    <div className="feednew">
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Shiba.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Shiba tìm chủ</h>
          <span className="post_type_price"> 8.000.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Alaska.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Alaska bé cún</h>
          <span className="post_type_price"> 5.999.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Gau_Dan.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> GauDan nâu</h>
          <span className="post_type_price"> 11.699.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/poodle.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Ba bé poodle xinh xẻo </h>
          <span className="post_type_price"> 2.000.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Poodle_cow.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Poddle bò sữa</h>
          <span className="post_type_price"> 3.500.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Samoyed.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Alaska trắng nõn nà</h>
          <span className="post_type_price"> 2.199.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/shiba_thuanchung.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Shiba thuần chủng</h>
          <span className="post_type_price"> 6.000.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Frednchobulldog.webp" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Poddle trắng</h>
          <span className="post_type_price"> 1.200.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/Corgir.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Corgi chân ngắn thuần chủng</h>
          <span className="post_type_price"> 1.599.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
      <div className="feed_item">
        <div className="title_img">
          <img src="IMG/ALASKA_WHITE.jpg" alt="" />
        </div>
        <div className="title_box">
          <span className="post_type_title"> [Bán]</span>
          <h className="title"> Alaska tìm chủ nuôi</h>
          <span className="post_type_price"> 3.000.000 vnd</span>
          <h className="title_address">
            <i className="ti-user" />
            Tp. Đà Nẵng
          </h>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
