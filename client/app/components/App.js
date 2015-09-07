/**
 * Created by Ian on 8/21/15.
 */

var React = require('react');

var App = React.createClass({

    render() {
        return (
            <div>
                <header className="mastHead"></header>
                <section className="hull">
                    <h1>React is running...</h1>
                </section>
                <footer className="keel"></footer>
            </div>
        );
    }

});

module.exports = App;