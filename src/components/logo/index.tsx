import React from "react";
import  LogoMrCodeLight from '../../assets/codelight.svg';
import { LogoProps} from "../../types/utils.interface";

const MrCodeLogo:React.FC<LogoProps> =({theme}) => {


    return (
        <div className="flex-shrink-0">
            <img src={LogoMrCodeLight} className={`w-14 h-14 ${theme === 'light' ? 'bg-header' : 'bg-footer-dark'}`}
                 alt="mr-code"/>
        </div>

    )
}
export default MrCodeLogo;