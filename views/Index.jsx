const React = require('react') 

class Index extends React.Component { 
	render () { 
		return ( 
            <div>
			    <h1 style={styles.title} >Look at all these Pokemon!</h1>
            </div>
			) 
		} 
	} 
	
module.exports = Index






const styles = {
    title: {
        fontFamily: 'Helvetica',
        fontSize: '30px'
    },
    }