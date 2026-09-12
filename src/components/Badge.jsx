export default function Badge({ text, color }) {
  return (
    <span style={{ display: 'inline-block', padding: '2px 6px', borderRadius: '4px', color: '#fff', backgroundColor: color }}>
      {text}
    </span>
  );
}