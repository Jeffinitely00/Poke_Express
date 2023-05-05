const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <a href="/pokemon">Back</a>
      </div>
    );
  };
};

module.exports = Show;
