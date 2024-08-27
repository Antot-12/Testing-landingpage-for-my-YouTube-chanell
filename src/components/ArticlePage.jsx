// src/components/ArticlePage.jsx
import React from 'react';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

const ArticlePage = () => {
    const disqusShortname = 'bp-test'; // Replace with your Disqus shortname
    const disqusConfig = {
        url: window.location.href, // The current page URL
        identifier: 'article-1',  // Unique identifier for the article
        title: 'My First Article', // Article title
    };

    return (
        <div className="article-page">
            <h1>{disqusConfig.title}</h1>
            <p>This is the content of the article. It can be anything related to your topic.</p>

            {/* Display Comment Count */}
            <CommentCount shortname={disqusShortname} config={disqusConfig}>
                Comments
            </CommentCount>

            {/* Display Disqus Comments */}
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
    );
};

export default ArticlePage;
