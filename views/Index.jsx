const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props
    return (
      <div>
        <h1 style={styles.title}>Look at all these Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon, idx) => (
                <li key={idx}>
                    {" "}
                    This is a <a href={`/pokemon/${idx}`}> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                </li>
            ))
            }
        </ul>
      </div>
    );
  }
}

module.exports = Index;

const styles = {
  title: {
    fontFamily: "Helvetica",
    fontSize: "30px",
  },
};
