import React from 'react';
import './AdditionalInfo.scss';

const AdditionalInfo = ({ additionalInfo }) => {
  return (
    <div className="additional-info">
      <h2>Additional Information</h2>
      <div className="health-advice">
        <h3>General Health Advice</h3>
        {additionalInfo.general_health_advice.map((advice, index) => (
          <div key={index} className="advice-item">
            <p><strong>{advice.topic}:</strong> {advice.advice}</p>
          </div>
        ))}
      </div>
      <div className="related-articles">
        <h3>Related Articles</h3>
        {additionalInfo.related_articles.map((article, index) => (
          <div key={index} className="article-item">
            <p><strong>{article.title}</strong> - <a href={article.link} target="_blank" rel="noopener noreferrer">{article.link}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInfo;
