import React from 'react';
import { Link, useParams } from 'react-router-dom';

let detailsArray=[
    {
        title:"Mathematics Subject",
        id:'s1',
        src:"https://www.youtube.com/embed/Hwr4gEHepOo",
        article:'https://www.netexplanations.com/maths-articles/'
    },
    {
        title:'Physics Subject',
        id:'s2',
        src:'https://www.youtube.com/embed/EwY6p-r_hyU',
        article:'https://kids.britannica.com/students/article/physics/276413'
    },
    {
        title:'Biology Subject',
        id:'s3',
        src:'https://www.youtube.com/embed/p3St51F4kE8',
        article:'https://www.sciencejournalforkids.org/scientific-field/biology/'
    },
    {
        title:'Chemistry Subject',
        id:'s4',
        src:'https://www.youtube.com/embed/jMW_0Ro6b5c',
        article:'https://www.sciencejournalforkids.org/articles/lesson-ideas/chemistry-articles/'
    }
]

const SubjectDetails = () => {
    const params=useParams();
   
  return (
    <>
    <div>
        {detailsArray.filter(person => person.id===params.productId).map(item=> (
        <li>
            <h1>{item.title}</h1>
            <iframe src={item.src}
            frameborder='0'
            width="400" height="300"
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
           />
           <h3>For more details click this Article</h3>
           <Link to={item.article}>{item.title} Article</Link>
           
        </li>
        ))}
    </div>
    </>
    
  )
}

export default SubjectDetails