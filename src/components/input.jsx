export const Input = ({ title, placeholder }) => {
    return (
        <div>
            <div>
                <p style={{fontWeight:700, color:"#002859", marginBottom:"2px"}}>
                    {title}
                </p>
            </div>
            <div>
                <input type="text" placeholder={placeholder} style={{border:"solid", borderWidth:"1px", paddingLeft:"0.5rem", paddingTop:"0.2rem", paddingBottom:"0.2rem", width:"100%", borderColor:"#E5E9F2", borderRadius:"6px", padding:"0.6rem 0.4rem"}} />
            </div>
        </div>
    );
}
