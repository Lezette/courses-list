import React from 'react';

export const Total = ({ parts }) => {
    // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

    const total = parts.reduce((s, p) => s + p.exercises, 0);
    return(
      <p>Number of exercises {total}</p>
    ) 
}
