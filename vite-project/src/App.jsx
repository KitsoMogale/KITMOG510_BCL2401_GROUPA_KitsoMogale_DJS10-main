import { useState, useEffect } from "react"



function App() {
  const [fetchFailed,setFetchFailed] = useState();
  const [error,setError] = useState(false);
  const [posts, setPosts] = useState([]);
 
  
  useEffect( ()=> {

 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
      if(!res.ok){
        setError(true)
        throw new Error('respone failed');
      }
      return res.json()})
    .then(data=>{ setPosts(data)})
    .catch(err => setFetchFailed('Failed to fetch data'))
    
    
  }, [])

  const postsElements = posts.map(post => {
    
   return  <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>

})

  return (
    <>
   { !error ?
    postsElements: <h1>{fetchFailed}</h1>
      }
    </>
  )
}

export default App
