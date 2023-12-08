import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseCard from './ExerciseCard';

const ExerciseList = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
    const apiKey = 'aaf5ed5a46mshf0b5d754ef75411p1924dajsne0780f118ac3';
    const apiUrl = 'https://exercise-database1.p.rapidapi.com/exercises';

    axios
      .get(apiUrl, {
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      })
      .then((response) => setExerciseData(response.data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 w-full">Exercise List</h2>
    <div className="card flex flex-wrap mx-4 w-[100%]">
      {exerciseData.map((exercise) => (
        <div key={exercise.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4">
          <ExerciseCard exercise={exercise} />
        </div>
      ))}
    </div>
    </>  );
};

export default ExerciseList;