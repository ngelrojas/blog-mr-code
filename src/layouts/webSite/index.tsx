import React, { Fragment } from "react";
import NavBar from "../../components/navBar";
import ContentFooter from "../../components/contentFooter";
import { WebSiteLayoutProps } from "../../types/utils.interface";

export const WebSiteLayout:React.FC<WebSiteLayoutProps> = ({children}) => {
    return(
        <Fragment>
            <NavBar/>
                {children}
            <ContentFooter/>
        </Fragment>
    )
}