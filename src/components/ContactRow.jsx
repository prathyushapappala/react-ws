export const ContactRow = (props) => {
    const {data} = props
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', border: '1px solid #ccc', padding: '10px'}}>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.city}</p>
        </div>
    )
}