import { Component } from 'react';
import Button from './components/Button';
import Medicine from './components/Medicine';
import Sport from './components/Sport';
import Games from './components/Games';
import Hobby from './components/Hobby';
import Advertising from './components/Advertising';
import './App.css';

class App extends Component {
  state = {
    activeCategory: 'Medicine',
  };

  handleCategoryChange = (category) => {
    this.setState({ activeCategory: category });
  };

  renderCategory = () => {
    const { activeCategory } = this.state;
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

  render() {
    const { activeCategory } = this.state;
    return (
      <div className="App">
        <header>
          <Button
            label="Medicine"
            onClick={() => this.handleCategoryChange('Medicine')}
            isActive={activeCategory === 'Medicine'}
          />
          <Button
            label="Sport"
            onClick={() => this.handleCategoryChange('Sport')}
            isActive={activeCategory === 'Sport'}
          />
          <Button
            label="Games"
            onClick={() => this.handleCategoryChange('Games')}
            isActive={activeCategory === 'Games'}
          />
          <Button
            label="Hobby"
            onClick={() => this.handleCategoryChange('Hobby')}
            isActive={activeCategory === 'Hobby'}
          />
          <Button
            label="Advertising"
            onClick={() => this.handleCategoryChange('Advertising')}
            isActive={activeCategory === 'Advertising'}
          />
        </header>
        <main>
          {this.renderCategory()}
        </main>
      </div>
    );
  }
}

export default App;
