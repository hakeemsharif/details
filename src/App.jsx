import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import ArticleDetails from './pages/ArticleDetails'
import Category from './pages/Category'
import Footer from './components/Footer'
import useFetch from './hooks/useFetch'
import PageNotFound from './pages/PageNotFound'
import ErrorLoading from './pages/ErrorLoading'
import MainLoading from './components/MainLoading';
// const client = new ApolloClient({
//   uri: 'https://localhost:1337/graphql',
//   cache: new InMemoryCache()
// })

function App() {

  const { data, loading, error } = useFetch('https://details-cms-api.onrender.com/api/categories')

  if(loading) return <MainLoading />
  // if (loading) {
  //   setTimeout(() => {
  //     return <MainLoading />;
  //   }, 1000);
  // }
  if(error) return <ErrorLoading />

  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
              {data.map(category => (
                <Route key={category.id} path={`${category.attributes.Name}/details/:id`} element={<ArticleDetails />} />
              ))}
                {data.map(category => (
                <Route key={category.id} path={`category/${category.id}` +"/" +`${category.attributes.Name}/details/:id`} element={<ArticleDetails />} />
              ))}
            {/* <Route path="/details/:id" element={<ArticleDetails />} /> */}
            {/* <Route path="/category/sports/details/:id" element={<ArticleDetails />} />
            <Route path="/category/politics/details/:id" element={<ArticleDetails />} />
            <Route path="/category/business/details/:id" element={<ArticleDetails />} />
            <Route path="/category/entertainment/details/:id" element={<ArticleDetails />} /> */}
            <Route path="/category/:id" element={<Category />} />
            {/* {data.map(category => (
                <Route key={category.id} path={`${category.attributes.Name}/:id`} element={<Category />} />
              ))} */}
            <Route path="*" element={<PageNotFound PageInfo="Page not found"/>} />
          </Routes>
          <Footer />
      </div>
    </Router>
  )
}

export default App
