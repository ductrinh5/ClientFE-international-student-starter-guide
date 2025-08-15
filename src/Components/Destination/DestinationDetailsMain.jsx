import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-destination.json';
import Modal from '../Gallery/Modal';
import ContactMap from '../Contact/ContactMap';

function DestinationDetailsMain() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const { id } = useParams();
    const destinationPost = Posts.find(post => post.id === parseInt(id));

    if (!destinationPost) {
        return <div>Post not found!</div>;
    }

    const openModal = (imageSrc, event) => {
        event.preventDefault();
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);
    return (
      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="page-single">
                <div className="service-img">
                  <img
                    src={`/assets/img/destination/${destinationPost.bannerImg}`}
                    alt=""
                  />
                </div>
                <div className="page-content d-block">
                  <div className="page-meta mt-50 mb-45">
                    <Link className="page-tag mr-5" to="/tour">
                      Featured
                    </Link>
                    <span className="ratting">
                      <i className="fa-sharp fa-solid fa-star" />
                      <span>4.8</span>
                    </span>
                  </div>
                  <h2 className="box-title">{destinationPost.title}</h2>
                  <p className="blog-text mb-35">
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Dolorem
                    ipsum quia dolor sit amet, consectetur, adipisci.
                  </p>
                  <div className="destination-checklist">
                    <div className="checklist style2">
                      <ul>
                        <li>Destination</li>
                        <li>Visa Requirements</li>
                        <li>Language</li>
                        <li>Currency Used</li>
                        <li>Area (km2)</li>
                        <li>Destination</li>
                        <li>Per Person</li>
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        <li>Netherlands</li>
                        <li>On Arrival Visa</li>
                        <li>English</li>
                        <li>Euro</li>
                        <li>25,859km2</li>
                        <li>25 Tour Places</li>
                        <li>{destinationPost.price}</li>
                      </ul>
                    </div>
                  </div>
                  <p className="blog-text mb-35">
                    Dinning: Prepare a dinner using fresh ingredients from your
                    own garden or the local CSA program. The energy-efficient
                    appliances in your kitchen make cooking a breeze while
                    minimizing your overall energy consumption. Share a meal
                    with neighbors, The quiet night offers a peaceful ambiance,
                    reinforcing the community's commitment to a sustainable,
                    low-impact lifestyle.
                  </p>
                  <p className="blog-text mb-35">
                    Living sustainably at Realar Residence is more than a
                    choice; it's an immersive experience that shapes every
                    moment of your day. From the moment you wake up in your
                    solar-powered home to the evening gatherings with
                    like-minded neighbors
                  </p>
                  <div className="service-inner-img mb-40">
                    <img
                      src="/assets/img/destination/destination-inner-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <ContactMap />
                <div className="th-comments-wrap style2 ">
                  <h2 className="blog-inner-title h4">Reviews (3)</h2>
                  <ul className="comment-list">
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="/assets/img/blog/comment-author-1.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h3 className="name">Adam Jhon</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">20 Jun, 2024</span>
                            <span className="commented-time">08:56pm </span>
                            <span className="comment-review">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </span>
                          </div>
                          <p className="text">
                            Credibly pontificate transparent quality vectors
                            with quality mindshare. Efficiently architect
                            worldwide strategic theme areas after user.
                          </p>
                          <div className="reply_and_edit">
                            <i className="fa-solid fa-thumbs-up" />
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="th-comment-item">
                          <div className="th-post-comment">
                            <div className="comment-avater">
                              <img
                                src="/assets/img/blog/comment-author-4.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="">
                                <h3 className="name">Maria Willson</h3>
                                <div className="commented-wrapp">
                                  <span className="commented-on">
                                    23 Jun, 2024
                                  </span>
                                  <span className="commented-time">
                                    08:56pm{" "}
                                  </span>
                                  <span className="comment-review">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                  </span>
                                </div>
                              </div>
                              <p className="text">
                                It is different from airport transfer or port
                                transfer, which are services that pick you up
                              </p>
                              <div className="reply_and_edit">
                                <i className="fa-solid fa-thumbs-up" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="/assets/img/blog/comment-author-5.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="">
                            <h3 className="name">Michel Edwards</h3>
                            <div className="commented-wrapp">
                              <span className="commented-on">27 Jun, 2024</span>
                              <span className="commented-time">08:56pm </span>
                              <span className="comment-review">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </span>
                            </div>
                          </div>
                          <p className="text">
                            Credibly pontificate transparent quality vectors
                            with quality mindshare. Efficiently architect
                            worldwide strategic theme areas after user.
                          </p>
                          <div className="reply_and_edit">
                            <i className="fa-solid fa-thumbs-up" />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                {/* Comment end */} {/* Comment Form */}
                <div className="th-comment-form ">
                  <div className="row">
                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                    <p className="mb-25">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="form-control"
                        required=""
                      />
                      <i className="far fa-user" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Email*"
                        className="form-control"
                        required=""
                      />
                      <i className="far fa-envelope" />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        placeholder="Website"
                        className="form-control"
                        required=""
                      />
                      <i className="far fa-globe" />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Comment*"
                        className="form-control"
                        defaultValue={""}
                      />
                      <i className="far fa-pencil" />
                    </div>
                    <div className="col-12 form-group">
                      <input type="checkbox" id="html" />
                      <label htmlFor="html">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="th-btn">
                        Send Message
                        <img src="/assets/img/icon/plane2.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area style3">
                <div className="widget widget_search  ">
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories  ">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/blog">
                        <img src="/assets/img/theme-img/map.svg" alt="" />
                        City Tour
                      </Link>
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link to="/blog">
                        <img src="/assets/img/theme-img/map.svg" alt="" />
                        Beach Tours
                      </Link>
                      <span>(6)</span>
                    </li>
                    <li>
                      <Link to="/blog">
                        <img src="/assets/img/theme-img/map.svg" alt="" />
                        Wildlife Tours
                      </Link>
                      <span>(2)</span>
                    </li>
                    <li>
                      <Link to="/blog">
                        <img src="/assets/img/theme-img/map.svg" alt="" />
                        News &amp; Tips
                      </Link>
                      <span>(7)</span>
                    </li>
                    <li>
                      <Link to="/blog">
                        <img src="/assets/img/theme-img/map.svg" alt="" />
                        Adventure Tours
                      </Link>
                      <span>(9)</span>
                    </li>
                    <li>
                      <Link to="/blog">
                        <img src="/assets/img/theme-img/map.svg" alt="" />
                        Mountain Tours
                      </Link>
                      <span>(10)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud  ">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <Link to="/blog">Tour</Link>
                    <Link to="/blog">Adventure</Link>
                    <Link to="/blog">Rent</Link>
                    <Link to="/blog">Innovate</Link>
                    <Link to="/blog">Hotel</Link>
                    <Link to="/blog">Modern</Link>
                    <Link to="/blog">Luxury</Link>
                    <Link to="/blog">Travel</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          imageSrc={modalImage}
        />
      </section>
    );
}

export default DestinationDetailsMain
