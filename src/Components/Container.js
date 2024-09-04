import React, { useEffect, useState} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';


export default function Container(props) {
//   const [category,setcategory] = useState("health")
//   setcategory(props.category)
//   alert(props.category)
  const [response, setresponse] = useState([]);
  const [page, setPage] = useState(1);
  const [PageSize, setPageSize] = useState(20);
  const [totalresult, setTotalResult] = useState(0);
  const [loading,setLoading] = useState(false)

    const updatNews =async()=>{

      const url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=38b994fddf5142f5bc795d2d4d0e0ebb&page=${page}&pagesize=${PageSize}`
      setLoading(true)
      const data=await fetch(url)
      let parsedData=await data.json()
      setresponse(parsedData.articles)
      console.log(parsedData)
      setLoading(false)
      setTotalResult(parsedData.totalResults)
      // console.log(totalresult)
      setPageSize(20)
      // console.warn(newscategory)
    }
     useEffect(()=> {
      updatNews()
    //   let Category=props.category;
    //   let a=props.category.charAt(0).toUpperCase()+props.category.slice(1)
      document.title=`${props.category.charAt(0).toUpperCase()+props.category.slice(1)}-Newzy news`
       // eslint-disable-next-line
    },[page]);
    const nextPage=()=>{
        
        setPage(page+1)
    }
    const previousPage=()=>{
       
        setPage(page-1)
    }

  return (
   <>
    <div className="container my-4">
        <h1 align="center">NewzyNews-Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines</h1>
        {loading && <Spinner/>}
         <div className='row my-4'>
        {!loading && response.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItems  title={element.title=!null?element.title.slice(0,50):""} imageurl={element.urlToImage}  content={element.description=!"null"?element.description.slice(0,84):""} newsUrl={element.url} source={element.source.name?element.source.name:"not given"} author={element.author?element.author:"unknown"} date={new Date(element.publishedAt).toGMTString()}/>
            {/* <NewsItems  title={element.category}  content={element.description=!"null"?element.description.slice(0,84):""} newsUrl={element.url}/> */}
            <br/>
          </div>
          
        })}
          </div>
          <div className='container d-flex justify-content-between'>
              <button disabled={page<=1} className='btn btn-sm btn-danger' onClick={previousPage}>&larr; Previous</button>
              <button disabled={page>=Math.ceil(totalresult/PageSize)} className='btn btn-danger' onClick={nextPage}>Next &rarr;</button>
          </div>
    </div>
   </>
  )
}
