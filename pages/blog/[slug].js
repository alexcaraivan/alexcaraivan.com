import React, { useEffect } from 'react';
import Layout from '@components/Layout';
import BlogPost from '@components/BlogPost';
import StoryblokService from '@utils/storyblok-service';
import { useAuth } from '../../lib/auth';
import { useRouter } from 'next/router';

function Post({ content }) {
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
        <BlogPost blok={content} />
      </Layout>
    )
  );
}

Post.getInitialProps = async ({ asPath, query }) => {
  StoryblokService.setQuery(query);

  let trimDefault = asPath.replace('/en/blog', '/blog');
  let res = await StoryblokService.get(`cdn/stories${trimDefault}`);

  return {
    content: res.data.story.content,
  };
};

export default Post;
