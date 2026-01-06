export interface TeamMember {
  name: string;
  position: string;
  img: string;
  github?: string;
  linkedin?: string;
  link?: string;
}

export const coreTeam: TeamMember[] = [
  {
    name: "John Doe",
    position: "Club Lead",
    img: "https://i.pravatar.cc/300?img=1",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    link: "https://johndoe.dev",
  },
  {
    name: "Jane Smith",
    position: "Technical Lead",
    img: "https://i.pravatar.cc/300?img=2",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Alex Johnson",
    position: "Design Lead",
    img: "https://i.pravatar.cc/300?img=3",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },
  {
    name: "Sarah Williams",
    position: "Events Lead",
    img: "https://i.pravatar.cc/300?img=4",
    linkedin: "https://linkedin.com/in/sarahwilliams",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Mike Chen",
    position: "Frontend Developer",
    img: "https://i.pravatar.cc/300?img=5",
    github: "https://github.com/mikechen",
    linkedin: "https://linkedin.com/in/mikechen",
  },
  {
    name: "Emily Davis",
    position: "Backend Developer",
    img: "https://i.pravatar.cc/300?img=6",
    github: "https://github.com/emilydavis",
    linkedin: "https://linkedin.com/in/emilydavis",
  },
  {
    name: "David Brown",
    position: "Full Stack Developer",
    img: "https://i.pravatar.cc/300?img=7",
    github: "https://github.com/davidbrown",
    linkedin: "https://linkedin.com/in/davidbrown",
    link: "https://davidbrown.dev",
  },
  {
    name: "Lisa Anderson",
    position: "UI/UX Designer",
    img: "https://i.pravatar.cc/300?img=8",
    linkedin: "https://linkedin.com/in/lisaanderson",
  },
  {
    name: "Chris Wilson",
    position: "Mobile Developer",
    img: "https://i.pravatar.cc/300?img=9",
    github: "https://github.com/chriswilson",
    linkedin: "https://linkedin.com/in/chriswilson",
  },
  {
    name: "Amanda Taylor",
    position: "DevOps Engineer",
    img: "https://i.pravatar.cc/300?img=10",
    github: "https://github.com/amandataylor",
    linkedin: "https://linkedin.com/in/amandataylor",
  },
];

