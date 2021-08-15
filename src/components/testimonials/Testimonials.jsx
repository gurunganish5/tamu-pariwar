import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: "1",
            icon: "./assets/tamu_logo.jpeg",
            name:"Recent Game",
            title: "Sports",
            desc: "Soccer Team ready to WIN!",
            img: "assets/tamu_team.jpeg",

        },
        {
            id: "2",
            icon: "./assets/tamu_logo.jpeg",
            name:"Tamu Pariwar Soccer Team",
            title: "Sports",
            desc: "Tamu pariwar soccer team in New York.",
            img: "./assets/tamu-soccer.jpeg",
            featured: true,
        },
        {
            id: "3",
            icon: "./assets/tamu_logo.jpeg",
            name:"Summer Trip",
            title: "Vacation",
            desc: "Tamu pariwar family having fun in the summer",
            img: "./assets/tamu-trip.jpeg",
        },
    ];
    return (
        <div className="testimonials" id="testimonials"> 
            <h1>Events</h1>
            <div className="container">
            {data.map(d =>(

                <div className={d.featured ? "card featured" : "card"}>
                   <div className="top">
                   <img className="left" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOGsSMst_5CLUVg3oEG7mIiNT8_QRiyY5qg&usqp=CAU"  alt="" />
                   <img className="user" src= {d.img}  alt="" />
                   <img className="right" src= {d.icon}  alt="" /> 
                </div>
                   <div className="center">
                   {d.desc}</div>
                   <div className="bottom">
                       <h3>{d.name} </h3>
                       <h4>{d.title} </h4>
                   </div>
                </div>
                 ))}
            </div>
        </div>
    )
}
