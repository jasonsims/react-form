
var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {btnState: 'default'}
  },
  handleClick: function() {
    this.setState({btnState: 'pending'});

    // Pretend we're actually taking some action here.
    window.setTimeout(this.onActionComplete, 2000);
  },
  onActionComplete: function() {
    this.setState({btnState: 'success'});
  },
  render: function() {
    var classString = 'btn';
    var btnText = (this.state.btnState === 'default')
      ? this.props.text
      : this.state.btnState;
    classString += ' btn-' + this.state.btnState;

    return (
      <button type="button" className={classString} onClick={this.handleClick}>
        {btnText}
      </button>
    )
  }
});
