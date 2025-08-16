import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import DashboardFilter from './DashboardFilter';
import Posts from '../data/data-post.json';
import Destinations from '../data/data-destination.json';
import DestinationCard from '../Destination/DestinationCard';
import BlogPost from '../Blog/BlogPost';
import './Dashboard.css';

function DashboardMain() {
    const [activeTab, setActiveTab] = useState('places');
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('dateAdded');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filters, setFilters] = useState({
        searchTerm: '',
        categories: [],
        locations: [],
        minRating: 0,
        maxPrice: 1000,
        specializations: [],
        languages: [],
        minExperience: '',
        maxFee: 300
    });

    const postsPerPage = 9;

    // Filter and sort data based on active tab
    const filteredData = useMemo(() => {
        let data = activeTab === 'places' ? Destinations : Posts;
        
        // Apply search filter
        if (filters.searchTerm) {
            data = data.filter(item => 
                item.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }

        if (activeTab === 'places') {
            // Apply place-specific filters - simplified for destination data
            if (filters.maxPrice < 1000) {
                data = data.filter(place => parseFloat(place.price.replace('$', '')) <= filters.maxPrice);
            }
        } else {
            // Apply guide-specific filters - simplified for blog data
            // Since blog data doesn't have these fields, we'll skip complex filtering
        }

        return data;
    }, [activeTab, filters]);

    // Sort filtered data
    const sortedData = useMemo(() => {
        const sorted = [...filteredData].sort((a, b) => {
            let aValue, bValue;
            
            switch (sortBy) {
                case 'title':
                    aValue = a.title.toLowerCase();
                    bValue = b.title.toLowerCase();
                    break;
                case 'price':
                    if (activeTab === 'places') {
                        aValue = parseFloat(a.price.replace('$', ''));
                        bValue = parseFloat(b.price.replace('$', ''));
                    } else {
                        // For blog posts, use title as fallback
                        aValue = a.title.toLowerCase();
                        bValue = b.title.toLowerCase();
                    }
                    break;
                case 'dateAdded':
                default:
                    // Since we don't have dateAdded, use ID as fallback
                    aValue = a.id;
                    bValue = b.id;
                    break;
            }

            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        return sorted;
    }, [filteredData, sortBy, sortOrder, activeTab]);

    // Pagination
    const totalPages = Math.ceil(sortedData.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (filterType, value) => {
        if (filterType === 'clear') {
            setFilters({
                searchTerm: '',
                categories: [],
                locations: [],
                minRating: 0,
                maxPrice: 1000,
                specializations: [],
                languages: [],
                minExperience: '',
                maxFee: 300
            });
        } else {
            setFilters(prev => ({
                ...prev,
                [filterType]: value
            }));
        }
        setCurrentPage(1); // Reset to first page when filters change
    };

    const handleSortChange = (newSortBy) => {
        if (sortBy === newSortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(newSortBy);
            setSortOrder('desc');
        }
        setCurrentPage(1);
    };

    // Reset page when tab changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    return (
        <section className="space">
            <div className="container">
                {/* Tab Navigation */}
                <div className="th-sort-bar mb-30">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <div className="nav nav-tabs" role="tablist">
                                <button
                                    className={`nav-link ${activeTab === 'places' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('places')}
                                >
                                    <i className="fa-light fa-map-marker-alt me-2"></i>
                                    Saved Places ({filteredData.filter(item => activeTab === 'places' ? true : false).length})
                                </button>
                                <button
                                    className={`nav-link ${activeTab === 'guides' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('guides')}
                                >
                                    <i className="fa-light fa-gavel me-2"></i>
                                    Legal Guides ({filteredData.filter(item => activeTab === 'guides' ? true : false).length})
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-end align-items-center gap-3">
                                {/* View Mode Toggle */}
                                <div className="view-mode-toggle">
                                    <button
                                        className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <i className="fa-light fa-grid-2"></i>
                                    </button>
                                    <button
                                        className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <i className="fa-solid fa-list"></i>
                                    </button>
                                </div>

                                {/* Sorting */}
                                <form className="woocommerce-ordering">
                                    <select
                                        name="orderby"
                                        className="orderby"
                                        value={`${sortBy}-${sortOrder}`}
                                        onChange={(e) => {
                                            const [newSortBy, newSortOrder] = e.target.value.split('-');
                                            setSortBy(newSortBy);
                                            setSortOrder(newSortOrder);
                                        }}
                                    >
                                        <option value="dateAdded-desc">ID (Newest)</option>
                                        <option value="dateAdded-asc">ID (Oldest)</option>
                                        <option value="title-asc">Name A-Z</option>
                                        <option value="title-desc">Name Z-A</option>
                                        <option value="price-asc">Price (Low to High)</option>
                                        <option value="price-desc">Price (High to Low)</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Main Content */}
                    <div className="col-xxl-9 col-lg-8">
                        <div className="tab-content">
                            {/* Saved Places Tab */}
                            <div className={`tab-pane fade ${activeTab === 'places' ? 'show active' : ''}`}>
                                {currentPosts.length > 0 ? (
                                    <>
                                        <div className={`row gy-30 ${viewMode === 'list' ? 'gy-20' : ''}`}>
                                            {currentPosts.map((data) => (
                                                <div key={data.id} className={viewMode === 'grid' ? 'col-xxl-4 col-xl-6' : 'col-12'}>
                                                    <DestinationCard destinationID={data.id}
                                                destinationImage={`${data.image}`}
                                                destinationTitle={data.title}
                                                destinationPrice={data.price} />
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Pagination */}
                                        {totalPages > 1 && (
                                            <div className="th-pagination text-center mt-60 mb-0">
                                                <ul>
                                                    {Array.from({ length: totalPages }, (_, i) => (
                                                        <li key={i}>
                                                            <button
                                                                className={currentPage === i + 1 ? 'active' : ''}
                                                                onClick={() => handlePageChange(i + 1)}
                                                            >
                                                                {i + 1}
                                                            </button>
                                                        </li>
                                                    ))}
                                                    {currentPage < totalPages && (
                                                        <li>
                                                            <button 
                                                                className="next-page" 
                                                                onClick={() => handlePageChange(currentPage + 1)}
                                                            >
                                                                Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                                            </button>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-60">
                                        <i className="fa-light fa-heart fa-3x text-muted mb-3"></i>
                                        <h4>No saved places found</h4>
                                        <p className="text-muted">Try adjusting your filters or save some places first.</p>
                                        <Link to="/destination" className="btn btn-primary">
                                            Explore Destinations
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Legal Guides Tab */}
                            <div className={`tab-pane fade ${activeTab === 'guides' ? 'show active' : ''}`}>
                                {currentPosts.length > 0 ? (
                                    <>
                                        <div className="row gy-20">
                                            {currentPosts.map((data) => (
                                                <div key={data.id} className="col-12">
                                                    <BlogPost 
                                                        blogID={data.id}
                                                        blogImage={data.image}
                                                        blogTitle={data.title}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Pagination */}
                                        {totalPages > 1 && (
                                            <div className="th-pagination text-center mt-60 mb-0">
                                                <ul>
                                                    {Array.from({ length: totalPages }, (_, i) => (
                                                        <li key={i}>
                                                            <button
                                                                className={currentPage === i + 1 ? 'active' : ''}
                                                                onClick={() => handlePageChange(i + 1)}
                                                            >
                                                                {i + 1}
                                                            </button>
                                                        </li>
                                                    ))}
                                                    {currentPage < totalPages && (
                                                        <li>
                                                            <button 
                                                                className="next-page" 
                                                                onClick={() => handlePageChange(currentPage + 1)}
                                                            >
                                                                Next <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                                                            </button>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="text-center py-60">
                                        <i className="fa-light fa-gavel fa-3x text-muted mb-3"></i>
                                        <h4>No legal guides found</h4>
                                        <p className="text-muted">Try adjusting your filters or save some legal guides first.</p>
                                        <Link to="/guides" className="btn btn-primary">
                                            Find Legal Guides
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar with Filters */}
                    <div className="col-xxl-3 col-lg-4">
                        <DashboardFilter 
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            activeTab={activeTab}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashboardMain;