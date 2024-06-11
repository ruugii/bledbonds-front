interface CloseProps {
    className?: string;
}

export default function Check(props:CloseProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="CurrentColor" viewBox="0 0 24 24" className={`${props.className}`}><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
    );
}