import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };
    fetchCandidates();
  }, []);

  const saveCandidate = () => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    saved.push(candidates[currentIndex]);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
    nextCandidate();
  };

  const nextCandidate = () => {
    setCurrentIndex((prev) => (prev + 1 < candidates.length ? prev + 1 : 0));
  };

  if (candidates.length === 0) {
    return <h1>No candidates available. Please try again later.</h1>;
  }

  const candidate = candidates[currentIndex];

  return (
    <div>
      <h1>Candidate Search</h1>
      <img src={candidate.avatar_url} alt={candidate.login} />
      <p>Name: {candidate.name || 'N/A'}</p>
      <p>Username: {candidate.login}</p>
      <p>Location: {candidate.location || 'N/A'}</p>
      <p>Email: {candidate.email || 'N/A'}</p>
      <p>Company: {candidate.company || 'N/A'}</p>
      <p>
        Profile: <a href={candidate.html_url}>{candidate.html_url}</a>
      </p>
      <button onClick={saveCandidate}>+</button>
      <button onClick={nextCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;
