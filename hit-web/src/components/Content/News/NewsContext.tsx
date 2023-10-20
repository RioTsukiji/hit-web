import React from 'react';


interface Blog {
  id: number,
  title: string
}

const NewsContext = React.createContext<Blog[]>([]);

export default NewsContext;