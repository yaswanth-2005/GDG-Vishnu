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
}

export default projects
