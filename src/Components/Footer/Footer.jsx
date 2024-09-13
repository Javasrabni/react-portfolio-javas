import { useContext } from "react"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"

export default function Footer() {
    const MobileMode = useContext(MobileModeContext)
    function HandleEmail() {
        const email = 'jarcode.devp@gmail.com'
        setTimeout(()=> {
            if(MobileMode) {
                window.open(`intent://compose?to=${email}#Intent;scheme=mailto;package=com.google.android.gm;end`)
            } else {
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jarcode.devp@gmail.com', '_blank')
            }
        }, 1000)
    }
    return (
        <div style={{zIndex: "15"}}>
            <div style={{width: "100%", marginBottom: "40px"}} />
            <h1 style={{textAlign: "center", fontSize: "30px"}}>Looking Forward!</h1>
            <p style={{fontSize: MobileMode ? "14px" : "16px", textAlign: "center", padding: MobileMode ? "0px 14px" : "0px 28px", userSelect: "none"}}>Feel free to connect, Just mail me <span style={{color: '#3B82F6', cursor: "pointer", userSelect: "none"}} onClick={HandleEmail}>with a direct question on email</span> and I'll respond whenever I can.</p>

            <div style={{display: "flex", gap: "14px", marginTop: "14px", width: "100%", justifyContent: "center",}}>
                <i style={{cursor: "pointer"}} onClick={()=> window.open('https://www.linkedin.com/in/javasrabni', '_blank')} class="fa-brands fa-linkedin" title="Linkedin"></i>
                <i style={{cursor: "pointer"}} onClick={HandleEmail} class="fa-solid fa-at" title="Gmail"></i>
            </div>
        </div>
    )
}