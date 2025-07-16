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
        <p>&copy; {new Date().getFullYear()} FunWithKidsGuide.com</p>
      </footer>
    </div>
  );
}

export default App;
