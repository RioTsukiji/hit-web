import {useState, useContext} from 'react';
import NewsContext from '../News/NewsContext';
import BlogList from './BlogList/BlogList';


const BlogColumn = () => {

  return (
    <div className="content-column">
    <BlogList/>
    </div>
  );
};

export default BlogColumn;
