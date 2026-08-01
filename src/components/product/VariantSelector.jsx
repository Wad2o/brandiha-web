const VariantSelector = ({ variants, selected, onSelect }) => (
  <div style={{ marginBottom: 24 }}>
    <label style={{ display: 'block', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, fontWeight: 600, color: '#003b4a' }}>
      Shade: {selected.name}
    </label>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {variants.map((v) => (
        <button
          key={v.id}
          onClick={() => v.available && onSelect(v)}
          disabled={!v.available}
          title={v.name}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: v.color || '#ddd',
            border: selected.id === v.id ? '2px solid #003b4a' : '2px solid transparent',
            outline: selected.id === v.id ? '1px solid #003b4a' : 'none',
            outlineOffset: 2,
            cursor: v.available ? 'pointer' : 'not-allowed',
            opacity: v.available ? 1 : 0.4,
            transition: 'all 0.2s',
            position: 'relative'
          }}
        >
          {!v.available && (
            <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: 2, background: '#fff', transform: 'translateY(-50%) rotate(45deg)' }} />
          )}
        </button>
      ))}
    </div>
  </div>
);

export default VariantSelector;
