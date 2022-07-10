import React, { Section } from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <section class="categories">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6 p-0">
                                <div class="categories__item categories__large__item set-bg">
                                    <img src="assets/img/categories/image_7.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg- col-md-6 col-sm-6 p-0">

                                        <div className="categories__item set-bg">
                                            <img src="assets/img/categories/image_2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="categories__item set-bg" data-setbg="assets/img/categories/image_6.jpg">
                                            <img src="assets/img/categories/image_6.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="categories__item set-bg" data-setbg="assets/img/categories/image_8.jpg">
                                            <img src="assets/img/categories/image_8.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                        <div className="categories__item set-bg" data-setbg="assets/img/categories/image_3.jpg">
                                            <img src="assets/img/categories/image_3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>

                <section className="banner set-bg" data-setbg="assets/img/banner/banner.png">
                    <a href="./index.html"><img src="assets/img/banner/banner.png" alt="" /></a>
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </section>
                <br></br>

                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="section-title">
                                    <h4>New product</h4>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".sofadudukan">Sofa Dudukan Type 1 </li>
                                    <li data-filter=".sofadudukan2">Sofa Dudukan Type 2</li>
                                    <li data-filter=".sofatempattidur">Sofa Tempat Tidur</li>
                                    <li data-filter=".sofajava">Sofa Java</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row property__gallery">
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofatempattidur">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg">
                                        <img src="assets/img/product/product_tdm.png" alt="" />
                                        <div className="label new">New</div>
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdm.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Tempat Tidur Mochi</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 3.500.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan2">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdtaylor.png">
                                        <img src="assets/img/product/product_tdtaylor.png" alt="" />
                                        <div className="label new">New</div>
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdtaylor.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="sofadtaylor.html"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="/sofadtaylor">Sofa Dudukan Taylor</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 3.249.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan2">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdvienna.png">
                                        <img src="assets/img/product/product_tdvienna.png" alt="" />
                                        <div className="label stockout">out of stock</div>
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdvienna.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="sofadvienna.html"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="/sofadvienna">Sofa Dudukan Vienna</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 3.899.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan2">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdtoril.png">
                                        <img src="assets/img/product/product_tdtoril.png" alt="" />
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdtoril.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="sofadvienna.html"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Dudukan Toril</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 2.899.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofatempattidur">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tddeacon.png">
                                        <img src="assets/img/product/product_tddeacon.png" alt="" />
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tddeacon.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Tempat Tidur Deacon</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 3.299.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan2 sofajava">
                                <div className="product__item sale">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdjava.png">
                                        <img src="assets/img/product/product_tdjava.png" alt="" />
                                        <div className="label sale">Sale</div>
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdjava.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Java</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 3.869.100 <span>Rp 3.869.100</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdhughes.png">
                                        <img src="assets/img/product/product_tdhughes.png" alt="" />
                                        <div className="label new">New</div>
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdhughes.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Dudukan Hughes </a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 2.500.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan">
                                <div className="product__item sale">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdtaby.png">
                                        <img src="assets/img/product/product_tdtaby.png" alt="" />
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdtaby.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Dudukan Taby</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 2.399.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan2">
                                <div className="product__item sale">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_tdzoey.png">
                                        <img src="assets/img/product/product_tdzoey.png" alt="" />
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_tdzoey.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Dudukan Zoey</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 2.399.000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix sofadudukan">
                                <div className="product__item sale">
                                    <div className="product__item__pic set-bg" data-setbg="assets/img/product/product_td1wina.png">
                                        <img src="assets/img/product/product_td1wina.png" alt="" />
                                        <ul className="product__hover">
                                            <li><a href="assets/img/product/product_td1wina.png" className="image-popup"><span className="arrow_expand"></span></a></li>
                                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                            <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Sofa Dudukan Type 1 Vienna</a></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">Rp 2.199.000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banner set-bg" data-setbg="assets/img/banner/banner3.jpeg">
                    <a href="./index.html"><img src="assets/img/banner/banner3.jpeg" alt="" /></a>
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </section><br></br>
                <section className="services spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-car"></i>
                                    <h6>Free Shipping</h6>
                                    <p>For all oder over Rp 1.000.000</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-money"></i>
                                    <h6>Money Back Guarantee</h6>
                                    <p>If good have Problems</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-support"></i>
                                    <h6>Online Support 24/7</h6>
                                    <p>Dedicated support</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="services__item">
                                    <i className="fa fa-headphones"></i>
                                    <h6>Payment Secure</h6>
                                    <p>100% secure payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="search-model">
                    <div class="h-100 d-flex align-items-center justify-content-center">
                        <div class="search-close-switch">+</div>
                        <form class="search-model-form">
                            <input type="text" id="search-input" placeholder="Search here....." />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home