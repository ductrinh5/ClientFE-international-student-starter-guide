import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SaveButton from '../SaveButton/SaveButton';

function BlogPost(props) {
    const { blogID, blogImage, blogTitle } = props;
    return (
        <>
            <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img">
                    <Link to={`/blog/${blogID}`}>
                        <img src={`/assets/img/blog/${blogImage}`} alt="Blog" />
                    </Link>
                </div>
                <div className="blog-content">
                    <div className="blog-meta">
                        <Link className="author" to="/blog">
                            <i className="fa-light fa-user" />
                            by Admin
                        </Link>
                        <Link to="/blog">
                            <i className="fa-solid fa-calendar-days" />
                            05 May, 2025
                        </Link>
                        <Link to={`/blog/${blogID}`}>
                            <img src="/assets/img/icon/map.svg" alt="" />
                            Legal Guide
                        </Link>
                    </div>
                    <div className="blog-header">
                        <h2 className="blog-title">
                            <Link to={`/blog/${blogID}`}>
                                {blogTitle ? blogTitle : 'Guide for job application'}
                            </Link>
                        </h2>
                        <SaveButton 
                            destinationId={blogID}
                            destinationTitle={blogTitle}
                            className="save-btn-sm"
                        />
                    </div>
                    <p className="blog-text">
                        This guide will help you understand the process of applying for a job in Vietnam.
                    </p>
                </div>
            </div>  
        </>
    )
}

export default BlogPost
