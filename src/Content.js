import React from 'react';
import { Part } from './Part';

export const Content = ({ course }) => {
    const {parts} = course;
    return (
      <div>
          {parts.map((part, i) => (
            <Part key={i} part={part} />
          ))}
      </div>
    )
  }