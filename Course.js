document.addEventListener('DOMContentLoaded', () => {
    const addCourseForm = document.getElementById('add-course-form');
    const courseNameInput = document.getElementById('course-name');
    const courseDescriptionInput = document.getElementById('course-description');
    const coursesList = document.getElementById('courses');

    addCourseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const courseName = courseNameInput.value.trim();
        const courseDescription = courseDescriptionInput.value.trim();

        if (courseName && courseDescription) {
            const courseItem = document.createElement('li');
            courseItem.innerHTML = `<strong>${courseName}</strong>: ${courseDescription}`;
            coursesList.appendChild(courseItem);

            // Clear the input fields
            courseNameInput.value = '';
            courseDescriptionInput.value = '';
        }
    });
});



