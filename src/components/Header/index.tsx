import React from 'react';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink';

export function Header() {

    

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink activeClassName={styles.active} href="/">
                    <a >
                        <img src="/images/logo.svg" alt="Logo ig.news" />
                    </a>
                </ActiveLink>


                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a >Home</a>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active} prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}