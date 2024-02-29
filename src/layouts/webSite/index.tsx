import React, { Fragment, useContext } from 'react';
import NavBar from '../../components/navBar';
import ContentFooter from '../../components/contentFooter';
import { WebSiteLayoutProps } from '../../types/utils.interface';
import { ThemeContext } from '../../themeContext';
import { CSSTransition } from 'react-transition-group';

export const WebSiteLayout: React.FC<WebSiteLayoutProps> = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error('useThemeContext must be used within a ThemeProvider');
  const { theme } = themeContext;

  return (
    <div className={`${theme === 'light' ? 'bg-pages-light' : 'bg-pages'}`}>
      <Fragment>
        <NavBar />
        <main className="container mx-auto">
          <CSSTransition in={true} timeout={500} classNames="transition-effect">
            {children}
          </CSSTransition>
        </main>
        {/*<ChatBot />*/}
        <ContentFooter theme={theme} />
      </Fragment>
    </div>
  );
};
