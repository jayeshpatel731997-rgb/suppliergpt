import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    supplier_name: '',
    po_number: '',
    expected_date: '',
    current_date: new Date().toISOString().split('T')[0]
  });
  
  const [emails, setEmails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(
        'http://localhost:8000/generate-email',
        formData
      );
      
      if (response.data.success) {
        setEmails(response.data.emails);
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      setError('Failed to generate emails. Make sure backend is running.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyToClipboard = (subject, body) => {
    const text = `Subject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(text);
    alert('Email copied to clipboard!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📧 SupplierGPT</h1>
        <p>AI-powered supplier follow-up emails</p>
      </header>

      <div className="container">
        <div className="form-section">
          <h2>Enter PO Details</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Supplier Name</label>
              <input
                type="text"
                name="supplier_name"
                placeholder="e.g., Acme Corporation"
                value={formData.supplier_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>PO Number</label>
              <input
                type="text"
                name="po_number"
                placeholder="e.g., PO-12345"
                value={formData.po_number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Expected Delivery Date</label>
              <input
                type="date"
                name="expected_date"
                value={formData.expected_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Current Date</label>
              <input
                type="date"
                name="current_date"
                value={formData.current_date}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={loading} className="generate-btn">
              {loading ? '⏳ Generating emails...' : '✨ Generate Emails'}
            </button>
          </form>

          {error && (
            <div className="error-message">
              ❌ {error}
            </div>
          )}
        </div>

        {emails && (
          <div className="results">
            <h2>Generated Emails</h2>
            
            {['formal', 'polite', 'urgent'].map((tone) => (
              <div key={tone} className="email-card">
                <div className="email-header">
                  <h3>
                    {tone === 'formal' && '👔'} 
                    {tone === 'polite' && '🤝'} 
                    {tone === 'urgent' && '🚨'} 
                    {' '}
                    {tone.charAt(0).toUpperCase() + tone.slice(1)} Tone
                  </h3>
                </div>
                
                <div className="when-to-use">
                  <strong>When to use:</strong> {emails[tone].when_to_use}
                </div>
                
                <div className="email-content">
                  <div className="subject-line">
                    <strong>Subject:</strong> {emails[tone].subject}
                  </div>
                  <div className="email-body">
                    <strong>Body:</strong>
                    <pre>{emails[tone].body}</pre>
                  </div>
                </div>
                
                <button 
                  onClick={() => copyToClipboard(emails[tone].subject, emails[tone].body)}
                  className="copy-btn"
                >
                  📋 Copy Email
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="footer">
        <p>Built with React + FastAPI + Claude API</p>
        <p>Part of a 12-week AI portfolio project</p>
      </footer>
    </div>
  );
}

export default App;