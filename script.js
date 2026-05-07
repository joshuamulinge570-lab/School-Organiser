// --- Logic For All Pages ---

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Date Display (DOM Manipulation)
    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
        dateDisplay.innerText = `Today is ${new Date().toLocaleDateString()}`;
    }
});

//--- Logic for INSERT COURSE PAGE ---
const courseForm = document.getElementById('course-form');
if (courseForm) {
    courseForm.addEventListener('submit', (e) => {
      e.preventDefault(); //Prevent Page Reload

      //Get Values
      const name = document.getElementById("courseName").value;
      const instructor = document.getElementById("instructor").value;
        const nameError = document.getElementById("nameError");
        const successMessage = document.getElementById('success-message');

      //VALIDATION CHECK
      if (name.length < 3) {
        nameError.innerText = "Course Name is too short!";
        return;
      }

      //Persistence: Retrieve existing data or create empty array
      const courses = JSON.parse(localStorage.getItem("courses")) || [];

      //Add New Object
        courses.push({ name, instructor });
        
       // Save back to local Storage
      localStorage.setItem("courses", JSON.stringify(courses));

        courseForm.reset();
        
        //UI Feedback
        if (successMessage) {
            successMessage.style.display = 'block';
        }
      alert("Course saved!");
    });
}





//-- Logic for Dashboard )Index) Page ---
const container = document.getElementById('course-list-container');
if (container) {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];


    //Check if Array is empty
    if (storedCourses.length === 0) {
        container.innerHTML = "<p>No courses added yet.Go to insert course'!</p>";

    
    } else {
        //Dynamic display using DOM Manipulation
        container.innerHTML = "";
        storedCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                       <h4>${course.name}</h4>
                       <p>Instructor:${course.instructor}</p>
                       `;
            container.appendChild(card);
        });
    }
}




        


//--- Logic for About Page ---
const countDisplay = document.getElementById('course-count');
if (countDisplay) {
    //Retrieve Array From local Storage
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    //Dynamically update the DOM with the count of items
    countDisplay.innerText = storedCourses.length;
    //BONUS:Add a hover effect via Js event listener as per rubric
    countDisplay.addEventListener('mouseover', () => {
        countDisplay.style.color = '#3498db';
    });
    countDisplay.addEventListener('mouseout', () => {
        countDisplay.style.color = '#2c3e50';
    });
    }
    





        



    
    
    
