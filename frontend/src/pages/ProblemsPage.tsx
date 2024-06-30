import React from 'react';
import ProblemsList from '../components/ProblemsList';
import TagsList from '../components/TagsList';

const ProblemsPage: React.FC = () => {
  return (
    <div>
      <TagsList />
      <ProblemsList />
    </div>
  );
};

export default ProblemsPage;
