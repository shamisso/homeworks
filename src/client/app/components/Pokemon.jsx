import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends PureComponent {
  
  constructor(props){
    super(props);
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: 'Имя не указано',
  };

  render() {
    const { name, url} = this.props; 
    let pic = url.split('/')[url.split('/').length - 2];
    pic = +pic + 2;
    let picWay = 'img/' + `${pic}` + `.png`
    
    return (
      <div>
        <ul>
          <li>Имя: {name}</li>
          <li>url: {url}</li>
          <li><img src= { picWay } /></li>
        </ul>
      </div>

    );
  }
}