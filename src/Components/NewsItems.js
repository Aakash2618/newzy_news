import React from 'react'
// import Container from './Container';

export default function NewsItems(props) {
  // const {title}=state.title;

  return (
    <>
        <div className='row mx-2'> 
          <div className="card" style={{width: "18rem"}}>
            <img src={props.imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.title}..<span style={{marginLeft:"-36px"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {props.source}
                
              </span></h5>
              <p className="card-text">{props.content}...</p>
              <p className="card-text"><small className="text-body-secondary">By {props.author} on {props.date}</small></p>
              <a href={props.newsUrl} className="btn btn-sm btn-danger">Read more</a>
            </div>
           </div>
           {/* {props.title.map((element)=>{
            console.log(element.content)
           })} */}
        </div>
    </>
  )
}
