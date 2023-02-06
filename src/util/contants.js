import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";

export const PROJECTS = [
    {
        title: "Algorithm Visualizer",
        imgUrl: projImg1,
        githubUrl: "https://github.com/Palakash27/Algorithm-Visualizer",
        liveUrl: "http://algorithm-visualizer-psi.vercel.app/",
    },
    {
        title: "Type The Alphabet",
        imgUrl: projImg2,
        githubUrl: "https://github.com/Palakash27/type-the-alphabet",
        liveUrl: "http://type-the-alphabet.vercel.app/",
    },
    {
        title: "Drive Test Kiosk",
        imgUrl: projImg3,
        githubUrl: "https://github.com/Palakash27/drive-test-kiosk",
        liveUrl: "http://drive-test-kiosk.vercel.app/",
    },
    {
        title: "Node.js Auth",
        imgUrl: projImg4,
        githubUrl: "https://github.com/Palakash27/nodejs-auth",
        liveUrl: "https://palakash27-nodejs-auth.herokuapp.com/users/login",
    },
    {
        title: "Chat App",
        imgUrl: projImg5,
        githubUrl: "https://github.com/Palakash27/chat-app",
        liveUrl: "https://react-chatting-app-react.herokuapp.com/",
    },
    {
        title: "Infinite Scroll Post",
        imgUrl: projImg6,
        githubUrl: "https://github.com/Palakash27/InfiniteScrollPost",
        liveUrl: "http://infinite-scroll-post.vercel.app/",
    },
    {
        title: "Student Hub",
        imgUrl: projImg1,
        githubUrl: "https://github.com/Palakash27/student-hub",
        liveUrl: "https://student-hub.aakashpal.tech/",
    },
    {
        title: "Fifa Data Visualization",
        imgUrl: projImg2,
        githubUrl: "https://github.com/Palakash27/FIFA-data-visualization",
        liveUrl: "http://fifa-data-visualization.vercel.app/",
    },
    {
        title: "Resume",
        imgUrl: projImg3,
        githubUrl: "https://github.com/Palakash27/resume",
        liveUrl: "https://resume.aakashpal.tech/",
    },
    {
        title: "Starwars Client",
        imgUrl: projImg4,
        githubUrl: "https://github.com/Palakash27/starwars-client",
        liveUrl: "http://starwars-client.vercel.app/",
    },
];

export const PROJECTS_DIVIDE = [
    0,
    PROJECTS.length / 3,
    (2 * PROJECTS.length) / 3,
    PROJECTS.length,
];

export const handleClickGAEvent = (e, gaEventTracker) => {
    gaEventTracker("Click", e.target.getAttribute("eventlabel"));
};
