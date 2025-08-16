import React from 'react';

function DashboardFilter({ filters, onFilterChange, activeTab }) {
    const handleFilterChange = (filterType, value) => {
        onFilterChange(filterType, value);
    };

    const renderPlaceFilters = () => (
        <>
            <div className="widget widget_price_filter">
                <h3 className="widget_title">Price Range</h3>
                <div className="price-slider">
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                        className="form-range"
                    />
                    <div className="price-range">
                        <span>$0</span>
                        <span>${filters.maxPrice}</span>
                    </div>
                </div>
            </div>
        </>
    );

    const renderGuideFilters = () => (
        <>
            <div className="widget widget_info">
                <h3 className="widget_title">About Legal Guides</h3>
                <p>Browse through our collection of legal guides and resources to help you understand various legal processes.</p>
            </div>
        </>
    );

    return (
        <aside className="sidebar-area style2">
            <div className="widget widget_search">
                <form className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={filters.searchTerm}
                        onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa-light fa-magnifying-glass" />
                    </button>
                </form>
            </div>

            {activeTab === 'places' ? renderPlaceFilters() : renderGuideFilters()}

            <div className="widget widget_clear_filters">
                <button 
                    className="btn btn-outline-secondary w-100"
                    onClick={() => onFilterChange('clear', null)}
                >
                    Clear All Filters
                </button>
            </div>
        </aside>
    );
}

export default DashboardFilter;
