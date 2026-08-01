const StarRating = ({ value, count }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
    <div style={{ display: 'flex', color: '#003b4a' }}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={s <= Math.round(value) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
    <span style={{ fontSize: 14, color: '#555' }}>{value} ({count} reviews)</span>
  </div>
);

export default StarRating;
