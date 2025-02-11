const dir_home1 = '/GDSC/'
const dir_home2 = '/HACK-A-TRON/'
const dir_home3 = '/vit_pics/'
const dir_home4 = '/REIMAGINE/'
interface GalleryPiece {
    remark: string
    imgSrc: string
}

export const HomeAlbum: GalleryPiece[] = [
    { remark: 'GDG@VIT-B', imgSrc: dir_home2 + '1.jpg' },

    { remark: 'GDG@VIT-B', imgSrc: dir_home2 + '2.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '3.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '4.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '5.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '6.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '7.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '8.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home1 + '12.jpg' },

    { remark: 'GDG@VIT-B', imgSrc: dir_home3 + 'vitb6.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home3 + 'vitb3.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home3 + 'vitb4.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home3 + 'vitb7.jpg' },

    { remark: 'GDG@VIT-B', imgSrc: dir_home4 + '2.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home4 + '4.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home4 + '5.jpg' },
    { remark: 'GDG@VIT-B', imgSrc: dir_home4 + '6.jpg' },
]

export const HackathonAlbum: GalleryPiece[] = [
    {
        remark: 'Unleash the meme',
        imgSrc: '/meme.jpeg',
    },
    {
        remark: '🪁 Be a Part of This Exciting Event !  ',
        imgSrc: '/event.jpeg',
    },
    {
        remark: 'Capture and Win ',
        imgSrc: '/capture.jpeg',
    },
]
