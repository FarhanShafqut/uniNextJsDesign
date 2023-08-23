import React from 'react'
import Image from 'next/image'

export default function MainImages(props) {
  return (
    <div class="campus-col">
    <Image width={1000} height={350} src={props.surc} alt=""/>
    <div class="layer">
        <h3>DELHI</h3>
    </div>
</div>
  )
}
