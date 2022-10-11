const React = require('react') 

class Show extends React.Component { 
	render () { 
        const  pokemon = this.props.pokemon
        const  pokeName = this.props.pokemon.name
		return ( 
            <div>
			    <h1 style={styles.title} >Gotta Catch 'Em All!</h1>
                <h2 style={styles.h2}> {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}!</h2>
                <p style={styles.p}>Click the pokemon's image for more info!</p>
                <ul>
                    <li style={styles.li}>
                        {' '}
                        <br />
                        <a href={`https://www.pokemon.com/us/pokedex/${pokeName}`}>
                            <img src={`${pokemon.img}.jpg`} width="300" />
                        </a>
                    </li>
                </ul>
                <a style={styles.p} href={`/pokemon`}>Back</a>
            </div>
			) 
		} 
	} 
	
module.exports = Show






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