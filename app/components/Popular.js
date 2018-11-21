React = require('react')

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: "All"
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(newLanguage) {
        this.setState(function(language) {
            return {
                selectedLanguage: newLanguage
            }
        });
    }

    render() {
        var languages = ["All", "Python", "C++", "JavaScript"];
        return (
            <ul className="languages">
                {
                    languages.map(function(language) {
                        return (<li 
                        onClick = {this.updateLanguage.bind(null, language)}
                        style = {this.state.selectedLanguage === language ? {color : "#d0021b"}: null} 
                        key = {language}>{language}</li>)}, this)
                }
            </ul>
        );
    }
}

module.exports = Popular;