"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TeamCard from './TeamCard';

const teamMembers = [
    { id: 1, name: 'Name', role: 'Head', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 2, name: 'Name', role: 'Co-Head', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { id: 3, name: 'Name', role: 'Core', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
    { id: 4, name: 'Name', role: 'Core', image: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { id: 5, name: 'Name', role: 'Member', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 6, name: 'Name', role: 'Tech Lead', image: 'https://randomuser.me/api/portraits/men/44.jpg' },
    { id: 7, name: 'Name', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/68.jpg' },
    { id: 8, name: 'Name', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/65.jpg' },
    { id: 9, name: 'Name', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { id: 10, name: 'Name', role: 'Member', image: 'https://randomuser.me/api/portraits/women/32.jpg' },
    { id: 11, name: 'Name', role: 'Social Lead', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { id: 12, name: 'Name', role: 'Content', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { id: 13, name: 'Name', role: 'Content', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { id: 14, name: 'Name', role: 'Editor', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { id: 15, name: 'Name', role: 'Member', image: 'https://randomuser.me/api/portraits/men/15.jpg' }
];

const TeamSection = () => {
    return (
        <section className="relative mx-auto w-full max-w-[1400px] px-5 py-10 text-center">
            <div className="mb-10 inline-block w-[80%] max-w-[600px] rounded-[50px] bg-[#f4d03f] px-10 py-[15px]">
                <h1 className="m-0 text-[2.5rem] font-[900] uppercase tracking-[1px] text-black max-md:text-[1.8rem]">MEET OUR TEAM</h1>
            </div>

            <div className="relative px-[20px]">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                    }}
                    className="!pb-[60px] !pt-[60px] [&_.swiper-slide]:transition-transform [&_.swiper-slide]:duration-700 [&_.swiper-slide]:ease-in-out [&_.swiper-slide-active]:scale-[1.15] [&_.swiper-slide-active]:z-10"
                >
                    {teamMembers.map((member) => (
                        <SwiperSlide key={member.id}>
                            <TeamCard {...member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamSection;
