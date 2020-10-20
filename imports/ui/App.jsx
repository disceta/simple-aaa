import React, { PureComponent } from 'react';
import { UserList } from './UserList.jsx';
import { Chat } from './Chat.jsx';
import { WorkArea } from './WorkArea.jsx';
import { Resizable } from 're-resizable';
import { SplitterLayout } from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const dispatchResizeEvent = () => window.dispatchEvent(new Event('resize'));


class AppPanel extends PureComponent {
  
  constructor() {
    super();
    this.state = {
      heightUserPanel: 180,
      heightChatPanel: 100,
    };
  }
  
  renderUser() {
    return (
        <UserList />
    )
  }

  renderUserResizable() {
    const {heightUserPanel} = this.state;
    
    const resizableEnableOptions = {
      top: false,
      right: true,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    };
    
    const style = {
      border: "solid 6px #ddd",
      background: "#f0f0f0",
      top: "0px",
    };

    return (
      <Resizable 
        minWidth={200}
        maxWidth={600}
        minHeight={100}
        maxHeight={"100%"}
        style={style}
        defaultSize={{
          width:320,
          height:200,
        }}
        ref={(node) => { this.resizableUserList = node; }} 
        enable={resizableEnableOptions}
        size={{ height: heightUserPanel }}
        onResize={dispatchResizeEvent}
        onResizeStop={(e, direction, ref, d) => {
          this.setState({
            heightUserPanel: heightUserPanel + d.height,
          });
          /*this.resizableChat.updateSize({width:30 , height:30});*/
        }}
      >
        {renderUser()}
      </Resizable>
    )
  }
  

  renderChat() {
    return (
        <Chat />
    )
  }

  renderChatResizable() {

    const {heightChatPanel} = this.state;
    
    const resizableEnableOptions = {
      top: true,
      right: false,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    };
    
    const style = {
      position: "relative",
      alignItems: "center",
      justifyContent: "left",
      border: "solid 1px #ddd",
      background: "#f0f0f0",
      bottom: "0px",
    };

    return (
      <Resizable 
        style={style}
        minHeight={50}
        maxHeight={"100%"}
        defaultSize={{
          width:320,
          height:200,
        }}
        ref={(node) => { this.resizableChat = node; }} 
        enable={resizableEnableOptions}
        size={{ height: heightChatPanel }}
        onResize={dispatchResizeEvent}
        onResizeStop={(e, direction, ref, d) => {
          this.setState({
            heightChatPanel: d.height,
          });
          /*this.resizableUserList.updateSize({width:30 , height:30});*/
        }}
      >
        <Chat />
      </Resizable>
    )
  }
  
  renderWork() {
    return (
      <WorkArea />
    )
  }

  render() {
    
    const {widthPanel} = this.state;
    
    const resizableEnableOptions = {
      top: false,
      right: true,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    };
    
    /*const style = {
      position: "absolute",
      border: "solid 1px #ddd",
      background: "gray",
      height: "100%",
      width: "100px",
      left: "0px",
      top: "0px",    
    };*/
    
    return (
    <div className="mainFrame">
      <Resizable 
        className="resizablePanel"
        /*style={style}*/
        minWidth={150}
        maxWidth={300}
        ref={(node) => { this.resizableChat = node; }} 
        enable={resizableEnableOptions}
        size={{ width: widthPanel }}
        onResize={dispatchResizeEvent}
        onResizeStop={(e, direction, ref, d) => {
          this.setState({
            widthPanel: widthPanel + d.widt,
          });
        }}
      >
      {this.renderUser()}
      {this.renderChat()}
      </Resizable>
      
      <WorkArea />
      </div>
    )
  }
};

export const App = () => (
    <AppPanel />
);
