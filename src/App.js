import React from 'react';
// import axios from 'axios';
import Header from './components/header';
import News, { newsCatagory } from './news'
import NewsList from './components/newsList';
import Pagination from './components/Pagination';
import Loading from './components/loading';

const news = new News(newsCatagory.technology)


// const URL = 'https://jsonplaceholder.typicode.com/users'
// axios.get(URL)
//   .then(res => {
//     console.log(res);
//   })


// const fackeNews = [
//   {
//     title: 'Title One',
//     content: 'Content one',
//     url: 'https://linktones.com',
//     urlToImage: 'https://linktones.com',
//     publishedAt: 'published date and time',
//     source: {
//       name: 'CNN'
//     },
//   },
//   {
//     title: 'Title Two',
//     content: 'Content two',
//     url: 'https://linktones.com',
//     urlToImage: 'https://linktones.com',
//     publishedAt: 'published date and time',
//     source: {
//       name: 'BBC'
//     },
//   },
// ]
class App extends React.Component {
  state = {
    data: {},
    isLoading: true
  }
  // state = {// news: [],
  //   // category: newsCatagory.technology}
  // // changeCategory = category => {
  // //   this.setState({ category })
  // // }

  componentDidMount() {

    news.getNews()
      .then(data => {
        // console.log(data)
        this.setState({ data, isLoading: false })
      })
      .catch(e => {
        console.log(e);
        alert("something went wrong");
        this.setState({ isLoading: false })
      })

    // @_1 :: ola ways
    // const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}`;
    // axios.get(url)
    //   .then(res => {
    //     this.setState({
    //       news: res.data.articles
    //     })
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   })

  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.category !== this.state.category) {
  //     const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}`;
  //     axios.get(url)
  //       .then(res => {
  //         this.setState({
  //           news: res.data.articles
  //         })
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       })
  //   }
  // }

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true })
    }
    news.next()
      .then(data => {
        this.setState({ data, isLoading: false })
      })
      .catch(e => {
        console.log(e);
        alert("something went wrong previous");
        this.setState({ isLoading: false })
      })
  }
  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true })
    }
    news.prev()
      .then(data => {
        this.setState({ data, isLoading: false })
      })
      .catch(e => {
        console.log(e);
        alert("something went wrong in previous");
        this.setState({ isLoading: false })
      })
  }
  handlePageChange = value => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value)
      }
    })
  }
  goToPage = () => {
    this.setState({ isLoading: true })
    news.setCurrentPage(this.state.data.currentPage)
      .then(data => {
        this.setState({ data, isLoading: false })
      })
      .catch((e) => {
        console.log(e);
        alert("something went wrong in previous");
        this.setState({ isLoading: false })
      })
  }
  changeCategory = (category) => {
    this.setState({ isLoading: true })
    news.changeCategory(category)
      .then(data => {
        this.setState({ data, isLoading: false })
      })
      .catch((e) => {
        console.log(e);
        alert("something went wrong in previous");
        this.setState({ isLoading: false })
      })
  }
  search = searchTerm => {
    this.setState({ isLoading: true })
    
    news.search(searchTerm)
      .then(data => {
        this.setState({ data, isLoading: false })
      })
      .catch((e) => {
        console.log(e);
        alert("something went wrong in previous");
        this.setState({ isLoading: false })
      })
  }


  render() {
    const { articles, isNext, isPrevious, totalPage, currentPage, category, totalResults } = this.state.data

    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offest-md-3">
            <div className="App">
              <Header
                category={category}
                changeCategory={this.changeCategory}
                search={this.search}
              />
              <div className="d-flex">
                <p className="text-black-50">
                  About {totalResults} results found
                </p>
                <p className="text-back-50 " style={{ marginLeft: 'auto' }}>
                  {currentPage} page of {totalPage}
                </p>
              </div>
              {this.state.isLoading ? (<Loading />) : (
                <div>

                  <NewsList news={articles} />
                  <Pagination
                    next={this.next}
                    prev={this.prev}
                    isPrevious={isPrevious}
                    isNext={isNext}
                    totalPage={totalPage}
                    currentPage={currentPage}
                    handlePageChange={this.handlePageChange}
                    goToPage={this.goToPage}
                  />
                </div>
              )}



            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
