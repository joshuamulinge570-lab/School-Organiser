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
    } )
}

//Get Values
const name = document.getElementById('courseName').value;
const instructor = document.getElementById('instructor').value;

//Form Validation
if (name.length < 3) {
    document.getElementById('nameError').innerText = "Course name too short!"
    return;  
}

//Persistence: Retrieve existing data or create empty array
const courses = JSON.parse(localStorage.getItem('courses')) || [];

//Add New Object
courses.push({ name, instructor });

//Save back to local Storage
localStorage.setItem('courses', JSON.stringify(courses));

//UI Feedback
document.getElementById('success-message').style.display = 'block';
courseForm.reset();
;


//-- Logic for Dashboard )Index) Page ---
const container = document.getElementById('course-list-container');
if (container) {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
}
if (storedCourses.length === 0) {
    container.innerHTML = "<p>No courses added yet.Go to insert course'!</p>";

} else {
    //Dynamic display using DOM Manipulation
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
    





        



    
    
    
