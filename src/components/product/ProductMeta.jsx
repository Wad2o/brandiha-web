const ProductMeta = ({ sku, gtin }) => (
  <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #d9e2e4', fontSize: 12, color: '#666', display: 'flex', gap: 16 }}>
    <span>SKU: {sku}</span>
    <span>GTIN: {gtin}</span>
  </div>
);

export default ProductMeta;
