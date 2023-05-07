import './text.css'
export default function Text({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export function SubHeading({ children, className }) {
    return (
        <div className='sub-heading'>
            <div className="text">
                {children}
            </div>
            <div className='outline'></div>
        </div>
    )
}