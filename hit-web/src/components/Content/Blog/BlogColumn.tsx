import {useState, useContext} from 'react';
import NewsContext from '../News/NewsContext';
import BlogList from './BlogList/BlogList';

interface Blog {
  id: number,
  title: string
}

const BlogColumn = () => {
  const blog:Blog[] = useContext(NewsContext);

  return (
    <div className="content-column">
    <BlogList blog={blog} />
    </div>
  );
};

export default BlogColumn;
