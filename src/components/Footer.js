import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer font-small mdb-color pt-1">
      <div className="container text-center text-md-left">
        <hr className="hr-footer " />
        <div className="row text-center text-md-left mt-5 mb-5">
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2">
            {/* <h6 className="text-uppercase mb-4 font-weight-bold text-custom-dark">
            <img
              src="//openedu.urfu.ru/files/courses_catalog/UrFULogo1.svg"
              alt="..."
              className="footer-icon"
            />
            Ural Federal University
          </h6> */}
            <p className="text-custom-dark ">
              ФГАОУ ВО «УрФУ имени первого Президента России Б.Н.Ельцина»
              Институт технологий открытого образования
            </p>
          </div>
          <hr className="w-200 clearfix d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2">
            <h6 className="text-uppercase mb-4 font-weight-bold text-custom-dark">
              Полезные ссылки
            </h6>
            <p>
              <NavLink to="/privacy" className="text-neutral-regular">
                Политика конфиденциальности
              </NavLink>
            </p>
            <p>
              <NavLink to="/tech" className="text-neutral-regular">
                Технические требования
              </NavLink>
            </p>
          </div>
          <hr className="w-200 clearfix d-md-none" />
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2">
            <h6 className="text-uppercase mb-4 font-weight-bold text-custom-dark">
              Контакты
            </h6>
            <p className="text-neutral-regular">
              {/* <i className="fas fa-home mr-3"></i> */}
              Екатеринбург,ул. Мира д.19,каб.И-200
            </p>
            <p className="text-neutral-regular">
              {/* <i className="fas fa-envelope mr-3"></i> */}
              openedu@urfu.ru
            </p>
            <p className="text-neutral-regular">
              {/* <i className="fas fa-phone mr-3"></i> */}
              +7 (343) 374-58-42
            </p>
            <p className="text-neutral-regular">
              {/* <i className="fas fa-print mr-3"></i> */}
              +7 (343) 375-95-28
            </p>
          </div>
        </div>
        {/* <hr className="hr-footer" /> */}
        {/* <div className="d-flex align-items-center">
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-left text-custom-dark">
            © 2019 Copyright:
            <a href="http://itoo.urfu.ru/ru" className="text-custom-dark">
              <strong> Ural Federal University</strong>
            </a>
          </p>
        </div>
        <div className="col-md-5 col-lg-4 ml-lg-0">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a
                  href="/"
                  className="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="/"
                  className="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="/"
                  className="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="/"
                  className="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
