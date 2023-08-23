
import Link from "next/link"
import Navbar from "./(components)/navbar/navbar"
import MainButton from "./(components)/mainButton/mainButton"
import MainHeading from "./(components)/mainHeading/mainHeading"
import TextCard from "./courses/(components)/textCard"
import MainImages from "./(components)/mainImages/MainImages"
import ImageCard from "./courses/(components)/imageCard"
import CommentStu from "./(components)/commentStu/page"

function Home(){
return(
  <div>
     <section class="header">
      <Navbar/>
        <div class="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing eLinkt. VeLinkt consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <MainButton txt={'Visit To Know More'}/>
        </div>
    </section>
    <MainHeading title1='EXPLORE OUR 60+' title2='MAJOR PROGRAMS' />
    <section className="course">
    <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
        <MainHeading title1='TAKE OUR VIRTUAL TOUR' />
        <div class="row">
          <MainImages surc={"/img/Campus1.png"} title="Web Development" />
          <MainImages surc={"/img/Campus2.png"} title="Artificial Intelligence" />
          <MainImages surc={"/img/Campus3.png"} title="Data Science" />
        </div>
        <MainHeading title1='OUR FACILITIES' />
        <div class="row">
          <ImageCard source={"/img/libary.png"} title={"Best Libary"} />
          <ImageCard source={"/img/playground.png"} title={'Athletics'} />
          <ImageCard source={"/img/food.png" }title={"Tasty and Healthy Food"} />
        </div>
        <MainHeading title1='WHAT OUR STUDENT SAYS' />
        <div class="row">
        <CommentStu source={'/img/user.png'} i1={'fa fa-star'} i2={'fa fa-star'} i3={'fa fa-star'} i4={'fa fa-star'} i5={'fa fa-star'}/>
        <CommentStu source={'/img/user.png'} i1={'fa fa-star'} i2={'fa fa-star'} i3={'fa fa-star'} i4={'fa fa-star'} i5={'fa fa-star-half-alt'}/>
        </div>
        <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <MainButton txt={'CONTACT US'}/>
    </section>
        </section>
  </div>
)
}
export default Home