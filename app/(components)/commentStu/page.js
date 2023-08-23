import React from 'react'

export default function CommentStu(props) {
  return (
    <div class="testimonials-col">
                <img src={props.source} alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i class={props.i1}></i>
                    <i class={props.i2}></i>
                    <i class={props.i3}></i>
                    <i class={props.i4}></i>
                    <i class={props.i5}></i>
                </div>
            </div>
  )
}
