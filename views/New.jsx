const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1 style={styles.h2}>Create Your Own Pokemon!</h1>
                <form action='/pokemon' method='POST'>
                     Name: <input type='text' name='name'/> 
                     <br />
                     Type: <input type='text' name='type'/>
                     <br />      
                     Image Address: <input type='text' name='img'/>
                     <br />
                     <input type='submit' value='Create new pokemon' />
                </form>
            </div>
        )
    }
}

module.exports = New

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