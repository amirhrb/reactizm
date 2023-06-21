import dynamic from 'next/dynamic';

//loader
import AuthorSkeleton from '@/components/modules/loaders/Author';
//component
const Author = dynamic(() => import('@/components/modules/Author'), {
  loading: () => <AuthorSkeleton />,
  ssr: false,
});

const AuthorsTemplate = ({ data }: any) => {
  return data.items.map((item: any) => (
    <Author key={item.sys.is} item={item} />
  ));
};

export default AuthorsTemplate;
