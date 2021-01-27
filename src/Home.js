import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {


    const {data:blogs, isPending, error, handleDelete} = useFetch('http://localhost:8000/blogs')


      return (
        <div className="App">
          {error && <div>{error}</div>}
          {isPending && <div>...Loading </div>}
          {blogs && <Bloglist blogs = {blogs} handle = {handleDelete} />}
        </div>
      );
}


export default Home;