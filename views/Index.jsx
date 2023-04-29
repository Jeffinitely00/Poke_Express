const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>

        <ul>
          {pokemon.map((p, i) => {
            return (
              <li>
                <a href={`/pokemon/${i}`}>
                  {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
