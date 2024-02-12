import React from 'react';
import BGImage from "../../assets/Image/BGImage.png";
import Address from "../../assets/Icon/Address.png"
import Contact from "../../assets/Icon/Contact.png"
import Email from "../../assets/Icon/Email.png"

export default function Hero() {
  return (
    <section className='relative min-h-screen'>
        <img src={BGImage} className='absolute top-0 left-0 w-full h-full z-0 object-cover opacity-90'/>

        <div className='relative z-10 h-full bg-gray text-white'>
            <div className='flex flex-row items-center gap-12'>
                <div className='bg-black h-full'>                <p className='text-center text-2xl text-yellow_stg font-bold '>PT. SITONGGI ELEKTRIK JATA</p>  
</div>
                <div className='flex flex-row'>
                    <img src={Contact} className='object-none h-[50px] w-[30px]'/>
                    <div className='flex flex-col'>
                        <p className='text-yellow_stg'>Telephone</p>
                        <p>0812-9177-3354</p>
                    </div>
                </div>  
                <div className='flex flex-row'>
                    <img src={Email} className='object-none h-[50px] w-[30px]'/>
                    <div className='flex flex-col'>
                        <p className='text-yellow_stg'>Email</p>
                        <p>sitonggie@yahoo.Com</p>
                    </div>
                </div>  
                <div className='flex flex-row'>
                    <img src={Address} className='object-none h-[50px] w-[30px]'/>
                    <div className='flex flex-col'>
                        <p className='text-yellow_stg'>Address</p>
                        <p>Jl.Ruko Dukuh Zamrud Blok GD52</p>
                    </div>
                </div>  
            
            </div>
        </div>
    </section>
  );
}