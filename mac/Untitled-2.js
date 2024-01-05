// Function to store user data in Local Storage
function storeUserData() {
    // Get the values entered by the user for name and age
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Check if both name and age are filled
    if (name && age) {
        // Create an object to store user data
        const userData = {
            name: name,
            age: age
        };

        // Convert the object to a JSON string and store it in Local Storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Display a success message
        alert('User data stored successfully!');
    } else {
        // Display an error message if either name or age is missing
        alert('Please fill in both name and age fields.');
    }
}

// Function to retrieve and display user data from Local Storage
function retrieveAndDisplay() {
    // Retrieve the stored user data as a JSON string from Local Storage
    const userDataString = localStorage.getItem('userData');

    // Check if user data exists
    if (userDataString) {
        // Parse the JSON string to get the user data object
        const userData = JSON.parse(userDataString);

        // Get the display area element
        const displayArea = document.getElementById('displayArea');

        // Create a table to display user data
        const table = document.createElement('table');

        // Create header row
        const headerRow = table.insertRow();
        const nameHeader = headerRow.insertCell(0);
        const ageHeader = headerRow.insertCell(1);
        nameHeader.textContent = 'Name';
        ageHeader.textContent = 'Age';

        // Create data row
        const dataRow = table.insertRow();
        const nameCell = dataRow.insertCell(0);
        const ageCell = dataRow.insertCell(1);
        nameCell.textContent = userData.name;
        ageCell.textContent = userData.age;

        // Clear previous content and append the table to the display area
        displayArea.innerHTML = '';
        displayArea.appendChild(table);
    } else {
        // Display an error message if no user data is found
        alert('No user data found.');
    }
}
