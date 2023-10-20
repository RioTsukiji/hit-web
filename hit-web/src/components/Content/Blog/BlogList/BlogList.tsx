import React from 'react';
import { useContext } from 'react';
import NewsContext from '../../News/NewsContext';


import './BlogList.css';

interface Blog {
  id: number,
  title: string
}

const BlogList:React.FC = () => {
  
  const blog= useContext(NewsContext);

  
  return (
    <div className="content-column">
      <section id="bloglist">
        <h2>Blog</h2>
        <div className="blogbutton-container">
          {blog.map(blogItem => (
            <button
              key={blogItem.id}
              className="blog-button"
              >{blogItem.title}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
