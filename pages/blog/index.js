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
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide pt-12">
            All Posts
          </h1>

          <ul>
            {posts.map((post) => (
              <li className="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md bg-white" key={post.id}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    {`${new Date(post.created_at).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}
                  </span>
                </div>
                <div className="mt-2">
                  <a
                    className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                    href={`/${post.full_slug}`}
                  >
                    {post.content.title}
                  </a>
                  <p className="mt-2 text-gray-600">{post.content.intro}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a className="text-blue-600 hover:underline" href={`/${post.full_slug}`}>
                    Read more
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    );
  }
}
