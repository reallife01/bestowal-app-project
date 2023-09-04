import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="bestowal__blog section__padding" id="blog">
    <div className="bestowal__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="bestowal__blog-container">
      <div className="bestowal__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
      </div>
      <div className="bestowal__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
        <Article imgUrl={blog03} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
        <Article imgUrl={blog04} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
        <Article imgUrl={blog05} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
      </div>
    </div>
  </div>
);

export default Blog;
