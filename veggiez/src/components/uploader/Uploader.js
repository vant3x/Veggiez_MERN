import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {green400, green500,green600,
  green800,lightGreen800,lightGreen600,
  white,red700,red600,redA400,red500} from 'material-ui/styles/colors';
export default class Uploader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      file: {name: ''}
    }
    this.openInput = this.openInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  openInput(){
    this.refs.file.click()
  }
  handleFile(ev){
    let file = ev.target.files[0];
    if(!file) return;

    this.setState({
      file: file
    });

    this.props.getFile(this.props.type, file)
  }

  render(){
    return(
      <div>
        <input
          type="file"
          ref="file"
          style={{'display':'none'}}
          onChange={this.handleFile}
        />
        <span style={{'marginRight':'0.5em'}}>{this.state.file.name}</span>
        <RaisedButton label={this.props.label}
           backgroundColor={lightGreen600} 
           labelColor={white}
           onClick={this.openInput}
        />
      </div>
    );
  }
}