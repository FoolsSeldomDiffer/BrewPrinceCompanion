import { HashRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { allRecipes } from './recipeData';
import { type Recipe } from './types';

function CodeEntry() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (allRecipes[code]) {
      navigate(`/${code}`);
      setCode('');
    } else {
      setError('That code does not match any known recipe in your archives.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <section className="code-entry">
      <h3>Unlock New Knowledge</h3>
      <p>Enter the 6-digit code obtained from your successful brewery:</p>
      <form onSubmit={handleSubmit} className="code-form">
        <input 
          type="text" 
          value={code}
          onChange={(e) => setCode(e.target.value.trim())}
          placeholder="XXXXXX"
          maxLength={6}
          className="code-input"
        />
        <button type="submit" className="magic-button">Consult Archives</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </section>
  );
}

function RecipeDisplay() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const recipe: Recipe = (recipeId && allRecipes[recipeId]) || allRecipes['original'];

  return (
    <article className="recipe-book">
      <h2>{recipe.title}</h2>
      <p className="recipe-intro">{recipe.intro}</p>
      
      <ol className="recipe-steps">
        {recipe.steps.map((step, index) => (
          <li key={index}>
            <span className="step-title">{step.title}</span>
            <p className="step-desc">{step.description}</p>
          </li>
        ))}
      </ol>

      <section className="additional-instructions">
        <h3>Instructions:</h3>
        <ul>
          {recipe.additionalInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function App() {
  return (
    <Router>
      <main className="witch-app">
        <header>
          <h1>Alchemist's Recipe</h1>
        </header>

        <div className="home-container">
          <Routes>
            <Route path="/" element={<RecipeDisplay />} />
            <Route path="/:recipeId" element={<RecipeDisplay />} />
          </Routes>
          
          <CodeEntry />
        </div>
      </main>
    </Router>
  );
}

export default App;
