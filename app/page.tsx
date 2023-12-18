import React from 'react';
import Link from 'next/link';
import Home from './components/Home';

function App() {
  return (
    <div>
        <nav>
            {/*<Link href="/">
                Home
  </Link>*/}
          Welcome!
        </nav>
      {/*<Route path="/questionnaire" element={<Questions />} />
      */}
      <Home />
    </div>
  );
}

export default App;