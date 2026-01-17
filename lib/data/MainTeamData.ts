export interface TeamMember {
    name: string;
    position: string; // role
    img: string;
    github?: string;
    linkedin?: string;
    link?: string;
    domain: "Lead" | "Design Team" | "Operation Team" | "PR Team" | "Content Team" | "Tech Team" | "Social Media";
}

// Helper: title case function not needed in runtime if data is pre-processed,
// but names in list below are explicitly Title Cased.

export const teamData: TeamMember[] = [
    // Lead
    // (Empty as requested)

    // Core Team (from 'design' and 'operation')
    { name: "Soumika Sahoo", position: "Lead", img: "/Team/design/Soumika%20Sahoo.png", domain: "Design Team" },
    { name: "Ashish Anand", position: "Design Team Member", img: "/Team/design/Ashish%20Anand.png", domain: "Design Team" },
    { name: "Malatesh K", position: "Design Team Member", img: "/Team/design/MALATESH%20K.png", domain: "Design Team" },
    { name: "Nikshay N", position: "Design Team Member", img: "/Team/design/Nikshay%20N.png", domain: "Design Team" },
    { name: "Sahana R", position: "Design Team Member", img: "/Team/design/SAHANA%20R.png", domain: "Design Team" },
    { name: "Sudhanshu S Sahoo", position: "Design Team Member", img: "/Team/design/SUDHANSHU%20S%20SAHOO.png", domain: "Design Team" },
    { name: "Shreyansh", position: "Design Team Member", img: "/Team/design/Shreyansh.png", domain: "Design Team" },

    { name: "Arpan Poudel", position: "Operations Team Member", img: "/Team/operation/ARPAN%20POUDEL.png", domain: "Operation Team" },
    { name: "J Kushal Prajeevan", position: "Operations Team Member", img: "/Team/operation/J%20KUSHAL%20PRAJEEVAN.png", domain: "Operation Team" },
    { name: "Parvathy Sankaraseshan", position: "Lead", img: "/Team/operation/PARVATHY%20SANKARASESHAN.png", domain: "Operation Team" },
    { name: "Sujoy Bandyopadhyay", position: "Operations Team Member", img: "/Team/operation/SUJOY%20BANDYOPADHYAY.png", domain: "Operation Team" },
    { name: "Ujjwal S", position: "Operations Team Member", img: "/Team/operation/UJJWAL%20S.png", domain: "Operation Team" },
    { name: "Vaishnavi Chidambar", position: "Operations Team Member", img: "/Team/operation/VAISHNAVI%20CHIDAMBAR.png", domain: "Operation Team" },

    // Technical (from 'pr')
    { name: "Eashan Singh", position: "Lead", img: "/Team/pr/EASHAN%20SINGH.png", domain: "PR Team" },
    { name: "Aditya Suhas", position: "PR Team Member", img: "/Team/pr/ADITYA%20SUHAS.png", domain: "PR Team" },
    { name: "Amith Jose", position: "PR Team Member", img: "/Team/pr/AMITH%20JOSE.png", domain: "PR Team" },
    { name: "Medha Gargi", position: "PR Team Member", img: "/Team/pr/MEDHA%20GARGI.png", domain: "PR Team" },
    { name: "Mohit Kumar", position: "PR Team Member", img: "/Team/pr/MOHIT%20KUMAR.png", domain: "PR Team" },
    { name: "Saumya Srivastava", position: "PR Team Member", img: "/Team/pr/SAUMYA%20SRIVASTAVA.png", domain: "PR Team" },
    { name: "Shivam Singh", position: "PR Team Member", img: "/Team/pr/SHIVAM%20SINGH_2.png", domain: "PR Team" },

    // Graphics (from 'content')
    { name: "Nikhil Mirji", position: "Lead", img: "/Team/content/NIKHIL%20MIRJI.png", domain: "Content Team" },
    { name: "Varshini K", position: "Co-Lead", img: "/Team/content/VARSHINI%20K.png", domain: "Content Team" },
    { name: "Harivadhana S", position: "Content Team Member", img: "/Team/content/HARIVADHANA%20S.png", domain: "Content Team" },
    { name: "Kriti Ganeriwal", position: "Content Team Member", img: "/Team/content/KRITI%20GANERIWAL.png", domain: "Content Team" },
    { name: "Pragna Jadhav", position: "Content Team Member", img: "/Team/content/Pragna%20Jadhav.png", domain: "Content Team" },
    { name: "Shipra Goyal", position: "Content Team Member", img: "/Team/content/SHIPRA%20GOYAL.png", domain: "Content Team" },

    // Documentation (from 'tech')
    { name: "Priyanshu Kumar", position: "Lead", img: "/Team/tech/PRIYANSHU%20KUMAR.png", domain: "Tech Team" },
    { name: "Farhath", position: "Co-Lead", img: "/Team/tech/FARHATH.png", domain: "Tech Team" },
    { name: "Aditya Sahu", position: "Tech Team Member", img: "/Team/tech/ADITYA%20SAHU.png", domain: "Tech Team" },
    { name: "Aishvarya S", position: "Tech Team Member", img: "/Team/tech/AISHVARYA%20S.png", domain: "Tech Team" },
    { name: "Akshita Sanvi", position: "Tech Team Member", img: "/Team/tech/AKSHITA%20SANVI_2.png", domain: "Tech Team" },
    { name: "Ankit Kumarjha", position: "Tech Team Member", img: "/Team/tech/ANKIT%20KUMARJHA.png", domain: "Tech Team" },
    { name: "Kishore M", position: "Tech Team Member", img: "/Team/tech/KISHORE%20M.png", domain: "Tech Team" },
    { name: "Krishna Shrivastava", position: "Tech Team Member", img: "/Team/tech/Krishna%20Shrivastava.png", domain: "Tech Team" },
    { name: "Mohammed Banyal", position: "Tech Team Member", img: "/Team/tech/MOHAMMED%20DANYAL.png", domain: "Tech Team" },
    { name: "Mounanjali L", position: "Tech Team Member", img: "/Team/tech/MOUNANJALI%20L.png", domain: "Tech Team" },
    { name: "Nayana Ramesh", position: "Tech Team Member", img: "/Team/tech/Nayana%20Ramesh.png", domain: "Tech Team" },
    { name: "Patil Aryan", position: "Tech Team Member", img: "/Team/tech/PATIL%20ARYAN_2.png", domain: "Tech Team" },
    { name: "Sukesh", position: "Tech Team Member", img: "/Team/tech/Sukesh.png", domain: "Tech Team" },
    { name: "Tejaswini P Hegde", position: "Tech Team Member", img: "/Team/tech/Tejaswini%20P%20Hegde.png", domain: "Tech Team" },
    { name: "Vennela S", position: "Tech Team Member", img: "/Team/tech/VENNELA%20S.png", domain: "Tech Team" },

    // Social Media (from 'social media')
    { name: "Samim Kausar", position: "Lead", img: "/Team/social%20media/Samim_Kausar.png", domain: "Social Media" },
    { name: "Vinith Busipalli", position: "Co-Lead", img: "/Team/social%20media/VINITH%20BUSIPALLI.png", domain: "Social Media" },
    { name: "Alluri Thanavi", position: "Social Media Team Member", img: "/Team/social%20media/Alluri%20Thanavi.png", domain: "Social Media" },
    { name: "Chandana Javali R", position: "Social Media Team Member", img: "/Team/social%20media/CHANDANA%20JAVALI%20R.png", domain: "Social Media" },
    { name: "Chethan N", position: "Social Media Team Member", img: "/Team/social%20media/CHETHAN%20N.png", domain: "Social Media" },
    { name: "Priyanka Kumari", position: "Social Media Team Member", img: "/Team/social%20media/PRIYANKA%20KUMARI.png", domain: "Social Media" },
    { name: "Prajwal Chouhan", position: "Social Media Team Member", img: "/Team/social%20media/Prajwal%20Chouhan_2.png", domain: "Social Media" },
    { name: "Samarth Pattar", position: "Social Media Team Member", img: "/Team/social%20media/Samarth%20Pattar.png", domain: "Social Media" },
    { name: "Shruthika L", position: "Social Media Team Member", img: "/Team/social%20media/Shruthika%20L.png", domain: "Social Media" },
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
