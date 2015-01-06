
var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <button type="button" class="c-button">{this.props.text}</button>
    )
  }
});
