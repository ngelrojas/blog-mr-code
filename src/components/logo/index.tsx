import React from "react";
// import  LogoMrCodeDark from '../../assets/codedark.svg';
import  LogoMrCodeLight from '../../assets/codelight.svg';

type Theme = 'light' | 'dark';
interface LogoProps {
    theme: Theme;
}
const MrCodeLogo:React.FC<LogoProps> =({theme}) => {


    return (
        <div className="flex-shrink-0">
            <img src={LogoMrCodeLight} className={`w-14 h-14 ${theme === 'light' ? 'bg-white': 'bg-white'}`} alt="mr-code"/>
        </div>

    )
}
export default MrCodeLogo;