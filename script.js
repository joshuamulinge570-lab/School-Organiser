document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Date Display (DOM Manipulation)
  const dateDisplay = document.getElementById("date-display");
  if (dateDisplay) {
    dateDisplay.innerText = `Today is ${new Date().toLocaleDateString()}`;
  }
});

// Logic for insert course page
const courseForm = document.getElementById("course-form");
if (courseForm) {
  courseForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Prevent Page Reload

    //Get Values
    const name = document.getElementById("courseName").value;
    const instructor = document.getElementById("instructor").value;
    const nameError = document.getElementById("nameError");
    const successMessage = document.getElementById("success-message");

    // Validation check to see if name is too short
    if (name.length < 3) {
      nameError.innerText = "Course Name is too short!";
      return;
    }

    // Get data from local storage
    const courses = JSON.parse(localStorage.getItem("courses")) || [];

    // Add New Data
    courses.push({ name, instructor });

    // Save back to local Storage
    localStorage.setItem("courses", JSON.stringify(courses));

    courseForm.reset();

    // Alert messages
    if (successMessage) {
      successMessage.style.display = "block";
    }
    alert("Course saved!");
  });
}

// Logic for Dashboard Page
const container = document.getElementById("course-list-container");
if (container) {
  const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

  //Check if Array is empty
  if (storedCourses.length === 0) {
    container.innerHTML = "<p>No courses added yet.Go to insert course'!</p>";
  } else {
    // If courses are there and are not 0 we render the courses
    container.innerHTML = "";
    storedCourses.forEach((course) => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
                       <h4 style="color: blue">${course.name}</h4>
                       <p style="color: green">Instructor:${course.instructor}</p>
                       `;
      container.appendChild(card);
    });
  }
}

// Logic for About Page
const countDisplay = document.getElementById("course-count");
if (countDisplay) {
  // Retrieve Array From local Storage
  const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
  // Update the DOM with the count of items
  countDisplay.innerText = storedCourses.length;
  // Event listeners to change color on hover
  countDisplay.addEventListener("mouseover", () => {
    countDisplay.style.color = "red";
  });
  countDisplay.addEventListener("mouseout", () => {
    countDisplay.style.color = "darkblue";
  });
}
