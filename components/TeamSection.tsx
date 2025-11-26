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
        <section className="team-section">
            <div className="header-pill">
                <h1>MEET OUR TEAM</h1>
            </div>

            <div className="main-carousel-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: '.main-swiper-button-next',
                        prevEl: '.main-swiper-button-prev',
                    }}
                    className="main-team-swiper"
                >
                    {teams.map((team) => (
                        <SwiperSlide key={team.id}>
                            <div className="team-slide">
                                <h2 className="sub-header">{team.title}</h2>

                                <div className="carousel-container">
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
                                        className="team-swiper"
                                    >
                                        {team.members.map((member) => (
                                            <SwiperSlide key={member.id}>
                                                <TeamCard {...member} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <div className={`swiper-button-prev-custom swiper-button-prev-${team.id}`}>
                                        <FaChevronLeft />
                                    </div>
                                    <div className={`swiper-button-next-custom swiper-button-next-${team.id}`}>
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="main-swiper-button-prev main-nav-button">
                    <FaChevronLeft />
                </div>
                <div className="main-swiper-button-next main-nav-button">
                    <FaChevronRight />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
