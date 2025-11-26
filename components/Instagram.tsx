"use client"
import Script from "next/script";
import { useRef } from "react";

interface InstagramEmbedProps {
    url: string;
}

const Instagram = () => {
    //add more post here later maybe
    const urlArr = ["DQ2C8RPkn0-/?img_index=1", "DP_qefSko6_", "DO1LMBskkhA", "DOkuG44EorP", "DOdzsFCjFSN"];
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleLeft = () => {
        scrollRef.current?.scrollBy({
            left: -352
        });
    };
    const handleRight = () => {
        scrollRef.current?.scrollBy({
            left: 352
        });
    };

    return <div className="mt-10 flex items-center justify-center gap-4 relative">
        <button onClick={handleLeft} className="sm:mr-5 size-10 sm:size-15  text-yellow-400 cursor-pointer hover:scale-115 active:scale-100 transition-all duration-100 ease-in-out absolute sm:relative z-99 left-5" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
        </button>

        {/* post contanier */}
        <div ref={scrollRef} className="w-82 lg:w-170 xl:w-260 overflow-hidden flex justify-start gap-7 scroll-smooth">
            {urlArr.map((url) => (
                <div key={url} className="w-full">
                    <InstagramEmbed key={url} url={url} />
                </div>
            ))}
        </div>

        <button onClick={handleRight} className="sm:ml-5 size-10 sm:size-15 text-yellow-400 cursor-pointer hover:scale-115 active:scale-100 transition-all duration-100 ease-in-out absolute sm:relative z-99 right-5" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
        </button>
    </div>
}

// ignore this error from insta backendd - [Violation] Permissions policy violation: unload is not allowed in this document.
function InstagramEmbed({ url }: InstagramEmbedProps) {
    return (
        <div className="rounded-4xl overflow-hidden w-full scale-75 sm:scale-100 ">
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={`https://www.instagram.com/p/${url}`}
                data-instgrm-version="12"
            ></blockquote>

            <Script
                src="https://www.instagram.com/embed.js"
            />
        </div>
    );
}


export default Instagram
