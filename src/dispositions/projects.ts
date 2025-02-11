const drop1 = '/assets/projects/backdrops/mw2019_cleanhouse.mp4'

export interface ProjectDetails {
    backdrop: string
    thumbnail: string
    description: string
    tags: string[]
    github: string
}

export const projects: { [key: string]: ProjectDetails } = {
    'HACK-A-TRON': {
        backdrop: drop1,
        thumbnail: '/GDGC_LOGO.svg',
        description:
            'First and Best \n\n📥  30 teams have participated in this event',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: '/hack-a-tron',
    },

    'Reimagine Hackathon': {
        backdrop: '/events/reimagine/6.jpg',
        thumbnail: '/events/reimagine/6.jpg',
        description:
            'Our recent gaming hackathon, Reimagine, at Vishnu Institute of Technology, brought together teams from Pune, KLU, and our college to showcase their creativity and technical expertise.',
        tags: ['Hackathon', 'Gaming', 'Collaboration', 'Innovation'],
        github: '/reimagine-hackathon',
    },
    'GDG Launch Event': {
        backdrop: '/event.jpeg',
        thumbnail: '/event.jpeg',
        description:
            'The GDG Launch Event at Vishnu Institute of Technology, held on December 7, 2024, was a spectacular success, bringing together students, tech enthusiasts, and industry experts for an unforgettable experience',
        tags: ['Launch Event', 'GDG', 'GDG Launch', 'colloboration'],
        github: '/gdg-launch-event',
    },
    'Gen AI Study jams swags Distribution': {
        backdrop: '/swags_distribution/1.jpg',
        thumbnail: '/swags_distribution/1.jpg',
        description:
            'The event aimed to empower students with the latest advancements in Generative AI and cloud-based solutions, preparing them for future innovations in the tech industry. 💡 With enthusiastic participation and successful completion of the program, students earned recognition and official swags from Google as a token of appreciation for their dedication.',
        tags: ['Launch Event', 'GDG', 'GDG Launch', 'colloboration'],
        github: '/gen-ai-swags-distribution',
    },
}

export default projects
