var React = require('react');
var ReactDOM = require('react-DOM');
var Link = require('react-router').Link;

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/client-resources">Client Resources</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;

