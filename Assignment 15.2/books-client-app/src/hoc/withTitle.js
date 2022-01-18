export const withTitle=(TargetComponent,defaulTitle)=>{
    const TitledComponent = (props)=>{
        let title = props.sceenTitle || defaulTitle;
        return(
            <div>
                <h1>{title}</h1>
                <TargetComponent {...props}/>
            </div>
        );
    }
    return TitledComponent;
}


