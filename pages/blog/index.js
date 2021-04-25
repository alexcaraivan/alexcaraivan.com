import React from 'react';
import Layout from '@components/Layout';
import StoryblokService from '@utils/storyblok-service';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: props.res.data.stories,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    const res = await StoryblokService.get('cdn/stories', {
      starts_with: 'blog/',
    });

    return {
      res,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const posts = this.state.stories;

    return (
      <Layout>
        <main className="container mx-auto">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide pt-12 mb-6">
            All Posts
          </h1>

          <ul>
            {posts.map((post) => (
              <li className="p-4 mb-4 rounded-lg shadow-md bg-gray-700" key={post.id}>
                  <p className="text-white text-sm mb-6">
                    {`${new Date(post.created_at).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}
                  </p>
                  <a
                    className="text-2xl text-white font-bold hover:text-gray-100"
                    href={`/${post.full_slug}`}
                  >
                    {post.content.title}
                  </a>
                  <p className="mt-2 text-white">{post.content.intro}</p>
                  <a className="text-gray-300 underline mt-4 block" href={`/${post.full_slug}`}>
                    Read more
                  </a>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    );
  }
}
