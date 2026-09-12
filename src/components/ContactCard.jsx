import Badge from './Badge'
export default function ContactCard({ name, phone, email, role ,isFavorite }) {
  const cardStyle = {
    border: isFavorite ? '2px solid #ffd700' : '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: isFavorite ? '#fffef0' : '#fff'
  };

  return (
    <div style={cardStyle}>
      <Badge text={role} color={role === 'Trabajo' ? '#007bff' : role === 'Amigo' ? '#28a745' : '#dc3545'} />
           <h3 style={{ margin: '0 0 10px 0' }}>
        {name}
        <span style={{ marginLeft: '10px' }}>
          {isFavorite ? '⭐' : '☆'}
        </span>
        <span style={{ marginLeft: '10px' }}>
        </span>
      </h3>
      <p style={{ margin: '5px 0', color: '#666' }}>📞 {phone}</p>
      <p style={{ margin: '5px 0', color: '#666' }}>✉️ {email}</p>
    </div>
  );
}