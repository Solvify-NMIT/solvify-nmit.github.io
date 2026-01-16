export interface TeamMember {
    name: string;
    position: string; // role
    img: string;
    github?: string;
    linkedin?: string;
    link?: string;
    domain: "Lead" | "Core Team" | "Technical" | "Graphics" | "Documentation" | "Social Media";
}

// Helper: title case function not needed in runtime if data is pre-processed,
// but names in list below are explicitly Title Cased.

export const teamData: TeamMember[] = [
    // Lead
    // (Empty as requested)

    // Core Team (from 'design' and 'operation')
    { name: "Soumika Sahoo", position: "Lead", img: "/Team/design/Soumika%20Sahoo.png", domain: "Core Team" },
    { name: "Ashish Anand", position: "Core Team Member", img: "/Team/design/Ashish%20Anand.png", domain: "Core Team" },
    { name: "Malatesh K", position: "Core Team Member", img: "/Team/design/MALATESH%20K.png", domain: "Core Team" },
    { name: "Nikshay N", position: "Core Team Member", img: "/Team/design/Nikshay%20N.png", domain: "Core Team" },
    { name: "Sahana R", position: "Core Team Member", img: "/Team/design/SAHANA%20R.png", domain: "Core Team" },
    { name: "Sudhanshu S Sahoo", position: "Core Team Member", img: "/Team/design/SUDHANSHU%20S%20SAHOO.png", domain: "Core Team" },
    { name: "Shreyansh", position: "Core Team Member", img: "/Team/design/Shreyansh.png", domain: "Core Team" },

    { name: "Arpan Poudel", position: "Core Team Member", img: "/Team/operation/ARPAN%20POUDEL.png", domain: "Core Team" },
    { name: "J Kushal Prajeevan", position: "Core Team Member", img: "/Team/operation/J%20KUSHAL%20PRAJEEVAN.png", domain: "Core Team" },
    { name: "Parvathy Sankaraseshan", position: "Core Team Member", img: "/Team/operation/PARVATHY%20SANKARASESHAN.png", domain: "Core Team" },
    { name: "Sujoy Bandyopadhyay", position: "Core Team Member", img: "/Team/operation/SUJOY%20BANDYOPADHYAY.png", domain: "Core Team" },
    { name: "Ujjwal S", position: "Core Team Member", img: "/Team/operation/UJJWAL%20S.png", domain: "Core Team" },
    { name: "Vaishnavi Chidambar", position: "Core Team Member", img: "/Team/operation/VAISHNAVI%20CHIDAMBAR.png", domain: "Core Team" },

    // Technical (from 'pr')
    { name: "Eashan Singh", position: "Lead", img: "/Team/pr/EASHAN%20SINGH.png", domain: "Technical" },
    { name: "Aditya Suhas", position: "Technical Team Member", img: "/Team/pr/ADITYA%20SUHAS.png", domain: "Technical" },
    { name: "Amith Jose", position: "Technical Team Member", img: "/Team/pr/AMITH%20JOSE.png", domain: "Technical" },
    { name: "Medha Gargi", position: "Technical Team Member", img: "/Team/pr/MEDHA%20GARGI.png", domain: "Technical" },
    { name: "Mohit Kumar", position: "Technical Team Member", img: "/Team/pr/MOHIT%20KUMAR.png", domain: "Technical" },
    { name: "Saumya Srivastava", position: "Technical Team Member", img: "/Team/pr/SAUMYA%20SRIVASTAVA.png", domain: "Technical" },
    { name: "Shivam Singh", position: "Technical Team Member", img: "/Team/pr/SHIVAM%20SINGH_2.png", domain: "Technical" },

    // Graphics (from 'content')
    { name: "Nikhil Mirji", position: "Lead", img: "/Team/content/NIKHIL%20MIRJI.png", domain: "Graphics" },
    { name: "Varshini K", position: "Co-Lead", img: "/Team/content/VARSHINI%20K.png", domain: "Graphics" },
    { name: "Harivadhana S", position: "Graphics Team Member", img: "/Team/content/HARIVADHANA%20S.png", domain: "Graphics" },
    { name: "Kriti Ganeriwal", position: "Graphics Team Member", img: "/Team/content/KRITI%20GANERIWAL.png", domain: "Graphics" },
    { name: "Pragna Jadhav", position: "Graphics Team Member", img: "/Team/content/Pragna%20Jadhav.png", domain: "Graphics" },
    { name: "Shipra Goyal", position: "Graphics Team Member", img: "/Team/content/SHIPRA%20GOYAL.png", domain: "Graphics" },

    // Documentation (from 'tech')
    { name: "Priyanshu Kumar", position: "Lead", img: "/Team/tech/PRIYANSHU%20KUMAR.png", domain: "Documentation" },
    { name: "Farhath", position: "Co-Lead", img: "/Team/tech/FARHATH.png", domain: "Documentation" },
    { name: "Aditya Sahu", position: "Documentation Team Member", img: "/Team/tech/ADITYA%20SAHU.png", domain: "Documentation" },
    { name: "Aishvarya S", position: "Documentation Team Member", img: "/Team/tech/AISHVARYA%20S.png", domain: "Documentation" },
    { name: "Akshita Sanvi", position: "Documentation Team Member", img: "/Team/tech/AKSHITA%20SANVI_2.png", domain: "Documentation" },
    { name: "Ankit Kumarjha", position: "Documentation Team Member", img: "/Team/tech/ANKIT%20KUMARJHA.png", domain: "Documentation" },
    { name: "Kishore M", position: "Documentation Team Member", img: "/Team/tech/KISHORE%20M.png", domain: "Documentation" },
    { name: "Krishna Shrivastava", position: "Documentation Team Member", img: "/Team/tech/Krishna%20Shrivastava.png", domain: "Documentation" },
    { name: "Mohammed Banyal", position: "Documentation Team Member", img: "/Team/tech/MOHAMMED%20DANYAL.png", domain: "Documentation" },
    { name: "Mounanjali L", position: "Documentation Team Member", img: "/Team/tech/MOUNANJALI%20L.png", domain: "Documentation" },
    { name: "Nayana Ramesh", position: "Documentation Team Member", img: "/Team/tech/Nayana%20Ramesh.png", domain: "Documentation" },
    { name: "Patil Aryan", position: "Documentation Team Member", img: "/Team/tech/PATIL%20ARYAN_2.png", domain: "Documentation" },
    { name: "Sukesh", position: "Documentation Team Member", img: "/Team/tech/Sukesh.png", domain: "Documentation" },
    { name: "Tejaswini P Hegde", position: "Documentation Team Member", img: "/Team/tech/Tejaswini%20P%20Hegde.png", domain: "Documentation" },
    { name: "Vennela S", position: "Documentation Team Member", img: "/Team/tech/VENNELA%20S.png", domain: "Documentation" },

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
