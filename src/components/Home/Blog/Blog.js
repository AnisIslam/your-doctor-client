import React from 'react';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title: 'Make Your Tooth Strong ',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Mustakim Billah',
        authorImg: wilson,
        date: '01 Nov 2019'

    },
    {
        title: 'Sensitivity Problem and Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Rafi',
        authorImg: wilson,
        date: '01 Nov 2019'

    },
    {
        title: 'Brash and Life',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. M A Hasan',
        authorImg: wilson,
        date: '01 Nov 2019'
    },
]

const Blog = () => {
    return (
        <div className='container-fluid p-5'>
            <h5 className='sub-heading'>
                our blog
            </h5>
            <h2 className='heading'>
                From Our Blog News
            </h2>
            <div className="row py-5">
                {
                    blogData.map(blog => <BlogPost key={blog.title} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;