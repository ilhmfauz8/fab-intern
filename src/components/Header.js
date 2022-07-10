import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="offcanvas-menu-overlay"></div>
                <div className="offcanvas-menu-wrapper">
                    <div className="offcanvas__close">+</div>
                    <ul className="offcanvas__widget">
                        <li><span className="icon_search search-switch"></span></li>
                        <li><a href="#"><span class="icon_heart_alt"></span>
                            <div className="tip">2</div>
                        </a></li>
                        <li><a href="#"><span class="icon_bag_alt"></span>
                            <div className="tip">2</div>
                        </a></li>
                    </ul>
                    <div className="offcanvas__logo">
                        <a href="./index.html"><img src="assets/img/logo.png" alt="" /></a>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                    <div className="offcanvas__auth">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </div>
                <header className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2">
                                <div className="header__logo">
                                    <a href="./index.html"><img src="assets/img/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <nav className="header__menu">
                                    <ul>
                                        <li className="active"><a href="./index.html">Home</a></li>

                                        <li><a href="#">Shop</a></li>

                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__right">
                                    <div className="header__right__auth">
                                        <a href="#">Login</a>
                                        <a href="#">Register</a>
                                    </div>
                                    <ul className="header__right__widget">
                                        <li><span className="icon_search search-switch"></span></li>
                                        <li><a href="#"><span className="icon_heart_alt"></span>
                                            <div className="tip">2</div>
                                        </a></li>
                                        <li><a href="#"><span className="icon_bag_alt"></span>
                                            <div className="tip">2</div>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="canvas__open">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
            </div>

        )
    }
}
export default Header