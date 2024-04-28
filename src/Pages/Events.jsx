import React from "react";

// Define an array of events
const events = [
  {
    title: "Event 1",
    date: "2022-01-01",
    location: "Location 1",
    description: "Description of Event 1",
  },
  {
    title: "Event 2",
    date: "2022-02-01",
    location: "Location 2",
    description: "Description of Event 2",
  },
  // Add more events as needed
];

// Function to display events
const Events = () => {
  // Get the element where you want to display the events
  const eventsContainer = document.getElementById("events-container");

  // Clear any existing content
  eventsContainer.innerHTML = "";

  // Loop through the events array and create HTML elements for each event
  events.forEach((event) => {
    // Create elements for event details
    const eventTitle = document.createElement("h2");
    eventTitle.textContent = event.title;

    const eventDate = document.createElement("p");
    eventDate.textContent = `Date: ${event.date}`;

    const eventLocation = document.createElement("p");
    eventLocation.textContent = `Location: ${event.location}`;

    const eventDescription = document.createElement("p");
    eventDescription.textContent = `Description: ${event.description}`;

    // Create a container element for the event details
    const eventContainer = document.createElement("div");
    eventContainer.classList.add("event");

    // Append event details to the container
    eventContainer.appendChild(eventTitle);
    eventContainer.appendChild(eventDate);
    eventContainer.appendChild(eventLocation);
    eventContainer.appendChild(eventDescription);

    // Append the event container to the events container
    eventsContainer.appendChild(eventContainer);
  });
};

// Call the displayEvents function to initially display the events
export default Events;
