import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [userData, setUserData] = useState('');

  const handleUser = async () => {
    const response = await fetch('https://api.github.com/users/imsun/repos');
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className='App'>
      {userData &&
        userData.map((items) => {
          const {
            name,
            open_issues: issues,
            owner: { login },
          } = items;

          {
            /* console.log(login); */
          }
          return (
            <section key={items.id}>
              <h4>Reponame - {name}</h4>
              <p>Number of Issues - {issues}</p>
              <Link to={`/repo/${name}/issue/${login}`}>
                <button>Issues</button>
              </Link>
            </section>
          );
        })}
    </div>
  );
}

export default App;

// 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

