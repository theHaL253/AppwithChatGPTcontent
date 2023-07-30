import React from 'react'
import Image from "next/image";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

type Props = {
    isDark?: boolean;
}
{/* SocialLinks is a components while {isDark} is a property inside
    We pass the value of isDark as false, so when that isDark false, it will add the feature "" to the component in line 20. Otherwise, it will add the value of brightness-0*/}
const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
        {/* href is for the link, target is for directing the link into new blank page, while we still standing at the current page, rel is standing for the relationship word, noreferrer means no content reference from this page to twitter link */}
        <a href='https://twitter.com' target='blank' rel='noreferrer'>
            <Image
                className={`${isDark ? "brightness-0": ""} hover:opacity-50`}
                alt="twitter"
                src={Twitter}
                width={20}
                height={20} 
            />
        </a>
        <a href='https://facebook.com' target='blank' rel='noreferrer'>
            <Image
                className={`${isDark ? "brightness-0": ""} hover:opacity-50`}
                alt="facebook"
                src={Facebook}
                width={20}
                height={20} 
            />
        </a>
        <a href='https://instagram.com' target='blank' rel='noreferrer'>
            <Image
                className={`${isDark ? "brightness-0": ""} hover:opacity-50`}
                alt="instagram"
                src={Instagram}
                width={20}
                height={20} 
            />
        </a>
        <a href='https://google.com' target='blank' rel='noreferrer'>
            <Image
                className={`${isDark ? "brightness-0": ""} hover:opacity-50`}
                alt="google"
                src={Google}
                width={20}
                height={20} 
            />
        </a>
        <a href='https://discord.com' target='blank' rel='noreferrer'>
            <Image
                className={`${isDark ? "brightness-0": ""} hover:opacity-50`}
                alt="discord"
                src={Discord}
                width={20}
                height={20} 
            />
        </a>
    </div>
  );
};

export default SocialLinks