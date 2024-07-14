import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

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
        <Link to={'/'} className="logo"><img src="./Navbar/hil_logo.png" className="h-10" alt="Hil Logo" /></Link>
        <div ref={menuBtnRef} className="menu-btn">
          <div className="menu-btn__lines"></div>
        </div>
        <ul ref={menuItemsRef} className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to={'/'} className="menu-item">Home</Link></li>
          <li>
            <a href="#" className="menu-item">Corporate Overview</a>
            <ul className="dropdown-menu">
              <li><a href="/ck-birla" className="menu-item">The CK Birla Group</a></li>
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">About us</a>
                <ul className="dropdown-menu menu-right sample">
                  <li><Link to={'/about'} className="menu-item">About</Link></li>
                  <li><Link to={'/chairman-msg'} className="menu-item">Chairman’s Message</Link></li>
                  <li><Link to={'/ceo-msg'} className="menu-item">MD & CEO’s Message</Link></li>
                  {/* <li><Link to={'/financial'} className="menu-item">Financial Highlights</Link></li> */}
                  <li><Link to={'/human-capital'} className="menu-item">Human Capital</Link></li>
                  <li><Link to={'/social'} className="menu-item">Environment, Social and Governance</Link></li>
                  <li><Link to={'/bod'} className="menu-item">Board of Directors</Link></li>
                  <li><Link to={'/awards'} className="menu-item">Awards and Achievements</Link></li>
                </ul>
              </li>
              <li><Link to={'/value-creation'} className="menu-item">Legacy of Consistent Value Creation</Link></li>
              <li><Link to={'/portfolio'} className="menu-item">Portfolio of Consumer Offerings</Link></li>
              <li><Link to={'/polytech'} className="menu-item">Crestia Polytech (Topline) Acquisition</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-item">Financial Statements</a>
            <ul className="dropdown-menu">
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">Standalone</a>
                <ul className="dropdown-menu menu-left sample">
                  <li><Link to={'/auditor-report'} className="menu-item">Independent Auditor’s Report</Link></li>
                  <li><Link to={'/balance-sheet'} className="menu-item">Balance Sheet</Link></li>
                  <li><Link to={'/profit-loss'} className="menu-item">Statement of Profit and Loss</Link></li>
                  <li><Link to={'/cash-flow'} className="menu-item">Statement of Cash Flows</Link></li>
                  <li><Link to={'/change-in-equity'} className="menu-item">Statement of Changes In Equity</Link></li>
                  <li><Link to={'/financial-stats'} className="menu-item">Notes to the Financial Statements</Link></li>
                </ul>
              </li>
              <li className="dropdown dropdown-right">
                <a href="#" className="menu-item expand-btn">Consolidated</a>
                <ul className="dropdown-menu menu-left sample">
                  <li><Link to={'/ind-auditor'} className="menu-item">Independent Auditor’s Report</Link></li>
                  <li><Link to={'/balance-sheet'} className="menu-item">Balance Sheet</Link></li>
                  <li><Link to={'/profit-and-loss'} className="menu-item">Statement of Profit and Loss</Link></li>
                  <li><Link to={'/cash-flows'} className="menu-item">Statement of Cash Flows</Link></li>
                  <li><Link to={'/change-in-equity'} className="menu-item">Statement of Changes In Equity</Link></li>
                  <li><Link to={'/financial-stats'} className="menu-item">Notes to the Financial Statements</Link></li>
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
                  <li><Link to={'annual-meeting'} className="menu-item">Notice of 77th Annual General Meeting</Link></li>
                </ul>
              </li>
              {/* <li><a href="#" className="menu-item">Item 5</a></li> */}
            </ul>
          </li>
          {/* <li><a href="#" className="menu-item">Downloads</a></li> */}
        </ul>
      </header>
      
    </>
  );
};

export default Navbar;
