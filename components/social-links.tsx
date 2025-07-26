import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBluesky, 
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faDiscord,
  faTelegram,
  faSignalMessenger,
  faLastfm,
  faSteam,
  faMastodon,
  faHackerNews,
  faKeybase,
  faWeixin,
  faMedium,
  faYoutube
 } from '@fortawesome/free-brands-svg-icons'
 import { 
  faTowerCell,
  faBlog
 } from '@fortawesome/free-solid-svg-icons'

const MatrixIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor">
    <path d="M 30,2.0000001 V 30 h -1 -2 v 2 h 5 V -3.3333334e-8 L 27,0 v 2 z"/>
    <path d="M 9.9515939,10.594002 V 12.138 h 0.043994 c 0.3845141,-0.563728 0.8932271,-1.031728 1.4869981,-1.368 0.580003,-0.322998 1.244999,-0.485 1.993002,-0.485 0.72,0 1.376999,0.139993 1.971998,0.42 0.595,0.279004 1.047001,0.771001 1.355002,1.477001 0.338003,-0.500001 0.795999,-0.941 1.376999,-1.323001 0.579999,-0.382998 1.265998,-0.574 2.059998,-0.574 0.602003,0 1.160002,0.074 1.674002,0.220006 0.514,0.148006 0.953998,0.382998 1.321999,0.706998 0.36601,0.322999 0.653001,0.746 0.859,1.268002 0.205001,0.521998 0.307994,1.15 0.307994,1.887001 v 7.632997 h -3.127 v -6.463997 c 0,-0.383002 -0.01512,-0.743002 -0.04399,-1.082003 -0.02079,-0.3072 -0.103219,-0.607113 -0.242003,-0.881998 -0.133153,-0.25081 -0.335962,-0.457777 -0.584001,-0.596002 -0.257008,-0.146003 -0.605998,-0.220006 -1.046997,-0.220006 -0.440002,0 -0.796003,0.085 -1.068,0.253002 -0.272013,0.170003 -0.485001,0.390002 -0.639001,0.662003 -0.159119,0.287282 -0.263585,0.601602 -0.307994,0.926997 -0.05197,0.346923 -0.07801,0.697217 -0.07801,1.048002 v 6.353999 h -3.128005 v -6.398 c 0,-0.338003 -0.0072,-0.673001 -0.02116,-1.004001 -0.01134,-0.313663 -0.07487,-0.623229 -0.187994,-0.915999 -0.107943,-0.276623 -0.300435,-0.512126 -0.550001,-0.673001 -0.25799,-0.168 -0.636,-0.253002 -1.134999,-0.253002 -0.198123,0.0083 -0.394383,0.04195 -0.584002,0.100006 -0.258368,0.07446 -0.498455,0.201827 -0.704999,0.373985 -0.227981,0.183987 -0.421999,0.449 -0.583997,0.794003 -0.161008,0.345978 -0.242003,0.797998 -0.242003,1.356998 v 6.618999 H 6.99942 V 10.590001 Z"/>
    <path d="M 2,2.0000001 V 30 h 3 v 2 H 0 V 9.2650922e-8 L 5,0 v 2 z"/>
  </svg>
)

const LemmyIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 196.52 196.52" fill="currentColor">
    <path d="M47.9242 72.7966a18.2278 18.2278 0 0 1-7.7959 7.7597l42.7984 42.9653 10.3182-5.2291zm56.4524 56.6704-10.3182 5.2291 21.686 21.7708a18.2278 18.2278 0 0 1 7.7975-7.7608z"/>
    <path d="M129.6645 102.0765l1.7865 11.4272 27.4149-13.8942a18.2278 18.2278 0 0 1-4.9719-9.8124zm-14.0658 7.1282-57.2891 29.0339a18.2278 18.2278 0 0 1 4.9728 9.8133l54.1027-27.4194z"/>
    <path d="M69.5312 91.6539l8.1618 8.1933 29.269-57.1387a18.2278 18.2278 0 0 1-9.787-5.0219zm-7.1897 14.0363-14.0022 27.3353a18.2278 18.2278 0 0 1 9.786 5.0214l12.3775-24.1639z"/>
    <path d="M39.8906 80.6763a18.2278 18.2278 0 0 1-10.8655 1.7198l8.1762 52.2981a18.2278 18.2278 0 0 1 10.8645-1.7198z"/>
    <path d="M63.3259 148.3109a18.2278 18.2278 0 0 1-1.7322 10.8629l52.2893 8.3907a18.2278 18.2278 0 0 1 1.7322-10.8629z"/>
    <path d="M134.9148 146.9182a18.2278 18.2278 0 0 1 9.788 5.0224l24.1345-47.117a18.2278 18.2278 0 0 1-9.7875-5.0229z"/>
    <path d="M126.1329 33.1603a18.2278 18.2278 0 0 1-7.7975 7.7608l37.3765 37.5207a18.2278 18.2278 0 0 1 7.7969-7.7608z"/>
    <path d="M44.7704 51.6279a18.2278 18.2278 0 0 1 4.9723 9.8123l47.2478-23.9453a18.2278 18.2278 0 0 1-4.9718-9.8113z"/>
    <path d="M118.2491 40.9645a18.2278 18.2278 0 0 1-10.8511 1.8123l4.1853 26.8 11.42 1.8324zm-4.2333 44.1927 9.8955 63.3631a18.2278 18.2278 0 0 1 10.88-1.6278l-9.355-59.9035z"/>
    <path d="M49.7763 61.6412a18.2278 18.2278 0 0 1-1.694 10.8686l26.8206 4.3077 5.2715-10.2945zm45.9677 7.382-5.272 10.2955 63.3713 10.1777a18.2278 18.2278 0 0 1 1.7606-10.8593z"/>
    <path d="M93.4385 23.8419a1 1 0 1 0 33.0924 1.8025 1 1 0 1 0-33.0924-1.8025"/>
    <path d="M155.314 85.957a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/>
    <path d="M115.3466 163.9824a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/>
    <path d="M28.7698 150.0898a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/>
    <path d="M15.2298 63.4781a1 1 0 1 0 33.0923 1.8025 1 1 0 1 0-33.0923-1.8025"/>
  </svg>
)

export default function SocialLinks() {
  const socialLinks = [
    { name: "bluesky", icon: <FontAwesomeIcon icon={faBluesky} className="w-4 h-4" />, url: "https://bsky.app/profile/ta2edh.com" },
    { name: "blog", icon: <FontAwesomeIcon icon={faBlog} className="w-4 h-4" />, url: "https://blog.ta2edh.com" },
    { name: "discord", icon: <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />, url: "https://discord.com/users/1216321857548980375" },
    { name: "github", icon: <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />, url: "https://github.com/ta2edh" },
    { name: "hackernews", icon: <FontAwesomeIcon icon={faHackerNews} className="w-4 h-4" />, url: "https://news.ycombinator.com/user?id=ta2edh" },
    { name: "instagram", icon: <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />, url: "http://instagram.com/erdemhglu" },
    { name: "keybase", icon: <FontAwesomeIcon icon={faKeybase} className="w-4 h-4" />, url: "https://keybase.io/ta2edh" },
    { name: "lemmy", icon: <LemmyIcon />, url: "https://lemmy.world/u/ta2edh" },
    { name: "linkedin", icon: <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />, url: "https://www.linkedin.com/in/erdemhacisalihoglu/" },
    { name: "mastodon", icon: <FontAwesomeIcon icon={faMastodon} className="w-4 h-4" />, url: "https://mastodon.social/@ta2edh" },
    { name: "matrix", icon: <MatrixIcon />, url: "https://matrix.to/#/@ta2edh:matrix.org" },
    { name: "medium", icon: <FontAwesomeIcon icon={faMedium} className="w-4 h-4" />, url: "https://medium.com/@ta2edh" },
    { name: "QRZ", icon: <FontAwesomeIcon icon={faTowerCell} className="w-4 h-4" />, url: "https://www.qrz.com/db/W6/TA2EDH" },
    { name: "signal", icon: <FontAwesomeIcon icon={faSignalMessenger} className="w-4 h-4" />, url: "https://signal.me/#eu/hKRNDYlWdknbk948hkD8QHtFe1IsveuJFv4GVNqH-HYe6Okb3PRAGI5RP8v-8iQu" },
    { name: "steam", icon: <FontAwesomeIcon icon={faSteam} className="w-4 h-4" />, url: "https://steamcommunity.com/id/ta2edh/" },
    { name: "telegram", icon: <FontAwesomeIcon icon={faTelegram} className="w-4 h-4" />, url: "https://t.me/ta2edh" },
    { name: "twitter", icon: <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />, url: "https://x.com/ta2edh" },
    { name: "wechat", icon: <FontAwesomeIcon icon={faWeixin} className="w-4 h-4" />, url: "https://u.wechat.com/kIH4NveDHohDupxa5Vl0B3M?s=2" },
    { name: "youtube", icon: <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />, url: "https://youtube.com/@ta2edh" },


    
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 bg-black/30 border border-green-900/40 rounded-md hover:bg-green-900/20 transition-colors text-xs sm:text-sm font-mono"
        >
          {link.icon}
          <span className="capitalize truncate">{link.name}</span>
        </Link>
      ))}
    </div>
  )
}
