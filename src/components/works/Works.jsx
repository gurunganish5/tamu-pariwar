                import "./works.scss";
                import {useState} from "react";
 
                export default function Works() {
                    const [currentSlide, setCurrentSlide] = useState(0);

                    const data = [
                        {
                            id: "1",
                            icon: "./assets/tamu_logo.jpeg",
                            title: "Sports",
                            desc: "Soccer Team ready to WIN!",
                            img: "assets/tamu_team.jpeg",
                        },
                        {
                            id: "2",
                            icon: "./assets/tamu_logo.jpeg",
                            title: "Tamu Pariwar Soccer Team",
                            desc: "Tamu pariwar soccer team in New York.",
                            img: "./assets/tamu-soccer.jpeg",
                        },
                        {
                            id: "3",
                            icon: "./assets/tamu_logo.jpeg",
                            title: "Summer Trip",
                            desc: "Tamu pariwar family having fun in the summer",
                            img: "./assets/tamu-trip.jpeg",
                        },
                    ];

                    const handleClick = (way) =>{
                        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
                        setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0);
                    };
                    return (
                    <div className="works" id="works"> 
                    <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                        {data.map((d)=>(
                        <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon}alt="" />  
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYMVTPWo-UpG-iTxD-i2KHiigTIboajgwVw&usqp=CAU"
                            alt=""
                            />
                            </div>
                        </div>
                        
                        </div>))}
                        
                    </div>
                    
                    <img src="assets/arrow.jpeg" className="arrow left" alt="" onClick={()=> handleClick("left")}/>  
                    <img src="assets/arrow.jpeg" className="arrow right" alt="" onClick={()=> handleClick("")}/>        
                    </div>
                    )
                }
