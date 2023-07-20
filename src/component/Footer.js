import React from 'react'

export default function Footer() {
  return (
    <div className="footer_pet">
  <div className="footer_contact">
    <div className="contact_box_center">
      <div className="item">
        <h3>TẢI ỨNG DỤNG CHỢ PET</h3>
        <img src="img/qr_code.png" alt="" />
      </div>
      <div className="item">
        <div className="item_h">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <h4>Liên hệ hỗ trợ</h4> <br />
          <h4>Những câu hỏi thường gặp</h4> <br />
          <h4>Chính sách bảo mật thông tin</h4> <br />
          <h4>Cơ chế kiếu nại</h4>
        </div>
      </div>
      <div className="item">
        <div className="item_h">
          <h3>VỀ CHÚNG TÔI</h3>
          <h4>Giới Thiệu</h4> <br />
          <h4>Tuyển dụng</h4> <br />
          <h4>Quy chế hoạt động</h4>
        </div>
      </div>
      <div className="item">
        <div className="item_h">
          <h3>LIỆN HỆ</h3>
          <h className="ti-angle-down" />
        </div>
      </div>
    </div>
    <span> Master page </span>
    <span> kết</span>
  </div>
  <div className="footer_address">
    <div className="address_box_center">
      <span>
        CÔNG TY TNHH DỊCH VỤ THÚ CƯNG CHOPET VIỆT NAM - Địa chỉ: Phòng 211 - Tòa
        F, 120 Hoàng Minh Thảo, Hòa Khánh Nam, Liên Chiểu, Đà Nẵng
      </span>{" "}
      <br />
      <span>
        Giấy ĐKKD số: 0315707307 do Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu
        ngày 29/05/2019
      </span>{" "}
      <br />
      <span>Email: hotro@chopet.vn - Đường dây nóng: 19002172</span>
    </div>
  </div>
</div>

  )
}
