const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props
    return (
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png' width="300"></img>
        <h1 style={styles.title}>Here are all the pokemon currently in the Pokedex!</h1>
        <ul>
            {pokemon.map((pokemon, idx) => (
                <li style={styles.p} key={idx}>
                    {" "}
                    <a href={`/pokemon/${pokemon._id}`}> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                </li>
            ))
            }
        </ul>
        <a style ={styles.h2} href='/pokemon/new'>Create New Pokemon!</a>
      </div>
    );
  }
}

module.exports = Index;

const styles = {
    title: {
        fontFamily: 'Helvetica',
        fontSize: '30px'
    },
    h2: {
        fontFamily: 'Helvetica',
        fontSize: '22px'
    },
    li: {
        listStyle: 'none'
    },
    p: {
        fontFamily: 'Helvetica'
    }

    }