"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TeamCard from './TeamCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const teams = [
    {
        title: 'Design Team',
        id: 'design',
        members: [
            { id: 1, name: 'Name', role: 'Head', image: 'https://randomuser.me/api/portraits/women/44.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 2, name: 'Name', role: 'Co-Head', image: 'https://randomuser.me/api/portraits/women/68.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 3, name: 'Name', role: 'Core', image: 'https://randomuser.me/api/portraits/women/65.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 4, name: 'Name', role: 'Core', image: 'https://randomuser.me/api/portraits/women/33.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 5, name: 'Name', role: 'Member', image: 'https://randomuser.me/api/portraits/men/32.jpg', social: { linkedin: '#', instagram: '#' } }
        ]
    },
    {
        title: 'Tech Team',
        id: 'tech',
        members: [
            { id: 6, name: 'Name', role: 'Tech Lead', image: 'https://randomuser.me/api/portraits/men/44.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 7, name: 'Name', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/68.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 8, name: 'Name', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/65.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 9, name: 'Name', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/33.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 10, name: 'Name', role: 'Member', image: 'https://randomuser.me/api/portraits/women/32.jpg', social: { linkedin: '#', instagram: '#' } }
        ]
    },
    {
        title: 'Social Media Team',
        id: 'social',
        members: [
            { id: 11, name: 'Name', role: 'Social Lead', image: 'https://randomuser.me/api/portraits/women/11.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 12, name: 'Name', role: 'Content', image: 'https://randomuser.me/api/portraits/women/12.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 13, name: 'Name', role: 'Content', image: 'https://randomuser.me/api/portraits/women/13.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 14, name: 'Name', role: 'Editor', image: 'https://randomuser.me/api/portraits/men/14.jpg', social: { linkedin: '#', instagram: '#' } },
            { id: 15, name: 'Name', role: 'Member', image: 'https://randomuser.me/api/portraits/men/15.jpg', social: { linkedin: '#', instagram: '#' } }
        ]
    }
];

const TeamSection = () => {
    return (
        <section className="relative mx-auto w-full max-w-[1200px] px-5 py-10 text-center">
            <div className="mb-10 inline-block w-[80%] max-w-[600px] rounded-[50px] bg-[#f4d03f] px-10 py-[15px]">
                <h1 className="m-0 text-[2.5rem] font-[900] uppercase tracking-[1px] text-black max-md:text-[1.8rem]">MEET OUR TEAM</h1>
            </div>

            <div className="relative px-[60px]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.main-swiper-button-next',
                        prevEl: '.main-swiper-button-prev',
                    }}
                    className="py-5"
                >
                    {teams.map((team) => (
                        <SwiperSlide key={team.id}>
                            <div className="w-full">
                                <h2 className="mb-[50px] text-[2rem] font-[700]">{team.title}</h2>

                                <div className="relative px-[50px] max-md:px-[30px]">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                            nextEl: `.swiper-button-next-${team.id}`,
                                            prevEl: `.swiper-button-prev-${team.id}`,
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
                                        }}
                                        className="!pb-[50px] !pt-[50px]"
                                    >
                                        {team.members.map((member) => (
                                            <SwiperSlide key={member.id}>
                                                <TeamCard {...member} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className={`swiper-button-prev-custom swiper-button-prev-${team.id} absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-[2rem] text-white opacity-100 transition-opacity duration-200 hover:opacity-70`}>
                                        <FaChevronLeft />
                                    </div>
                                    <div className={`swiper-button-next-custom swiper-button-next-${team.id} absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-[2rem] text-white opacity-100 transition-opacity duration-200 hover:opacity-70`}>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="main-swiper-button-prev main-nav-button absolute left-[10px] top-[15%] z-20 flex h-[55px] w-[55px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[12px] border-2 border-[#f4d03f] bg-gradient-to-br from-[#f4d03f26] to-[#f4d03f0d] text-[2rem] text-[#f4d03f] shadow-[0_4px_15px_rgba(244,208,63,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1/2 hover:scale-110 hover:border-white hover:bg-gradient-to-br hover:from-[#f4d03f4d] hover:to-[#f4d03f26] hover:text-white hover:shadow-[0_6px_20px_rgba(244,208,63,0.4)]">
                    <FaChevronLeft />
                </div>
                <div className="main-swiper-button-next main-nav-button absolute right-[10px] top-[15%] z-20 flex h-[55px] w-[55px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[12px] border-2 border-[#f4d03f] bg-gradient-to-br from-[#f4d03f26] to-[#f4d03f0d] text-[2rem] text-[#f4d03f] shadow-[0_4px_15px_rgba(244,208,63,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1/2 hover:scale-110 hover:border-white hover:bg-gradient-to-br hover:from-[#f4d03f4d] hover:to-[#f4d03f26] hover:text-white hover:shadow-[0_6px_20px_rgba(244,208,63,0.4)]">
                    <FaChevronRight />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
