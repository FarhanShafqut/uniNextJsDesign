import Button from "../(components)/button/button";
import Header from "../(components)/header/header";
import Input from "../(components)/input/input";
import SubjectButton from "../(components)/subjectsButton/page";
function Blog(){
    return(
      <>
        <Header title='OUR POST'/>
      <div>
      <section class="blog-content">
        <div class="row">
            <div class="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                <img src="img/post.png" alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>

                <div class="comment-box">
                    <h3>Leave a Comment</h3>
                    <form class="comment-form">
                        <Input type="text" place="Enter Name" />
                        <Input type="email" place="Enter Email" />
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <Button text='Post Comment'/>
                    </form>
                </div>
            </div>

            <div class="blog-right">
                <h3>Post Categories</h3>
                <SubjectButton title='Business Analytics' txt='12'/>
                <SubjectButton title='Machine Learning' txt='12'/>
                <SubjectButton title='Computer Science' txt='20'/>
                <SubjectButton title='Data Analytics' txt='22'/>
                <SubjectButton title='Data Analytics' txt='20'/>
            </div>
        </div>
    </section>
      </div>
      </>
    )
    }
    export default Blog;