import React from 'react';
import ExerciseList from './components/ExerciseList';
import Banner from './components/Banner';
import ExerciseSearch from './components/ExerciseSearch';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gym App</h1>
      <Banner/>
      <ExerciseSearch/>
      <ExerciseList />
    </div>
  );
}

export default App;