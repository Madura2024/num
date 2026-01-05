import { useState } from 'react'
import axios from 'axios'
import ResultDisplay from './components/ResultDisplay'
import './App.css'

function App() {
  const [dob, setDob] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCalculate = async (e) => {
    e.preventDefault()
    if (!dob) return

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await axios.post('http://localhost:3000/calculate-numerology', { dob })
      setResult(response.data)
    } catch (err) {
      console.error(err)
      setError('Failed to calculate. Is the backend running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className="magic-title">✨ Numerology Match ✨</h1>
      <div className="card" style={{ maxWidth: '800px' }}>
        <form onSubmit={handleCalculate}>
          <div className="input-group">
            <label htmlFor="dob">Select Your Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Comparing...' : 'Check Alignment'}
          </button>
        </form>

        {error && <p style={{ color: '#ef4444', marginTop: '1rem' }}>{error}</p>}

        {result && <ResultDisplay
          dayNum={result.dayNumber}
          lpNum={result.lpNumber}
          daySteps={result.daySteps}
          lpSteps={result.lpSteps}
          message={result.message}
          isMatch={result.isMatch}
        />}
      </div>
    </>
  )
}

export default App
