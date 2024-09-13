import { useRef, useState, useContext } from "react"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"

export default function MusicPlayer() {
    const MobileMode = useContext(MobileModeContext)

    const ContainerPlay = {
        width: "fit-content",
        height: "40px",
        borderRadius: "8px",
        backgroundColor: 'var(--background)',
        boxShadow: 'inset 0 -20px 80px -20px #ffffff1f',
        position: "fixed",
        bottom: '40px',
        right: "74px",
        padding: "4px 14px",
        display: MobileMode ? "none" : "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "12",
        gap: "8px"
    }

    const [onMusicContainer, setOnMusicContainer] = useState(false)
    const [onMusicBtn, setMusicBtn] = useState(false)
    const PlayMusic = useRef(null)
    function HandleClickPlay() {
        setOnMusicContainer((prev)=> !prev)
        setMusicBtn((prev)=> !prev)

        if(PlayMusic.current) {
            PlayMusic.current.play()
        }
    }
    function HandleClickPause() {
        setOnMusicContainer((prev)=> !prev)
        setMusicBtn((prev)=> !prev)

        if(PlayMusic.current) {
            PlayMusic.current.pause()
        }
    }
    const setVolume = (volume) => {
        PlayMusic.current.volume = volume;
      };

    
    return (
        <>
        
        
        <div style={ContainerPlay}>
            <div style={{display: "flex", flexDirection: "row", gap: "8px", height: "100%", alignItems: "center"}}>
                <audio loop ref={PlayMusic} src="https://res.cloudinary.com/dwf753l9w/video/upload/v1722389499/spotifydown.com_-_Merry-Go-Round_of_Life_-_from_Howl_s_Moving_Castle_t05y0s.mp3"/>

                {onMusicContainer ? (
                    <div style={{width: "25px", height: "25px", borderRadius: "100px", cursor: "pointer", outline: "1px solid var(--border)", display: "flex", flexShrink: "0", alignItems: "center", justifyContent: "center"}} onClick={HandleClickPause}>
                        <i style={{fontSize: "10px", color: "var(--foreground)", marginLeft: "2px"}} class="fa-solid fa-pause"></i>
                    </div>
                ) : (
                    <div style={{width: "25px", height: "25px", borderRadius: "100px", cursor: "pointer", display: "flex", outline: "1px solid var(--border)", flexShrink: "0", alignItems: "center", justifyContent: "center"}} onClick={HandleClickPlay}>
                        <i style={{fontSize: "10px", color: "var(--foreground)", marginLeft: "2px"}} class="fa-solid fa-play"></i>
                    </div>
                )}

                <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h1 style={{letterSpacing: "-.025em", fontSize: "10px"}}>Chill, Sip your coffe</h1>
                    <p style={{letterSpacing: "-.025em", fontSize: "10px"}}>La matriarca - the libertine</p>
                </div>
            </div>
        </div>
        </>
    )
}