import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css"

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className={styles.footer}>
                <div>
                    <h2>Footer</h2>
                </div>
                <div>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus placerat dui, non volutpat lorem aliquam quis. Nam dignissim quam quis sodales posuere. Sed laoreet risus id urna fermentum tristique.</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Email:</li>
                        <li>Mobile:</li>
                    </ul>
                </div>
                <div>
                    <h3>Site</h3>
                    <p>Made by Cheftags</p>
                </div>
                <div className={styles.socials}>
                    <div className={styles.seperator}/>
                    <div className={styles.icons}>
                        <a href={"https://facebook.com"} target="_blank" rel="noreferrer">
                            <Image src={"/../public/images/facebook.svg"}
                                   width={80}
                                   height={80}
                                   alt={"facebook icon"}
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <Image src={"/../public/images/instagram.svg"}
                                   width={80}
                                   height={80}
                                   alt={"instagram icon"}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}