import React from 'react'
import './Testimonials.css';

import per01 from '../../file/image/Person-1.jpg'
import per02 from '../../file/image/Person-2.jpg'
import per03 from '../../file/image/Person-3.jpg'
import per04 from '../../file/image/Person-4.jpg'
import per05 from '../../file/image/Person-5.jpg'
import per06 from '../../file/image/Person-6.jpg'

const Testimonials = () => {
   

   return <>
         <div className="per01">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per01} className='img1' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per02">
         <p>"Effortless Booking Experience": "I had a fantastic experience using this travel 
         booking website. The interface was intuitive and easy to navigate, making it effortless
          to search for flights and hotels. I appreciated the comprehensive options available, and
           the booking process was smooth and hassle-free. Will definitely be using it for my future travels!"
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per02} className='img2' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Devy Jones</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per03">
         <p>"Great Deals and Discounts": "I've been using this travel booking website for a while now,
          and I'm continually impressed by the amazing deals and discounts it offers. Whether it's flights,
           accommodations, or vacation packages, I always find competitive prices that help me save money on
            my travels. The platform is user-friendly, and the customer support is excellent. Highly recommend!"
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per03} className='img3' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Lia Franklin</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per04">
         <p>"Reliable and Secure": "I rely on this travel booking website for all my travel needs because of its
          reliability and security. I appreciate the peace of mind knowing that my personal information and payment
           details are handled securely. The website is always up-to-date with the latest information and offers,
            and I've never encountered any issues with my bookings. Trustworthy and dependable service!"
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per04} className='img4' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Karls Marn</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per05">
         <p>"Service clientèle excellent : L'un des points forts de ce site de réservation de voyages est 
         son service clientèle exceptionnel. Chaque fois que j'ai eu des questions ou besoin d'aide avec 
         mes réservations, l'équipe de support a été incroyablement réactive et serviable. Que ce soit via
          le chat en direct, par e-mail ou par téléphone, ils vont toujours au-delà pour garantir une 
          expérience positive. Bravo à l'équipe pour leur service exceptionnel !"

          </p>

         <div className='Per gap-4 mt-3'>
            <img src={per05} className='img5' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Robert Brown</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per06">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias
            placeat suscipt earum debitits recusandae voluptate illum expedita 
            corrupti aliquid doloribus delectus?
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per06} className='img6' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Peter dan</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </>
}

export default Testimonials