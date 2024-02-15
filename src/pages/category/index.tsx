import { useParams } from 'react-router-dom';
import { WebSiteLayout } from '../../layouts/webSite';

export default function Category() {
  const { slug } = useParams();

  return (
    <WebSiteLayout>
      <div className="pt-28">
        <h1 className="text-black">Category {slug}</h1>
      </div>
    </WebSiteLayout>
  );
}
