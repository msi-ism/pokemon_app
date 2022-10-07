const React = require('react') 

class Show extends React.Component { 
	render () { 
		return ( 
            <div>
			    <h1 style={styles.title} >Look at all these Pokemon!</h1>
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
    }