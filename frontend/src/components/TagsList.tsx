import React from 'react';

const TagsList: React.FC = () => {
  const tags = [
    "DP", "Combination", "Greedy"
  ];

  return (
    < div className="tags" >
      {
        tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))
      }
    </div >
  );
};

export default TagsList;
