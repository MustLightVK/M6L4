import React, { useState } from 'react';
import Button from './components/Button';
import Medicine from './components/Medicine';
import Sport from './components/Sport';
import Games from './components/Games';
import Hobby from './components/Hobby';
import Advertising from './components/Advertising';
import './App.css';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Medicine');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderCategory = () => {
    switch (activeCategory) {
      case 'Medicine':
        return <Medicine />;
      case 'Sport':
        return <Sport />;
      case 'Games':
        return <Games />;
      case 'Hobby':
        return <Hobby />;
      case 'Advertising':
        return <Advertising />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <Button
          label="Medicine"
          onClick={() => handleCategoryChange('Medicine')}
          isActive={activeCategory === 'Medicine'}
        />
        <Button
          label="Sport"
          onClick={() => handleCategoryChange('Sport')}
          isActive={activeCategory === 'Sport'}
        />
        <Button
          label="Games"
          onClick={() => handleCategoryChange('Games')}
          isActive={activeCategory === 'Games'}
        />
        <Button
          label="Hobby"
          onClick={() => handleCategoryChange('Hobby')}
          isActive={activeCategory === 'Hobby'}
        />
        <Button
          label="Advertising"
          onClick={() => handleCategoryChange('Advertising')}
          isActive={activeCategory === 'Advertising'}
        />
      </header>
      <main>
        {renderCategory()}
      </main>
    </div>
  );
};

export default App;
