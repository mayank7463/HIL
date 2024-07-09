import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlaysRef = useRef(null);
  const bodyRef = useRef(document.body);
  const menuBtnRef = useRef(null);
  const menuItemsRef = useRef(null);
  const expandBtnRefs = useRef([]);

  useEffect(() => {
    const body = bodyRef.current;
    const overlays = overlaysRef.current;
    const menuBtn = menuBtnRef.current;
    const menuItems = menuItemsRef.current;

    const liElems = menuItems.querySelectorAll('.menu-items li');
    liElems.forEach((elem) => {
      const childrenElems = elem.querySelectorAll('.dropdown-menu');
      if (childrenElems.length > 0) {
        elem.firstElementChild.classList.add('expand-btn');
        elem.classList.add('dropdown');
      }
    });

    function toggle() {
      body.classList.toggle('overflow');
      setIsOverlayActive(!isOverlayActive);
      setIsMenuOpen(!isMenuOpen);
    }

    const handleMenuClick = (e) => {
      e.stopPropagation();
      toggle();
    };

    const handleEscapeKey = (event) => {
      const key = event.key;
      if (key === 'Escape' && isMenuOpen) {
        toggle();
      }
    };

    const handleDocumentClick = (e) => {
      let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = isMenuOpen;
      if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
      }
    };

    const expandBtn = menuItems.querySelectorAll('.expand-btn');
    expandBtnRefs.current = Array.from(expandBtn);

    const handleExpandBtnClick = (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.currentTarget.classList.toggle('open');
        const submenu = e.currentTarget.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    };

    expandBtn.forEach((btn) => {
      btn.addEventListener('click', handleExpandBtnClick);
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        if (isMenuOpen) {
          toggle();
        }
        expandBtnRefs.current.forEach((btn) => {
          btn.classList.remove('open');
          const submenu = btn.nextElementSibling;
          submenu.style.display = ''; // Reset display style
        });
      }
    };

    menuBtn.addEventListener('click', handleMenuClick);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);

    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      expandBtn.forEach((btn) => {
        btn.removeEventListener('click', handleExpandBtnClick);
      });
    };
  }, [isMenuOpen, isOverlayActive]);

  return (
    <>
      <header className="navbar sticky">
        <a href="#" className="logo">Logo Brand</a>
        <div ref={menuBtnRef} className="menu-btn">
          <div className="menu-btn__lines"></div>
        </div>
        <ul ref={menuItemsRef} className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#" className="menu-item">Home</a></li>
          <li>
            <a href="#" className="menu-item">Corporate Overview</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="menu-item">The CK Birla Group</a></li>
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">About HIL</a>
                <ul className="dropdown-menu menu-right sample">
                  <li><a href="#" className="menu-item">About</a></li>
                  <li><a href="#" className="menu-item">Chairman’s Message</a></li>
                  <li><a href="#" className="menu-item">MD & CEO’s Message</a></li>
                  <li><a href="#" className="menu-item">Financial Highlights</a></li>
                  <li><a href="#" className="menu-item">Human Capital</a></li>
                  <li><a href="#" className="menu-item">Environment, Social and Governance</a></li>
                  <li><a href="#" className="menu-item">Board of Directors</a></li>
                  <li><a href="#" className="menu-item">Awards and Achievements</a></li>
                </ul>
              </li>
              <li><a href="#" className="menu-item">Legacy of Consistent Value Creation</a></li>
              <li><a href="#" className="menu-item">Portfolio of Consumer Offerings</a></li>
              <li><a href="#" className="menu-item">Crestia Polytech (Topline) Acquisition</a></li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-item">Financial Statements</a>
            <ul className="dropdown-menu">
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">Standalone</a>
                <ul className="dropdown-menu menu-left sample">
                  <li><a href="#" className="menu-item">Independent Auditor’s Report</a></li>
                  <li><a href="#" className="menu-item">Balance Sheet</a></li>
                  <li><a href="#" className="menu-item">Statement of Profit and Loss</a></li>
                  <li><a href="#" className="menu-item">Statement of Cash Flows</a></li>
                  <li><a href="#" className="menu-item">Statement of Changes In Equity</a></li>
                  <li><a href="#" className="menu-item">Notes to the Financial Statements</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">Consolidated</a>
                <ul className="dropdown-menu menu-left sample">
                  <li><a href="#" className="menu-item">Independent Auditor’s Report</a></li>
                  <li><a href="#" className="menu-item">Balance Sheet</a></li>
                  <li><a href="#" className="menu-item">Statement of Profit and Loss</a></li>
                  <li><a href="#" className="menu-item">Statement of Cash Flows</a></li>
                  <li><a href="#" className="menu-item">Statement of Changes In Equity</a></li>
                  <li><a href="#" className="menu-item">Notes to the Financial Statements</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">Statutory Reports</a>
                <ul className="dropdown-menu menu-left sample">
                  <li><a href="#" className="menu-item">Board’s Report & its Annexures</a></li>
                  <li><a href="#" className="menu-item">Management Discussion and Analysis</a></li>
                  <li><a href="#" className="menu-item">Corporate Governanace Report</a></li>
                  <li><a href="#" className="menu-item">Business Responsibility & Sustainability Report</a></li>
                </ul>
              </li>
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">Shareholders Information</a>
                <ul className="dropdown-menu menu-left sample">
                  <li><a href="#" className="menu-item">Notice of 77th Annual General Meeting</a></li>
                </ul>
              </li>
              {/* <li><a href="#" className="menu-item">Item 5</a></li> */}
            </ul>
          </li>
          <li><a href="#" className="menu-item">About</a></li>
        </ul>
      </header>
      <div ref={overlaysRef} className={`overlay ${isOverlayActive ? 'overlay--active' : ''}`}></div>
      <section className="hero"></section>
    </>
  );
};

export default Navbar;
