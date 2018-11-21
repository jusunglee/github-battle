React = require('react')
var PropTypes = require('prop-types')

function SelectLanguage(props) {
    var languages = ["All", "Python", "C++", "JavaScript"];

    return(
        <ul className="languages">
            {
                languages.map(function(language) {
                    return (<li 
                    onClick = {props.onSelect.bind(null, language)}
                    style = {props.selectedLanguage === language ? {color : "#d0021b"}: null} 
                    key = {language}>{language}</li>)}, this)
            }
        </ul>
    )
}
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}
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
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect = {this.updateLanguage}
                />
            </div>
            
        );
    }
}

module.exports = Popular;