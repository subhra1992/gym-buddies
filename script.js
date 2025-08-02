const exerciseData = {
  Chest: ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'],
  Arms: ['Bicep Curl', 'Tricep Dip', 'Hammer Curl'],
  Legs: ['Squat', 'Leg Press', 'Lunges'],
  Shoulders: ['Overhead Press', 'Lateral Raise', 'Front Raise'],
  Back: ['Pull-ups', 'Deadlift', 'Seated Row'],
  Core: ['Plank', 'Crunches', 'Russian Twists']
};

function showExercises(part) {
  const exercises = exerciseData[part];
  const outputDiv = document.getElementById('exercise-output');

  if (exercises) {
    outputDiv.innerHTML = `<h2>${part} Exercises</h2><ul>${exercises.map(e => `<li>${e}</li>`).join('')}</ul>`;
  } else {
    outputDiv.innerHTML = `<p>No exercises found for ${part}</p>`;
  }
}

