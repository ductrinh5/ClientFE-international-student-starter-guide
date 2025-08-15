import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function BlogPost(props) {
    const { blogID, blogImage, blogTitle } = props;
    return (
        <>
            {/* Single Blog Post */}
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
                    <h2 className="blog-title">
                        <Link to={`/blog/${blogID}`}>
                            {blogTitle ? blogTitle : 'Guide for job application'}
                        </Link>
                    </h2>
                    <p className="blog-text">
                        This guide will help you understand the process of applying for a job in Vietnam.
                    </p>
                </div>
            </div>

            {/* Blog Post with Swiper Slider */}
            <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img th-slider">
                    <Swiper
                        modules={[Navigation, EffectFade]}
                        navigation={{ prevEl: ".slider-prev", nextEl: ".slider-next" }}
                        effect="fade"
                        loop={true}
                    >
                        <SwiperSlide>
                            <Link to={`/blog/${blogID}`}>
                                <img src="/assets/img/blog/blog-s-1-2.jpg" alt="Blog" />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to={`/blog/${blogID}`}>
                                <img src="/assets/img/blog/blog-s-1-4.jpg" alt="Blog" />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                    <button className="slider-arrow slider-prev">
                        <i className="far fa-arrow-left" />
                    </button>
                    <button className="slider-arrow slider-next">
                        <i className="far fa-arrow-right" />
                    </button>
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
                    <h2 className="blog-title">
                        <Link to={`/blog/${blogID}`}>
                            Guide for other processes
                        </Link>
                    </h2>
                    <p className="blog-text">
                        This guide will help you understand the process of applying for other processes in Vietnam.
                    </p>
                </div>
            </div>

            {/* Blog Post Without Image */}
            <div className="th-blog blog-single has-post-thumbnail">
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
                    <h2 className="blog-title">
                        <Link to={`/blog/${blogID}`}>
                            Guide for bank account opening
                        </Link>
                    </h2>
                    <p className="blog-text">
                        This guide will help you understand the process of opening a bank account in Vietnam.
                    </p>
                </div>
            </div>

            {/* Blog Post with Video */}
            <div className="th-blog blog-single has-post-thumbnail">
                <div className="blog-img" data-overlay="bg-title" data-opacity={5}>
                    <Link to={`/blog/${blogID}`}>
                        <img src="/assets/img/blog/blog-s-1-2.jpg" alt="Blog" />
                    </Link>
                    <Link to="https://www.youtube.com/watch?v=cQfIUPw72Dk" className="play-btn popup-video">
                        <i className="fas fa-play" />
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
                    <h2 className="blog-title">
                        <Link to={`/blog/${blogID}`}>
                            Guide for reporting processes
                        </Link>
                    </h2>
                    <p className="blog-text">
                        This guide will help you understand the process of reporting in Vietnam.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BlogPost
