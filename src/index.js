import React, { Component } from 'react';
import { render } from 'react-dom';


class TodoList extends Component {
    render(){
        return <ul>{
            this.props.items.map(item => <li key={item.id}>{item.text}</li> )
        }</ul>
    }
}


class TodoApp extends Component {
    constructor(){
        // blah(function(){
        // merp()
        super()
        this.state = {
            items: []
        }    
        // })
        
    }
    onChange(e){
        this.setState({ text: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    }
    render() {
        return (
          <div>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input onChange={this.onChange.bind(this)} value={this.state.text} />
              <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
          </div>
        );
    }
}


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
