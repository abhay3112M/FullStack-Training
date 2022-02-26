import {Component} from 'react';

export class Timer extends Component {

    state={
        time:new Date()
    }

    componentDidMount(){
        console.log('timer based component mounted');
        this.timer=setInterval(() =>{
            this.setState({time:new Date()});
        },1000);
    }

    componentWillUnmount(){
        console.log('timer based component unmounted');
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    render(){
        return (
        <div className="clock">
            <span>{this.state.time.toLocaleTimeString()}</span>
        </div>
        );
        //return this.props.render(this.state.time.toLocaleTimeString());
    }
};

export const withTimer= (TargetComponent)=>{
    //HOC component
    let TimerComponent= (props)=>{
    
        return <Timer render={ now=>(
                                 <TargetComponent {...props} now={now}/>
                                )
                           } />
    
    };

    return TimerComponent;
};