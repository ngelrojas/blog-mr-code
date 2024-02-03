import React from "react";
import LogoMrCodeDark from '../../assets/codedark.svg';
import {LogoProps} from "../../types/utils.interface";

const MrCodeLogoDark: React.FC<LogoProps> = ({theme}) => {

    return (
        <div className="flex-shrink-0">
            <a href="/">
                <img src={LogoMrCodeDark} className={`w-14 h-14 ${theme === 'light' ? 'bg-white' : 'bg-footer-dark'}`}
                     alt="mr-code"/>
            </a>
        </div>
    )
}

export default MrCodeLogoDark;