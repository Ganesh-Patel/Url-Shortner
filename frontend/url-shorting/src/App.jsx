import { useState } from 'react';
import axios from 'axios'; // Import axios
import styles from './URLShortener.module.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl) return;
    console.log('before API call: ' + longUrl);
    setLoading(true);

    try {
      console.log('API call');
      // Make sure to use longUrl instead of undefined 'url'
      const response = await axios.post('http://localhost:3000/api/url-shortener', { url: longUrl });
      console.log(response.data);
      alert(response.data.message);
      setShortUrl(response.data.link); // Assuming the response has 'link'
      setLoading(false);
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
      setLoading(false); // Make sure loading state is reset in case of error
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>URL Shortener</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Enter a long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>

      {shortUrl && (
        <div className={styles.result}>
          <p className={styles.shortUrl}>
            Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
            Visit
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
