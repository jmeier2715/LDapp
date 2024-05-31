import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '6650e34a7349ed103c361509',
    context: {
      kind: 'user',
      key: 'example-user-key',
      name: 'Sandy',
    },
  });

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
  );
})();