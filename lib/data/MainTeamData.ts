export interface TeamMember {
    name: string;
    position: string; // role
    img: string;
    github?: string;
    linkedin?: string;
    link?: string;
    domain: "Heads" | "Tech Team" | "Design Team" | "Operations Team" | "Content Team" | "PR Team" | "Social Media";
}

// Helper: title case function not needed in runtime if data is pre-processed,
// but names in list below are explicitly Title Cased.

export const teamData: TeamMember[] = [
    // Lead
    { name: "Pragna Yanamadala", position: "Lead", img: "/Team/Pragna.png", domain: "Heads" },
    { name: "Neelanshu", position: "Co-Lead", img: "/Team/NEELANSHU.png", domain: "Heads" },

    // Core Team (from 'design' and 'operation')

    { name: "Soumika Sahoo", position: "Lead", img: "/Team/design/Soumika%20Sahoo.png", domain: "Design Team" },
    { name: "Ashish Anand", position: "Member", img: "/Team/design/Ashish%20Anand.png", domain: "Design Team" },
    { name: "Malatesh K", position: "Co-Lead", img: "/Team/design/MALATESH.png", domain: "Design Team" },
    { name: "Sahana R", position: "Member", img: "/Team/design/SAHANA%20R.png", domain: "Design Team" },
    { name: "Sudhanshu S Sahoo", position: " Member", img: "/Team/design/SUDHANSHU%20S%20SAHOO.png", domain: "Design Team" },
    { name: "Shreyansh", position: "Member", img: "/Team/design/Shreyansh.png", domain: "Design Team" },
    { name: "Siri Samyuktha Koppuravuri", position: "Member", img: "/Team/design/sirisamyukthakoppuravuri.png", domain: "Design Team" },

    { name: "Arpan Poudel", position: "Member", img: "/Team/operation/ARPAN%20POUDEL.png", domain: "Operations Team" },
    { name: "J Kushal Prajeevan", position: "Member", img: "/Team/operation/J%20KUSHAL%20PRAJEEVAN.png", domain: "Operations Team" },
    { name: "Parvathy Sankaraseshan", position: "Lead", img: "/Team/operation/PARVATHY%20SANKARASESHAN.png", domain: "Operations Team" },
    { name: "Sujoy Bandyopadhyay", position: "Member", img: "/Team/operation/SUJOY%20BANDYOPADHYAY.png", domain: "Operations Team" },
    { name: "Ujjwal S", position: "Member", img: "/Team/operation/UJJWAL%20S.png", domain: "Operations Team" },
    { name: "Vaishnavi Chidambar", position: "Member", img: "/Team/operation/VAISHNAVI%20CHIDAMBAR.png", domain: "Operations Team" },

    // Technical (from 'pr')
    { name: "Eashan Singh", position: "Lead", img: "/Team/pr/EASHAN%20SINGH.png", domain: "PR Team" },
    { name: "Aditya Suhas", position: "Member", img: "/Team/pr/ADITYA%20SUHAS.png", domain: "PR Team" },
    { name: "Amith Jose", position: "Member", img: "/Team/pr/AMITH%20JOSE.png", domain: "PR Team" },
    { name: "Medha Gargi", position: "Member", img: "/Team/pr/MEDHA%20GARGI.png", domain: "PR Team" },
    { name: "Mohit Kumar", position: "Member", img: "/Team/pr/MOHIT%20KUMAR.png", domain: "PR Team" },
    { name: "Saumya Srivastava", position: "Member", img: "/Team/pr/SAUMYA%20SRIVASTAVA.png", domain: "PR Team" },
    { name: "Shivam Singh", position: "Member", img: "/Team/pr/SHIVAM%20SINGH_2.png", domain: "PR Team" },

    // Graphics (from 'content')
    { name: "Nikhil Mirji", position: "Lead", img: "/Team/content/NIKHIL%20MIRJI.png", domain: "Content Team" },
    { name: "Varshini K", position: "Co-Lead", img: "/Team/content/VARSHINI%20K.png", domain: "Content Team" },
    { name: "Kriti Ganeriwal", position: "Member", img: "/Team/content/KRITI%20GANERIWAL.png", domain: "Content Team" },
    { name: "Pragna Jadhav", position: "Member", img: "/Team/content/Pragna%20Jadhav.png", domain: "Content Team" },
    { name: "Shipra Goyal", position: "Member", img: "/Team/content/SHIPRA%20GOYAL.png", domain: "Content Team" },
    { name: "Shruti Jha", position: "Member", img: "/Team/content/SHRUTI%20JHA.png", domain: "Content Team" },
    { name: "Rahul Nath", position: "Member", img: "/Team/content/RAHUL%20NATH.png", domain: "Content Team" },


    { name: "Priyanshu Kumar", position: "Lead", img: "/Team/tech/PRIYANSHU%20KUMAR.png", domain: "Tech Team" },
    { name: "Farhath", position: "Co-Lead", img: "/Team/tech/FARHATH.png", domain: "Tech Team" },
    { name: "Nayana Ramesh", position: "Core Member", img: "/Team/tech/Nayana%20Ramesh.png", domain: "Tech Team" },
    { name: "Aishvarya S", position: "Core Member", img: "/Team/tech/AISHVARYA%20S.png", domain: "Tech Team" },
    { name: "Kishore M", position: "Core Member", img: "/Team/tech/KISHORE%20M.png", domain: "Tech Team" },
    { name: "Krishna Shrivastava", position: "Member", img: "/Team/tech/Krishna%20Shrivastava.png", domain: "Tech Team" },
    { name: "Aditya Sahu", position: " Member", img: "/Team/tech/ADITYA%20SAHU.png", domain: "Tech Team" },   
    { name: "Akshita Sanvi", position: "Member", img: "/Team/tech/AKSHITA%20SANVI_2.png", domain: "Tech Team" },
    { name: "Ankit Kumarjha", position: "Member", img: "/Team/tech/ANKIT%20KUMARJHA.png", domain: "Tech Team" },   
    { name: "Mohammed Danyal", position: "Member", img: "/Team/tech/MOHAMMED%20DANYAL.png", domain: "Tech Team" },
    { name: "Mounanjali L", position: "Member", img: "/Team/tech/MOUNANJALI%20L.png", domain: "Tech Team" },    
    { name: "Patil Aryan", position: "Member", img: "/Team/tech/PATIL%20ARYAN_2.png", domain: "Tech Team" },
    { name: "Sukesh", position: "Member", img: "/Team/tech/Sukesh.png", domain: "Tech Team" },
    { name: "Tejaswini P Hegde", position: "Member", img: "/Team/tech/Tejaswini%20P%20Hegde.png", domain: "Tech Team" },
    { name: "Vennela S", position: "Member", img: "/Team/tech/VENNELA%20S.png", domain: "Tech Team" },

    // Social Media (from 'social media')
    { name: "Samim Kausar", position: "Lead", img: "/Team/social%20media/Samim_Kausar.png", domain: "Social Media" },
    { name: "Vinith Busipalli", position: "Co-Lead", img: "/Team/social%20media/VINITH%20BUSIPALLI.png", domain: "Social Media" },
    { name: "Alluri Thanavi", position: "Core Member", img: "/Team/social%20media/Alluri%20Thanavi.png", domain: "Social Media" },
    { name: "Chandana Javali R", position: "Member", img: "/Team/social%20media/CHANDANA%20JAVALI%20R.png", domain: "Social Media" },
    { name: "Chethan N", position: "Member", img: "/Team/social%20media/CHETHAN%20N.png", domain: "Social Media" },
    { name: "Priyanka Kumari", position: "Member", img: "/Team/social%20media/PRIYANKA%20KUMARI.png", domain: "Social Media" },
    { name: "Prajwal Chouhan", position: "Member", img: "/Team/social%20media/Prajwal%20Chouhan_2.png", domain: "Social Media" },
    { name: "Samarth Pattar", position: "Member", img: "/Team/social%20media/Samarth%20Pattar.png", domain: "Social Media" },
    { name: "Shruthika L", position: "Member", img: "/Team/social%20media/Shruthika%20L.png", domain: "Social Media" },
];

// Helper to get members by domain
export const getMembersByDomain = (domain: TeamMember["domain"]) => {
    return teamData
        .filter((member) => member.domain === domain)
        .sort((a, b) => {
            const getPriority = (position: string) => {
                const pos = position.toLowerCase();
                if (pos.includes("lead") && !pos.includes("co-lead")) return 1;
                if (pos.includes("co-lead")) return 2;
                return 3;
            };

            return getPriority(a.position) - getPriority(b.position);
        });
};
