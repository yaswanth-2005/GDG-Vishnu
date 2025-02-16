import Image from 'next/image'
import { BiCrown } from 'react-icons/bi'
import { CgCrown } from 'react-icons/cg'
import { GrMoney } from 'react-icons/gr'
import { FaComments, FaRegHandPeace } from 'react-icons/fa'
import { LuConstruction } from 'react-icons/lu'
import { AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineBrush, MdOutlineEmojiEvents } from 'react-icons/md'
import { PiFeatherDuotone, PiHandshakeBold } from 'react-icons/pi'
import { FiCalendar, FiShare2, FiTrendingUp } from 'react-icons/fi'
import { Video } from 'lucide-react'

export const FALLBACK_QUOTE = (
    <p>
        That was no message. <i>This</i> is a message.
    </p>
)

export const leadership = {
    major: {
        'Mrs M.Sri Lakshmi': {
            role: 'Vice Principal & Faculty Advisor',
            imgSrc: '/TEAM_GDG/srilakshmimam.jpg',
            quote: <p>I lead with vision and drive progress.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <BiCrown />,
        },
        'Sriram Gajula': {
            role: 'Organizer',
            imgSrc: '/TEAM_GDG/sriram.jpg',
            quote: <p>I lead with vision and drive progress.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <BiCrown />,
        },
        'Sree Deekshitha Yerra': {
            role: 'Co-Organizer',
            imgSrc: '/TEAM_GDG/sri.jpg',
            quote: <p>I lead with vision, mentor with heart.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <BiCrown />,
        },
        'Sujan Midatani': {
            role: 'Co-Organizer & AI Lead',
            imgSrc: '/TEAM_GDG/last.jpg',
            quote: <p>AI is my playground, no limits.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <BiCrown />,
        },
        // 'Sri Lakshmi': {
        //     role: 'Faculty Coordinator',
        //     imgSrc: '/TEAM_GDG/faculty.jpg', // Replace with actual image
        //     quote: <p>I empower the minds to reach new heights.</p>,
        //     github: 'https://github.com',
        //     linkedin: 'https://linkedin.com',
        //     icon: <BiCrown />,
        // },
        'Maddula Pavan': {
            role: 'AI Co-Lead',
            imgSrc: '/TEAM_GDG/pavanpic.jpg',
            quote: <p>I make AI think beyond the box.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <CgCrown />,
        },
        'Jubair Ahmed': {
            role: 'Web Lead',
            imgSrc: '/TEAM_GDG/jubair_real1.jpg',
            quote: <p>Coding the web of tomorrow, today.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <AiOutlineGlobal />,
        },
        'Yaswanth Varada': {
            role: 'Web Co-Lead',
            imgSrc: '/TEAM_GDG/varada.jpg',
            quote: <p>Weaving the web into wonders.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <AiOutlineGlobal />,
        },
        'Vivek Sadhu': {
            role: 'Marketing Lead',
            imgSrc: '/TEAM_GDG/vivek.jpg',
            quote: <p>I market for an impact.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FiTrendingUp />,
        },
        'Vaasanthini Rokkam': {
            role: 'Marketing Co-Lead',
            imgSrc: '/TEAM_GDG/vaasanthi.jpg',
            quote: <p>I market for an impact.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FiTrendingUp />,
        },
        'Meghana Vardhanepu': {
            role: 'Marketing Co-Lead',
            imgSrc: '/TEAM_GDG/meghana.jpg',
            quote: <p>I market for an impact.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FiTrendingUp />,
        },
        'Nitin Sigilipelli': {
            role: 'Android Lead',
            imgSrc: '/TEAM_GDG/nitin.jpg',
            quote: <p>I create apps that feel like second nature.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <PiFeatherDuotone />,
        },
        'Ganesh Avupati': {
            role: 'Android Co-Lead',
            imgSrc: '/TEAM_GDG/ganesh.jpg',
            quote: <p>I build future-ready applications.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <GrMoney />,
        },
        'Sai Mahindra': {
            role: 'Open Source Lead',
            imgSrc: '/TEAM_GDG/mahi.jpg',
            quote: <p>Open minds, open code, endless impact.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <PiHandshakeBold />,
        },
        'Yaswanth M': {
            role: 'Open Source Co-Lead',
            imgSrc: '/TEAM_GDG/malisetti.jpg',
            quote: <p>I champion collaborative coding.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <PiHandshakeBold />,
        },
        'Lakshmi Kousik': {
            role: 'ML Lead',
            imgSrc: '/TEAM_GDG/kou.jpg',
            quote: <p>Data speaks, I just listen better.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <LuConstruction />,
        },
        'Yeshwanth Nagula': {
            role: 'ML Co-Lead',
            imgSrc: '/TEAM_GDG/yeshwant.jpg',
            quote: <p>I shape intelligence for the future.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FaRegHandPeace />,
        },

        Roshan: {
            role: 'Design Lead',
            imgSrc: '/TEAM_GDG/roshan.jpg',
            quote: <p>I create designs that speak.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <MdOutlineBrush />,
        },
        'Sri Ram Ganesh': {
            role: 'Design Co-Lead',
            imgSrc: '/TEAM_GDG/ram.jpg',
            quote: <p>I bring dreams to life through art.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <MdOutlineBrush />,
        },
        'Gowthami Tirumala': {
            role: 'Creative Lead',
            imgSrc: '/TEAM_GDG/gow.jpg',
            quote: <p>I turn creativity into impact.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <MdOutlineBrush />,
        },
        'Nazeer Ahmad': {
            role: 'Content Lead',
            imgSrc: '/TEAM_GDG/naz.jpg',
            quote: <p>I amplify ideas through stories.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FiShare2 />,
        },
        'Sai Ritwik Vulli': {
            role: 'Videography Lead',
            imgSrc: '/TEAM_GDG/ritwik.jpg',
            quote: <p>Capturing Moments, Creating Memories</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <Video />,
        },
        'Koti Praveen Tamma': {
            role: 'Videography Co-Lead',
            imgSrc: '/TEAM_GDG/koti.jpg',
            quote: <p>Capturing Moments, Creating Memories</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <Video />,
        },
        'Surya Teja': {
            role: 'Event Lead',
            imgSrc: '/TEAM_GDG/lakshmi.jpg',
            quote: <p>I create events that captivate.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FiCalendar />,
        },
        'Susanna Marella': {
            role: 'Communication Lead',
            imgSrc: '/TEAM_GDG/sus.jpg',
            quote: <p>I connect people through words.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FaComments />,
        },
        'Vasthavi Shreya Thumu': {
            role: 'Communication Co-Lead',
            imgSrc: '/TEAM_GDG/vasthavi.jpg',
            quote: <p>I connect people through words.</p>,
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            icon: <FaComments />,
        },
    },

    minor: {
        'AI Team': {
            label: 'Sujan &  Pavan',
            color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
            icon: <BiCrown />,
        },
        'Android Team': {
            label: 'Nitin & Ganesh',
            color_complex: 'from-[#651e94] shadow-[#651e94]',
            icon: <PiHandshakeBold />,
        },
        'ML Team': {
            label: 'Kousik & Yeshwanth ',
            color_complex: 'from-[#9c710c] shadow-[#9c710c]',
            icon: <MdOutlineEmojiEvents />,
        },
        'Open Source Team': {
            label: 'Mahindra & Yaswanth',
            color_complex: 'from-[#1eb0b0] shadow-[#1eb0b0]',
            icon: <PiHandshakeBold />,
        },
        'WEB Team': {
            label: 'Jubair & Yaswanth V ',
            color_complex: 'from-[#651e94] shadow-[#651e94]',
            icon: <AiOutlineGlobal />,
        },
    },
}

export default leadership
