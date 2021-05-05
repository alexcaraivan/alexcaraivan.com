import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth';
import Layout from '@components/Layout';

function Today() {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (!loading && !user) {
    router.push('/');
  }

  const day = new Date().getDay();

  return (
    user && (
      <Layout>
        <div className="flex justify-center items-center full-content dark:bg-gray-700 dark:text-white">
          <h1 className="text-4xl">
            {[1, 3, 5].includes(day) ? 'Today is the day' : 'Today is not the day'}
          </h1>
        </div>
      </Layout>
    )
  );
}

export default Today;
