import { useState } from 'react';
import { QUIZ_OPTIONS } from '../../data/productDetails';

const inputStyle = {
  padding: '12px 16px',
  border: '1px solid #d9e2e4',
  fontSize: 14,
  color: '#003b4a',
  outline: 'none',
  width: '100%'
};

const QuizSection = () => {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{ padding: '64px 20px', maxWidth: 800, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 400, textTransform: 'uppercase', fontFamily: 'Handlee, cursive', color: '#003b4a', marginBottom: 16 }}>
          Valentine's Day Quiz
        </h2>
        <p style={{ color: '#444', lineHeight: 1.6 }}>
          Answer a fun quiz and win an exclusive, limited-edition gift!<br/>
          Guess the classic Chinese love story engraved on the Love Lock Lipstick.<br/>
          <strong>20 lucky winners</strong> will receive the Butterfly Love Flower Cosmetic Pouch.
        </p>
      </div>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: 40, background: '#f4f9f9', border: '1px solid #d9e2e4' }}>
          <h3 style={{ color: '#003b4a', marginBottom: 12 }}>Thank You for Participating!</h3>
          <p style={{ color: '#555' }}>Your entry has been submitted. Good luck!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, color: '#003b4a', display: 'block', marginBottom: 12 }}>
              What story is engraved on the Love Lock Lipstick? *
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
              {QUIZ_OPTIONS.map((opt) => (
                <label key={opt.value} style={{ cursor: 'pointer', border: answer === opt.value ? '2px solid #003b4a' : '1px solid #d9e2e4', padding: 8, textAlign: 'center' }}>
                  <img src={opt.img} alt={opt.label} style={{ width: '100%', height: 120, objectFit: 'cover', marginBottom: 8 }} />
                  <input
                    type="radio"
                    name="quiz"
                    value={opt.value}
                    checked={answer === opt.value}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ marginRight: 6 }}
                  />
                  <span style={{ fontSize: 12, color: '#003b4a' }}>{opt.label}</span>
                </label>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#777', marginTop: 8, fontStyle: 'italic' }}>
              Note: This is a story about a man drawing eyebrows for his beloved wife.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <input required placeholder="First Name" style={inputStyle} />
            <input required type="email" placeholder="Email" style={inputStyle} />
            <input required placeholder="Phone" style={inputStyle} />
            <input required placeholder="Post Code" style={inputStyle} />
          </div>
          <textarea required placeholder="Address: Please fill in your shipping address in detail." rows={3} style={{ ...inputStyle, width: '100%' }} />

          <button
            type="submit"
            disabled={!answer}
            style={{
              padding: '14px 32px',
              background: '#003b4a',
              color: '#f4d19e',
              border: 'none',
              fontSize: 14,
              fontWeight: 600,
              textTransform: 'uppercase',
              cursor: answer ? 'pointer' : 'not-allowed',
              opacity: answer ? 1 : 0.5,
              letterSpacing: 1
            }}
          >
            Submit Entry
          </button>
        </form>
      )}
    </section>
  );
};

export default QuizSection;
