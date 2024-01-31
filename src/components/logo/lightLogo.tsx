import React from "react";
import LogoMrCodeLight from '../../assets/codelight.svg';
import {LogoProps} from "../../types/utils.interface";

const MrCodeLogoLight: React.FC<LogoProps> = ({theme}) => {

    return (
        <div className="flex-shrink-0">
            <a href="/">
                <img src={LogoMrCodeLight} className={`w-14 h-14 ${theme === 'light' ? 'bg-header' : 'bg-header'}`}
                     alt="mr-code"/>
            </a>
        </div>
    )
}

export default MrCodeLogoLight;