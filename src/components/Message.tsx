import * as React from 'react'

class Message extends React.Component<MessageProps> {
  render(){
    return (
      <div>
        {`A new message from ${this.props.from} to ${this.props.to}: ${this.props.body}`}
      </div>
    )
  }
}

interface MessageProps {
  body: string
  from: string
  to: string
}

export default Message