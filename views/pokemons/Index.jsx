const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!'</h1>
        <a href={"/pokemon/new"}>Create a Pokemon</a>
        <ul>
          {pokemons.map((pokie, x) => {
            //X is the index of the array
            return (
              <li>
                <a href={`/pokemon/${pokie._id}`}>
                  {pokie.name[0].toUpperCase() + pokie.name.slice(1)}
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
