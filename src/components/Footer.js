import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
               <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="footer__about">
                    <div className="footer__logo">
                        <a href="./index.html"><img src="assets/img/logo.png" alt=""/></a>
                    </div>
                    <p>Perkenalkan, kami adalah Fabelio
                        Berdiri sejak tahun 2015, kami bergerak di bidang furnitur dan desain interior. Kami menyediakan berbagai furnitur mulai dari furnitur ruang tamu, ruang makan, kamar tidur, ruang kerja, hingga beragam dekorasi rumah. 
                        
                    </p>
                    <div className="footer__payment">
                        <a href="#"><img src="assets/img/payment/payment-1.png" alt=""/></a>
                        <a href="#"><img src="assets/img/payment/payment-2.png" alt=""/></a>
                        <a href="#"><img src="assets/img/payment/payment-3.png" alt=""/></a>
                        <a href="#"><img src="assets/img/payment/payment-4.png" alt=""/></a>
                        <a href="#"><img src="assets/img/payment/payment-5.png" alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-5">
                <div className="footer__widget">
                    <h6>LAYANAN PELANGGAN</h6>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Kebijakan Privasi</a></li>
                        <li><a href="#">Syarat dan Ketentuan</a></li>
                        <li><a href="#">Kebijakan Pengembalian</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget">
                    <h6>Account</h6>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Orders Tracking</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Wishlist</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-8">
                <div className="footer__newslatter">
                    <h6>Daftar & Dapatkan Voucher Diskon Rp50.000</h6>
                    <form action="#">
                        <input type="text" placeholder="Email"/>
                        <button type="submit" className="site-btn">Subscribe</button>
                    </form>
                    <div className="footer__social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                
                <div className="footer__copyright__text">
                    <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved</p>
                </div>
              
            </div>
        </div>
    </div>
</footer>
            </div>
        )
    }
}
export default Footer