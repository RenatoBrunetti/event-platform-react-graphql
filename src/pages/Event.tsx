import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Novideo } from '../components/Novideo';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

type RouteParams = {
  slug: string;
};

export function Event() {
  const { slug } = useParams<RouteParams>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {
          slug
            ? <Video lessonSlug={slug} />
            : <Novideo />
        }
        <Sidebar />
      </main>
    </div>
  );
}
