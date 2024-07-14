document.addEventListener('DOMContentLoaded', function() { // Wait for the DOM to load before executing the script
    const sections = document.querySelectorAll('section'); // Select all section elements
    const interestsHeading = document.getElementById('hover-interests'); // Select the interests heading by ID
    const hobbiesHeading = document.getElementById('hover-hobbies'); // Select the hobbies heading by ID
    const skillsHeading = document.getElementById('hover-skills'); // Select the skills heading by ID
    const interestsList = document.querySelector('ul.interests'); // Select the interests list by class
    const hobbiesList = document.querySelector('ul.hobbies'); // Select the hobbies list by class
    const skillsList = document.querySelector('ul.skills'); // Select the skills list by class
    const interestsItems = document.querySelectorAll('ul.interests li'); // Select all list items under the interests list
    const hobbiesItems = document.querySelectorAll('ul.hobbies li'); // Select all list items under the hobbies list
    const skillsItems = document.querySelectorAll('ul.skills li'); // Select all list items under the skills list
    const navLinks = document.querySelectorAll('header nav ul li a'); // Select all navigation links in the header

    const observer = new IntersectionObserver(entries => { // Create a new IntersectionObserver instance
        entries.forEach(entry => { // Iterate over each entry
            if (entry.isIntersecting) { // Check if the entry is intersecting
                entry.target.classList.add('visible'); // Add the visible class to the target
            }
        });
    }, {
        threshold: 0.1 // Trigger the observer when 10% of the target is visible
    });

    sections.forEach(section => { // Iterate over each section
        observer.observe(section); // Observe each section
    });

    interestsHeading.addEventListener('mouseover', () => { // Add mouseover event listener to the interests heading
        interestsList.classList.add('visible'); // Add the visible class to the interests list
        interestsItems.forEach((item, index) => { // Iterate over each interests list item
            setTimeout(() => {
                item.classList.add('visible'); // Add the visible class to each item with a delay
            }, index * 200);
        });
    });

    hobbiesHeading.addEventListener('mouseover', () => { // Add mouseover event listener to the hobbies heading
        hobbiesList.classList.add('visible'); // Add the visible class to the hobbies list
        hobbiesItems.forEach((item, index) => { // Iterate over each hobbies list item
            setTimeout(() => {
                item.classList.add('visible'); // Add the visible class to each item with a delay
            }, index * 200);
        });
    });

    skillsHeading.addEventListener('mouseover', () => { // Add mouseover event listener to the skills heading
        skillsList.classList.add('visible'); // Add the visible class to the skills list
        skillsItems.forEach((item, index) => { // Iterate over each skills list item
            setTimeout(() => {
                item.classList.add('visible'); // Add the visible class to each item with a delay
            }, index * 200);
        });
    });

    navLinks.forEach(link => { // Iterate over each navigation link
        link.addEventListener('click', (event) => { // Add click event listener to each link
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target ID from the href attribute
            const targetSection = document.getElementById(targetId); // Get the target section by ID

            window.scrollTo({
                top: targetSection.offsetTop - 20, // Scroll to the target section with an offset
                behavior: 'smooth' // Smooth scroll behavior
            });
        });
    });
});