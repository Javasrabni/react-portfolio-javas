import { useEffect, useState } from "react"
import { useContext } from "react"
import { MobileModeContext } from "../../MediaQuerry/MobileMode"

export default function DevProject({Thumbnail, AltThumb, NameProject, Date, Desc, TechUsed, NameCompany, ProfileCompany, LinkCredential, ...Props}) {
    

    const MobileMode = useContext(MobileModeContext)

    const [HoveringCard, setHoveringCard] = useState(false)
    const ContainerBox = {
        width: Props.NewWidth ? Props.NewWidth : MobileMode ? "100%" : "306px",
        height: Props.NewHeight ? Props.NewHeight : Props.Certife ? MobileMode ? "100%" : "190px" : Props.UIProject ? "100%" : "fit-content",
        outline: Props.ActivedNewest ? "2px solid blue" : HoveringCard ? "2px solid var(--border)" : "1px solid var(--border)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        cursor: Props.Certife | Props.UIProject ? "" : "pointer"
    }

    const TitleProject = {
        letterSpacing: "-.025em",
        fontSize: Props.NewFontSize ? "12px" : "16px",
        fontWeight: "600",
        color: "var(--foreground)"
    }

    const [TechnologyUsed,] = useState([TechUsed])
    const BoxTech = {
        padding: "4px 8px",
        outline: "1px solid var(--border)",
        borderRadius: "4px",
        color: "var(--foreground)",
    }

    // Certificate
    useEffect(()=> {
        if(Props.Certife) {
            setHoveringCard(false)
        }
    }, [Props.Certife])
    function DirectCredential() {
        if(!LinkCredential) {
            return;
        } else {
            window.open(LinkCredential, '_blank')
        }
    }
    const [onZoomCertife, setOnZoomCertife] = useState(false)
    function HandleCertifeView() {
        if(!Props.Certife && !Props.UIProject) {
            return;
        } else {
            setOnZoomCertife((prev)=> !prev)
        }
    }

    useEffect(()=> {
        if(onZoomCertife) {
            document.body.style.overflow="hidden"
        } else {
            document.body.style.overflow="auto"
        }
    })

    const ZoomImageStyle = {
        width: "500px", height: "auto", zIndex: "17", padding: MobileMode && "0px 24px"
    }
    return (
        <>
            {onZoomCertife && (
                <>
                
                
                <div style={{position: "fixed", zIndex: "23", width: "100%", height: "100%",top:"0", left: "0", display: "flex", alignItems: Props.LongDesignHeight ? "start" : "center", justifyContent: "center", overflowY :"scroll", backgroundColor: Props.LongDesignHeight && "#00000090", backdropFilter: Props.LongDesignHeight && "blur(2px)"}} >

                    <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: Props.LongDesignHeight ? "transparent" : "#00000090", opacity: "80%", top:"0", left: "0", backdropFilter: !Props.LongDesignHeight && "blur(2px)"}} onClick={HandleCertifeView} className="BackFadeCertifeZoom" />

                    <div style={Props.LongDesignHeight ? Props.LongDesignHeight : ZoomImageStyle} className={MobileMode ? 'HandleCertifeZoomMobile' : 'HandleCertifeZoom'}>
                        <img src={Thumbnail} alt="" style={{width: "100%", height: "100%", borderRadius: "12px",}} draggable='false' onContextMenu={(e)=> e.preventDefault()} />  
                        <p style={{marginTop: "8px", textAlign: "center", fontSize: MobileMode && "12px"}}>{NameProject}</p>
                    </div>


                </div>
                        {Props.LongDesignHeight && (
                            <div style={{width: "25px", height: "25px", borderRadius: "100px", backgroundColor:"var(--background)", outline: "1px solid var(--border)", position: "fixed", top: MobileMode ? "32px" : "40px", right: MobileMode ? "20px" :"60px", zIndex: "30", color: "tomato", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: '12px'}} onClick={HandleCertifeView}>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        )}
                
                </>
            )}

        <div style={ContainerBox} onMouseOver={()=> setHoveringCard(true)} onMouseLeave={()=> setHoveringCard(false)}>
            <div style={{width: "100%", height: Props.Certife ? "0px" : "160px", display: Props.HideThumbnail ? "none" : "", cursor: Props.UIProject ?  "zoom-in" : ""}} onClick={HandleCertifeView}>
                {Props.Certife | Props.UIProject ? (
                    <div style={{width: "100%", height: "160px"}} >
                        <img src={Thumbnail} alt={NameProject} width={'100%'} height={'100%'} style={{display: Props.Certife && "none",borderRadius: "8px 8px 0px 0px",width:'100%' ,height:'100%', objectFit: "cover"}}/>
                    </div>
                ) : (
                    <video style={{borderRadius: "8px 8px 0px 0px",width:'100%' ,height:'100%', objectFit: "cover"}}  autoPlay muted loop>
                        <source src={Thumbnail} type="video/mp4"/>
                    </video>
                )}
            </div>
            
            <div style={{padding: Props.NewFontSize ? "12px" : "8px 12px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", width: "100%"}}>
                <div>

                    {/* Certificate */}
                    {Props.Certife && (
                        <p style={{...TitleProject, fontSize: Props.NewFontSize ? "12px" : ".75rem", fontWeight: "400", marginTop: Props.NewFontSize ? "2px" : "8px", letterSpacing: "0px", lineHeight: "1rem", color: "var(--muted-foreground)"}}>{Date}</p>
                    )}
                    <h3 style={TitleProject}>{NameProject}</h3>

                    {Props.Certife ? (
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", height: "20px", gap: "8px", marginTop: "8px"}}>
                            <div style={{width: "20px", height: "20px", backgroundColor: "var(--muted-foreground)", borderRadius: "100px"}}>
                                <img src={ProfileCompany} alt={NameCompany} width={'100%'} height={'100%'} style={{borderRadius: "100px"}}/>
                            </div>
                            <p style={{...TitleProject, fontSize: Props.NewFontSize ? "10px" : ".75rem", fontWeight: "400", marginTop: Props.NewFontSize ? "2px" : Props.Certife ? "0px" : "8px", letterSpacing: "0px", lineHeight: "1rem", }}>{NameCompany}</p>
                        
                        </div>
                    ) : (
                        <p style={{...TitleProject, fontSize: Props.NewFontSize ? "10px" : ".75rem", fontWeight: "400", marginTop: Props.NewFontSize ? "2px" : "8px", letterSpacing: "0px", lineHeight: "1rem", }}>{Date}</p>
                    )}

                    {!Props.DisableDesc && (
                        <p style={{...TitleProject, fontSize: Props.NewFontSize ? "12px" : ".75rem", fontWeight: "400", marginTop: "8px", letterSpacing: "0px", lineHeight: Props.NewFontSize ? "static" : "1rem", color: "var(--muted-foreground)", whiteSpace: "pre-wrap"}}>{Desc}</p>
                    )}

                </div>
                
                <div style={{...TitleProject, marginTop: "8px", fontSize: ".75rem", fontWeight: "400", letterSpacing: "0px", display: Props.HideThumbnail ? "none" : ""}}>
                    <div style={{display: "flex", flexDirection: "row", gap: "14px", alignItems: "center", width: "100%", justifyContent: "space-between"}}>
                        {Props.Certife ? (
                            <div style={{display: "flex", gap: "14px", }}>
                                {!Props.DisableCredential && (
                                    <div style={{padding: "4px 8px", outline: "1px solid var(--border)", borderRadius: "4px", backgroundColor: "var(--foreground)", display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer", marginBottom: "8px", marginTop: MobileMode && "8px", userSelect: "none"}} onClick={DirectCredential}>
                                            <p style={{color: "var(--background)", fontWeight: "500", fontSize: "10px"}}><i style={{paddingRight: "4px"}} class="fa-solid fa-trophy"></i> Show Credential</p>   
                                    </div>
                                )}
                                <div style={{marginTop: MobileMode ? Props.DisableCredential ? "4px" : "12px" : "4px", marginBottom: Props.DisableCredential && "8px", userSelect: "none", cursor: "pointer"}} onClick={HandleCertifeView}>
                                    <p style={{fontSize: "10px", textDecoration: "underline"}}>View Certificate</p>
                                </div>
                            </div>
                        ) : (
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", justifyContent: 'space-between', width: "100%"}}>
                                <div>
                                    <p style={{fontSize: "12px", display: Props.UIProject && "none", color: "white"}}>Technology used:</p>
                                    {TechnologyUsed.map((item, index) => 
                                        <div key={index} style={{width: "fit-content", display: 'flex', gap: "8px", marginTop: "8px", fontSize: "10px", paddingBottom:"2px", flexWrap: 'wrap'}}>
                                           {item && item.filter(value => value).map((subItem, index) => (
                                                <p key={index} style={BoxTech}>{subItem}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div style={{marginTop: "20px", visibility: Props.UIProject && "hidden"}}>
                                    <i style={{fontSize: "18px"}} class="fa-solid fa-square-arrow-up-right"></i>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
        
        
        
        </>
    )
}

