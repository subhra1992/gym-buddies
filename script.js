const exerciseData = {
  Chest: {
    image: "https://www.bodybuilding.com/images/2020/xdb/originals/bench-press-1200x630.jpg",
    exercises: ["Bench Press", "Incline Dumbbell Press", "Chest Fly"]
  },
  Back: {
    image: "https://www.muscleandfitness.com/wp-content/uploads/2019/07/deadlift-GettyImages-469013666.jpg",
    exercises: ["Deadlift", "Lat Pulldown", "Barbell Row"]
  },
  Arms: {
    image: "https://www.bodybuilding.com/images/2021/july/bicep-workouts-960x540.jpg",
    exercises: ["Bicep Curl", "Tricep Dip", "Hammer Curl"]
  },
  Shoulders: {
    image: "https://www.bodybuilding.com/images/2021/june/shoulder-workouts-header-830x467.jpg",
    exercises: ["Overhead Press", "Lateral Raise", "Front Raise"]
  },
  Legs: {
    image: "https://www.bodybuilding.com/images/2020/xdb/originals/barbell-back-squat-1200x630.jpg",
    exercises: ["Squats", "Lunges", "Leg Press"]
  },
  Core: {
    image: "https://cdn.shopify.com/s/files/1/0060/6591/8964/articles/Abs.jpg",
    exercises: ["Crunches", "Plank", "Leg Raises"]
  }
};

function showExercises(part) {
  const data = exerciseData[part];
  const section = document.getElementById("exercise-section");

  if (!data) return;

  section.innerHTML = `
    <div class="exercise-card">
      <h2>${part} Exercises</h2>
      <img src="${data.image}" alt="${part} image"/>
      <ul>
        ${data.exercises.map(ex => `<li>${ex}</li>`).join('')}
      </ul>
    </div>
  `;
}

