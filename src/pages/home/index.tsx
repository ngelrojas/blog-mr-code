import ContentPage from '../../components/contentPage';
import { WebSiteLayout } from '../../layouts/webSite';

export default function Home() {
  return (
    <WebSiteLayout>
      <div className="min-h-full">
        <ContentPage />
      </div>
    </WebSiteLayout>
  );
}
