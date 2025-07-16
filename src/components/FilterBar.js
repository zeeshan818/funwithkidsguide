import React from "react";

const types = ["All", "Indoor", "Outdoor"];
const costs = ["All", "Free", "Paid"];
const ages = ["All", "Toddler", "Preschool", "Elementary", "Tween"];
const locations = ["All", "Chicago", "Naperville", "Downers Grove", "Glen Ellyn"];

function FilterBar({ filters, setFilters }) {
  return (
    <div className="filters">
      <select value={filters.type} onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}>
        {types.map(type => <option key={type}>{type}</option>)}
      </select>
      <select value={filters.cost} onChange={e => setFilters(f => ({ ...f, cost: e.target.value }))}>
        {costs.map(cost => <option key={cost}>{cost}</option>)}
      </select>
      <select value={filters.age} onChange={e => setFilters(f => ({ ...f, age: e.target.value }))}>
        {ages.map(age => <option key={age}>{age}</option>)}
      </select>
      <select value={filters.location} onChange={e => setFilters(f => ({ ...f, location: e.target.value }))}>
        {locations.map(loc => <option key={loc}>{loc}</option>)}
      </select>
    </div>
  );
}

export default FilterBar;
