import React from 'react'

export default function Menu() {
  return (
    <>
  {/* Thanh menu */}
  <div className="header_menu">
    <a className="logo" href="SICULAPET.html">
      <img src="IMG/pet.png" alt="" />
    </a>
    <div className="search">
      <input type="text" name="" id="" placeholder="Tìm kiếm trên Chợ Pet ?" />
    </div>
    <div className="contact">
      <div className="contact_box">
        <div className="contact_item">
          <a className="ti-calendar" />
        </div>
        <h> Tin Tức</h>
      </div>
      <div className="contact_box">
        <div className="contact_item">
          <a className="ti-write" />{" "}
        </div>
        <h> Đăng Tin </h>
      </div>
      <div className="contact_box">
        <div className="contact_item">
          {" "}
          <a className="ti-user" />
        </div>
        <h> Đăng Nhập </h>
      </div>
    </div>
  </div>
  {/* Hình ảnh content AND Menu choice  */}
  <div className="Drop_Menu">
    <div className="dropdown">
      <button className="dropbtn">Chó</button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <div className="column_left">
              <img src="IMG/GIF/DOG.gif" alt="" />
            </div>
            <div className="column_right">
              <h3>CHÓ</h3>
              <div className="content_choice">
                <li>
                  <a href="content_chopug.html">Chó Pug</a>
                </li>
                <li>
                  <a href="content_chopoodle.html">Chó Poodle</a>
                </li>
                <li>
                  <a href="content_choalaska.html">Chó Alaska</a>
                </li>
                <li>
                  <a href="content_chonhat.html">Chó Nhật</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Mèo</button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <div className="column_left">
              <img src="IMG/GIF/CAT.gif" alt="" />
            </div>
            <div className="column_right">
              <h3>MÈO</h3>
              <div className="content_choice">
                <li>
                  <a href="content_meobatu.html">Mèo Ba Tư</a>
                </li>
                <li>
                  <a href="content_meoxiem.html">Mèo Xiêm</a>
                </li>
                <li>
                  <a href="content_meosphynx.html">Mèo Sphynx không lông</a>
                </li>
                <li>
                  <a href="content_meomuop.html">Mèo Mướp</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Cá</button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <div className="column_left">
              <img src="IMG/GIF/FISH.gif" alt="" />
            </div>
            <div className="column_right">
              <h3>CÁ</h3>
              <div className="content_choice">
                <li>
                  <a href="content_caneon.html">Cá Neon</a>
                </li>
                <li>
                  <a href="content_catetraxanh.html">Cá Tetra Xanh</a>
                </li>
                <li>
                  <a href="content_cabaymau.html">Cá Bảy Màu</a>
                </li>
                <li>
                  <a href="content_cabetta.html">Cá Betta</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Chim</button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <div className="column_left">
              <img src="IMG/GIF/BIRH.gif" alt="" />
            </div>
            <div className="column_right">
              <h3>CHIM</h3>
              <div className="content_choice">
                <li>
                  <a href="content_chimsao.html">Chim Sáo</a>
                </li>
                <li>
                  <a href="content_chimhoami.html">Chim Họa Mi</a>
                </li>
                <li>
                  <a href="content_chimvet.html">Chim Vẹt</a>
                </li>
                <li>
                  <a href="content_chimkhuyen.html">Chim Khuyên</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Thú Cưng Khác</button>
      <div className="dropdown-content">
        <div className="row">
          <div className="column">
            <div className="column_left">
              <img src="IMG/GIF/RAPIIT.gif" alt="" />
            </div>
            <div className="column_right">
              <h3>THÚ CƯNG KHÁC</h3>
              <div className="content_choice">
                <li>
                  <a href="content_chuot.html">Chuột Hamster</a>
                </li>
                <li>
                  <a href="content_tho.html">Thỏ</a>
                </li>
                <li>
                  <a href="content_nhim.html">Nhím</a>
                </li>
                <li>
                  <a href="content_soc.html">Sóc </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
