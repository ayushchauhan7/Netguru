import React, { useEffect, useState } from "react";
import styles from "../style/navbar.module.css"; // Assuming you have a CSS module for styles

const menu = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "About us", href: "/about-us" },
  { label: "Insights", href: "/blog" },
];

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setAtTop(currentScroll < 50);
          setShow(currentScroll < 50 || currentScroll < lastScroll);
          setLastScroll(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [lastScroll]);

  return (
    <header
      className={
        styles.mainNavbar +
        " " +
        (atTop
          ? styles.transparent
          : show
          ? styles.visible
          : styles.hidden)
      }
    >
      <div className={styles.wrapper}>
        <a href="/" className={styles.logo}>
          <img
            src="https://www.netguru.com/hubfs/_N23/assets/logos/netguru.svg"
            alt="Netguru logo"
            width={130}
            height={25}
          />
        </a>
        <nav className={styles.menu}>
          {menu.map((item) => (
            <a key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/estimate-project"
          className={styles.button}
        >
          Get in touch
          <span className={styles.arrowIcon}></span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;