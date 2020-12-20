import React from 'react';
import Layout from '@components/Layout';
import BlogPost from '@components/BlogPost';
import StoryblokService from '@utils/storyblok-service';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.res.data.story,
    };
  }

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query);

    let language = query.language || 'en';
    let trimDefault = asPath.replace('/en/blog', '/blog');
    let res = await StoryblokService.get(`cdn/stories${trimDefault}`);

    return {
      res,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const contentOfStory = this.state.story.content;

    return (
      <Layout>
        <BlogPost blok={contentOfStory} />
      </Layout>
    );
  }
}
