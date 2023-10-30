

import React from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap';
import './css/product.css'



export default function ProductDetail() {
    return (
        <section class="section-content padding-y bg">
        <div class="container">
    
        <article class="card">
            <div class="card-body">
                    <div class="row">
                        <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="card img-big-wrap">
                                        <a href="#"> <Image src="/images/product/tim.jpg" /></a>
                                    </div> 
                                    <div class="thumbs-wrap">
                                        <a href="#" class="item-thumb"> <Image src="/images/product/tim.jpg" /></a>
                                        <a href="#" class="item-thumb"> <Image src="/images/product/trang.jpg" /></a>
                                        <a href="#" class="item-thumb"> <Image src="/images/product/den.jpg" /></a>
                                        <a href="#" class="item-thumb"> <Image src="/images/product/vang.jpg" /></a>

                                    </div>
                                </article>
                        </aside>
                        <main class="col-md-6">
                            <article>
                                <a href="/" class="text-primary btn-link">Trang chủ</a> / <a href="#" class="text-primary btn-link">iPhone</a> 
                                <h3 class="title">iPhone 14 Pro Max 128GB</h3>
        
                                <hr />
                    
                                <div class="mb-3">
                                    <h6></h6>
                                    <ul class="list-dots mb-0">
                                        <li>Máy nguyên bản, đầy đủ VAT. Là máy quốc tế được nhập khẩu chính hãng.</li>
                                        <li>Hàng nguyên seal, chưa kích hoạt, đầy đủ bảo hành </li>
                                        <li>Kèm bộ sản phẩm chuẩn: Thân máy, cable, sách hưỡng dẫn, que lấy SIM</li>
                                        <li>Bảo hành 12 tháng chính hãng</li>
                                    </ul>
                                </div>
                                
                                <div class="form-group">
                                    <label class="color-picker">Chọn màu:</label>
                                    <div>
                                        <label class="color-choose">
                                            <input type="radio" name="option_color" value="option1" />
                                            <span>Tím</span>
                                        </label>
                                        <label class="color-choose">
                                            <input type="radio" name="option_color" value="option1" />
                                            <span>Trắng</span>
                                        </label>
                                        <label class="color-choose">
                                            <input type="radio" name="option_color" value="option1" />
                                            <span>Đen</span>
                                        </label>
                                        <label class="color-choose">
                                            <input type="radio" name="option_color" value="option1" />
                                            <span>Vàng</span>
                                        </label>  
                                    </div>            
                                </div>
                                <var>Giá niêm yết:</var>
                                <div class="mb-3">
                                    
                                    <var class="price h4" style={{color: 'red'}}>26.090.000đ</var> <br />
                                </div> 
        
                                <div class="mb-4">
                                    <a href="/cart" class="btn btn-muangay">Mua ngay</a>
                                    <a href="#" class="btn btn-themgio">Thêm vào giỏ hàng</a>
                                </div>
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        <article class="card mt-5">
        
            <div class="card-body">
                <div class="row">
                    <aside class="col-md-6">
                        <h5>Thông số kỹ thuật</h5>
                        <dl class="row">
                              <dt class="col-sm-3">Màn hình</dt>
                              <dd class="col-sm-9">6.7 inch, OLED, Super Retina XDR, 2796 x 1290 Pixels</dd>
        
                              <dt class="col-sm-3">Vi xử lý</dt>
                              <dd class="col-sm-9">Apple A16 Bionic</dd>
        
                              <dt class="col-sm-3">Camera</dt>
                              <dd class="col-sm-9">48.0 MP + 12.0 MP + 12.0 MP</dd>
        
                              <dt class="col-sm-3">Bộ nhớ</dt>
                              <dd class="col-sm-9">6GB RAM</dd>
                              
                              <dt class="col-sm-3">Dung lượng</dt>
                              <dd class="col-sm-9">128GB</dd>
                        </dl>
                    </aside>
                    <aside class="col-md-6">
                        <h5>Khuyễn Mãi</h5>
                        <ul class="list-check">
                            <li>Tặng sạc, cable nhanh 20W cao cấp</li>
                            <li>Tặng 1 lần thay pin miễn phí, 4 lần dán màn hình, ốp lưng.</li>
                            <li>Hỗ trợ 1 đổi 1 trong 12 tháng, đổi nhanh trong 48 tiếng.</li>
                            <li>Giảm thêm 200.000đ khi mua thêm phụ kiện.</li>
                            <li>Thu cũ iPhone VN/A giá cao lên đời iPhone mới.</li>
                        </ul>
                    </aside>
                </div> 
                <hr />
                <h3 class="intro">Giới thiệu về iPhone 14 Pro Max</h3>
                <h6>Tổng quan</h6>
                <p>
                iPhone 14 Pro Max là sản phẩm thuộc dòng iPhone 14 series 
                mà Apple vừa mới ra mắt với hàng loạt sự thay đổi và cải tiến mới.
                Máy sở hữu thiết kế vuông vức, sang trọng, tinh tế. Máy được trang 
                bị tấm nền Super Retina XDR mang lại chất lượng hình ảnh rõ nét đến
                từng chi tiết và màn hình chuyển sang thiết kế đục lỗ viên thuốc 
                nằm ngang thay thế cho màn hình tai thỏ.
                </p>
                <Image className="img-fluid-center" src="/images/product/3.jpg" />
                <p className="img-name">Thiết kế màn hình mới</p>
                <h6>Thiết kế</h6>
                <p>
                iPhone 14 Pro Max có thiết kế sang trọng, tinh tế, sở hữu khung viền 
                bằng thép không gỉ và mặt lưng kính sang trọng làm tăng thêm độ bền theo 
                thời gian cho máy. Ngoài ra, máy sở hữu cụm 3 camera đặt thành hình tam giác 
                hiện đại giống như thiết kế tiền nhiệm.
                </p>
                <Image className="img-fluid-center" src="/images/product/2.jpg" />
                <p className="img-name">Sở hữu khung viền bằng thép và mặt lưng kính</p>
                <h6>Màn hình</h6>
                <p>
                iPhone 14 Pro Max có màn hình LTPO có khả năng thay đổi tần số quét màn hình lên 
                đến 120Hz cho mọi chuyển động vô cùng mượt mà và thú vị. Được trang bị màn hình 
                với kích thước 6.7 inch đi kèm độ phân giải Super Retina XDR giúp cho mọi chi tiết 
                màn hình vô cùng sống động và sắc nét.
                </p>
                <Image className="img-fluid-center" src="/images/product/1.jpeg" />
                <p className="img-name">Màn hình viên thuốc hiện đại</p>

            </div> 
        </article>
        </div>
        
    
    </section>
    )
}

