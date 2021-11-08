const Hero = ({ id, name, onDeleteHero, handleRowClick }) => {
  return (
    <tr onClick={() => handleRowClick(id)} style={{ cursor: "pointer" }}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <button onClick={() => onDeleteHero(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Hero;
