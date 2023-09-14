
import React from 'react';
import Image from 'next/image';

import elips from '../../public/img/ellipse-end.png';
import group_phone from '../../public/img/group_phone.png';
import Navbar from '@/Components/Navbar';


const HomeSection = () => {
  return (
    <section className='hero_section'>
      <Navbar />

<div className='hero_container'>

      <div className='hero_left_side'>
      <div className='rectengle-demo'>
<Image className='rectangle-img2  ' src="/img/left_rectangle.png" width="265" height="451"  />

</div>



        <div className='hero_left_content'>
            <h2 className='taskino_title'>
              Taskino:
            </h2 >
          <h1 className='hero_title' >
            
            Master your day and <br />Achieve more!

          </h1>
          <p className='hero-des'>
            Maximize Productivity with Taskino! Plan, Organize, and Execute Your Tasks Effortlessly. Stay on Top of Your Day with Intuitive Tools for Efficient Task Management
          </p>
        </div>
        <div className='all-hero-button'>
        <div className='hero_button'>
          <button className='signupBtn'>Sign Up</button>
          
            <Image className='googleplay-img' src="/img/google-play-badge.png" width="1000" height="290" />
        
        
        </div>

        
          <Image className='review-img' src="/img/review.png" width="1000" height="290" />
          </div>
      



      </div>




      <div className='right_side'>






      <div className='hero_right_images'>
<Image src={elips}  width="502" height="310" className='right-side-img-3' /> 

{/* <Image src="/img/ellipse_bg.png" width="802" max-width="320" height="410" className='right-side-img-1' /> */}
<div className='circle'></div>




<div className='font-mobile'>
      <Image src={group_phone} width={1000}  height={1210} className='right-side-img-2' />
<Image src="/img/group_task_timer.png" width="502"  height="310" className='right-side-img-4' /> 
</div>


</div>  
      </div>

</div>
    </section>
  );
};





export default HomeSection;
