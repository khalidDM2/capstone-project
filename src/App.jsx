import { useState } from 'react';

const initialForm = {
  fullName: 'Alex Morgan',
  email: 'alex@example.com',
  language: 'English',
  timezone: 'UTC-05:00',
  theme: 'dark',
  density: 'comfortable',
  weeklyDigest: true,
  productUpdates: false,
  autoSave: true,
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setIsSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSaved(true);
  };

  return (
    <main className="page-shell">
      <section className="settings-card" aria-label="Account settings form">
        <div className="card-header">
          <div>
            <p className="eyebrow">Preferences</p>
            <h1>Settings</h1>
          </div>
          <button type="button" className="ghost-button">
            Restore defaults
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label className="field field-wide">
              <span>Full name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </label>

            <label className="field field-wide">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className="field">
              <span>Language</span>
              <select name="language" value={formData.language} onChange={handleChange}>
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
            </label>

            <label className="field">
              <span>Timezone</span>
              <select name="timezone" value={formData.timezone} onChange={handleChange}>
                <option>UTC-08:00</option>
                <option>UTC-05:00</option>
                <option>UTC+00:00</option>
                <option>UTC+01:00</option>
                <option>UTC+05:30</option>
              </select>
            </label>

            <div className="field field-wide">
              <span>Theme</span>
              <div className="option-row" role="radiogroup" aria-label="Theme selection">
                {['light', 'dark', 'system'].map((theme) => (
                  <label key={theme} className="option-pill">
                    <input
                      type="radio"
                      name="theme"
                      value={theme}
                      checked={formData.theme === theme}
                      onChange={handleChange}
                    />
                    <span>{theme}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field field-wide">
              <span>Display density</span>
              <div className="option-row" role="radiogroup" aria-label="Display density selection">
                {['compact', 'comfortable', 'spacious'].map((density) => (
                  <label key={density} className="option-pill">
                    <input
                      type="radio"
                      name="density"
                      value={density}
                      checked={formData.density === density}
                      onChange={handleChange}
                    />
                    <span>{density}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="toggle-group">
            <label className="switch-row">
              <div>
                <strong>Weekly digest</strong>
                <small>Receive a summary every Friday.</small>
              </div>
              <input
                type="checkbox"
                name="weeklyDigest"
                checked={formData.weeklyDigest}
                onChange={handleChange}
              />
            </label>

            <label className="switch-row">
              <div>
                <strong>Product updates</strong>
                <small>Stay informed about new features.</small>
              </div>
              <input
                type="checkbox"
                name="productUpdates"
                checked={formData.productUpdates}
                onChange={handleChange}
              />
            </label>

            <label className="switch-row">
              <div>
                <strong>Auto save</strong>
                <small>Save changes automatically as you type.</small>
              </div>
              <input
                type="checkbox"
                name="autoSave"
                checked={formData.autoSave}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="actions">
            <button type="button" className="secondary-button">
              Cancel
            </button>
            <button type="submit" className="primary-button">
              Save changes
            </button>
          </div>

          {isSaved && <p className="success-message">Changes saved successfully.</p>}
        </form>
      </section>
    </main>
  );
}

export default App;
