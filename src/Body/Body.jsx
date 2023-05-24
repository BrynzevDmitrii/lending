import { BannerBlock } from "./components/BannerBlock/Banner";
import { TargetAudience } from "./components/TargetAudience/TargetAudience";
import React from "react";

import styles from "./style.module.scss";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { LearnBlock } from "./components/LearnBlock/LearnBlock";
import { SocialFollow } from "./components/SocialFollow/SocialFollow";
 
export const Body = () => {
    return (<section className={styles.body_wrapper}>
        <BannerBlock />  
        <ContactForm />
        <TargetAudience />
        <LearnBlock />
        <SocialFollow />
    </section>);
}
 
