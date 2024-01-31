import React, {Fragment, useContext} from "react";
import NavBar from "../../components/navBar";
import ContentFooter from "../../components/contentFooter";
import { WebSiteLayoutProps } from "../../types/utils.interface";
import {ThemeContext} from "../../themeContext";
import ChatBot from "../../components/chatBot";

export const WebSiteLayout:React.FC<WebSiteLayoutProps> = ({children}) => {
    const themeContext = useContext(ThemeContext);
    if(!themeContext) throw new Error('useThemeContext must be used within a ThemeProvider');
    const {theme} = themeContext;

    return(
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-pages'}`}>

            <Fragment>
                <NavBar />
                    {children}
                <ChatBot />
                <ContentFooter theme={theme} />
            </Fragment>
        </div>
    )
}