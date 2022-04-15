import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageLoader from '../components/UI/Loader/PageLoader';
import { useAppSelector } from '../store';
import { getPostById } from '../store/placeholder/actions';

const About = () => {
    const currentPost = useAppSelector((state) => state.placeholder.currentPost);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentPost) {
            dispatch(getPostById(4));
        }
    }, [currentPost, dispatch]);

    if (!currentPost) {
        <PageLoader />;
    }

    return (
        <div className="about-page page">
            <div className="container">
                About Page
                <div className="">{currentPost?.body}</div>
                {/* {currentPost?.map((post) => {
                    return <div key={post.id}>{post.title}</div>;
                })} */}
            </div>
        </div>
    );
};

export default About;
