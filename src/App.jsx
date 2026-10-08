import { useState } from 'react';
import UserSettingsForm from './UserSettingsForm.jsx';

function App() {
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSave = (settings) => {
    setSubmissionMessage(`Settings submitted for ${settings.fullName}.`);
  };

  return (
    <main className="page">
      <UserSettingsForm onSave={handleSave} />
      {submissionMessage && (
        <p className="submission-message" role="status">
          {submissionMessage}
        </p>
      )}
    </main>
  );
}

export default App;
