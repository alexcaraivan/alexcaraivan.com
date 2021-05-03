import React, { useEffect } from 'react';
import Page from '@components/Page';
import Layout from '@components/Layout';
import StoryblokService from '../utils/storyblok-service';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

function Home({ content }) {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (!loading && !user) {
    router.push('/');
  }

  useEffect(() => {
    StoryblokService.initEditor(this);
  }, []);

  return (
    user && (
      <Layout>
        <Page content={content} />
      </Layout>
    )
  );
}

Home.getInitialProps = async ({ query }) => {
  StoryblokService.setQuery(query);

  let res = await StoryblokService.get('cdn/stories/home', {
    resolve_relations: 'featured-posts.posts',
  });

  return {
    content: res.data.story.content,
  };
};

export default Home;
