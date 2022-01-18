import React from 'react';

export class Timer extends React.Component {
    state={
        time:new Date()
    }

    componentDidMount(){
        this.timer= setInterval(() =>{
            this.setState({time:new Date()});
        },1000);
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    render(){
        const Component = this.props.component;
        return (
            <Component {...this.props} currtime={this.state.time}/>
        )
    }
};

export const withTimer=(Component)=>{
    let TimerComponent = (props)=>{
        return (<Timer {...props} component={Component}/>)
    }
    return TimerComponent;
}