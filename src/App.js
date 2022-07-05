import React from 'react';
import Header from './components/header';
import { newsCatagory } from './news'
import NewsList from './components/newsList';
import Pagination from './components/Pagination';
import Loading from './components/loading';

const fackeNews = [
  {
    title: 'Title One',
    content: 'Content one',
    url: 'https://linktones.com',
    urlToImage: 'https://linktones.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN'
    },
  },
  {
    title: 'Title Two',
    content: 'Content two',
    url: 'https://linktones.com',
    urlToImage: 'https://linktones.com',
    publishedAt: 'published date and time',
    source: {
      name: 'BBC'
    },
  },
]
class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offest-md-3">
            <div className="App">
              <Header category={newsCatagory.secience} />
              <div className="d-flex">
                <p className="text-black-50">
                  About {0} results found
                </p>
                <p className="text-back-50 " style={{ marginLeft: 'auto' }}>
                  {1} page of {100}
                </p>
              </div>
              <NewsList news={fackeNews} />
              <Pagination />
              <Loading />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
