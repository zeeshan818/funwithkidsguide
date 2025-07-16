import React, { useState } from "react";
import ActivityCard from "./components/ActivityCard";
import FilterBar from "./components/FilterBar";
import SuggestForm from "./components/SuggestForm";
import activitiesData from "./data/activities.json";
import "./styles.css";

function App() {
  const [filters, setFilters] = useState({
    type: "All",
    cost: "All",
    age: "All",
    location: "All"
  });

  const [showForm, setShowForm] = useState(false);

  const filteredActivities = activitiesData.filter((activity) => {
    const typeMatch = filters.type === "All" || activity.type === filters.type;
    const costMatch = filters.cost === "All" || activity.cost === filters.cost;
    const ageMatch = filters.age === "All" || activity.age === filters.age;
    const locMatch = filters.location === "All" || activity.location === filters.location;
    return typeMatch && costMatch && ageMatch && locMatch;
  });

  return (
    <div className="container">
      <header>
        <h1>Fun With Kids Guide</h1>
        <button className="suggest-btn" onClick={() => setShowForm(true)}>
          Suggest a Place
        </button>
      </header>

      {/* Homepage Introduction Block */}
      <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f9fafb', borderRadius: '1rem', border: '1px solid #ececec' }}>
        <h2>Welcome to Fun With Kids Guide!</h2>
        <p>
          Fun With Kids Guide is your ultimate resource for discovering the best family-friendly activities, parks, museums, nature preserves, and hidden gems in Chicago and its suburbs.
          <br /><br />
          Every place on our site is hand-picked and regularly updated by real local parents. Our mission is to make it easy for families to plan safe, fun, and memorable adventures together—rain or shine!
          <br /><br />
          Whether you’re searching for free things to do, indoor playgrounds, or unique learning experiences, you’ll find the perfect outing here. New listings and reviews are added every week!
        </p>
      </div>
      {/* End Introduction Block */}

      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="activity-list">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      {showForm && <SuggestForm close={() => setShowForm(false)} />}
      <footer>
  <p>
    &copy; {new Date().getFullYear()} FunWithKidsGuide.com &nbsp;|&nbsp; 
    <a href="/about">About</a> &nbsp;|&nbsp; 
    <a href="/contact">Contact</a>
  </p>
	</footer>
    </div>
  );
}

export default App;
