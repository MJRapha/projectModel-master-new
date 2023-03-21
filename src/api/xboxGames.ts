import pic1 from "../images/call-of-duty-modern-warfare.jpg";
import pic2 from "../images/fifa23.jpg";
import pic3 from "../images/batman-arkham-knight.jpg";
import pic4 from "../images/cal-of-duty-black-ops-3.jpg";
import pic5 from "../images/judgment.jpg";
import pic6 from "../images/little-nightmares2.jpg";
import pic7 from "../images/gears-5.jpg";
import pic8 from "../images/hogwarts-legacy.jpg";
import pic9 from "../images/Red-Dead-Redemption-2.jpg";
import pic10 from "../images/battlefield-v.jpg";
import { XboxGameArticle } from "../features/games/games.d";

export const xboxGamesArr: XboxGameArticle[] = [
    {
        id: 1460,
        nameOfGame: "Call of Duty: Modern Warfare",
        image: pic1,
        description: "Prepare to go dark, Call of Duty: Modern Warfare is back on Xbox One! The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power. Call of Duty®: Modern Warfare® engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war. Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic Modern Warfare® series from the ground up.",
        company: "X-Box",
        price: 12.99
    },
    {
        id: 14461,
        nameOfGame: "FIFA 23",
        image: pic2,
        description: "EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with both men’s and women’s FIFA World Cup™ tournaments, the addition of women’s club teams, cross-play features, and new ways to play your favorite modes.",
        company: "X-Box",
        price: 27.99
    },
    {
        id: 11549,
        nameOfGame: "Batman Arkham Knight",
        image: pic3,
        description: "Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile, which is drivable for the first time in the franchise. The addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. Be The Batman.",
        company: "X-Box",
        price: 7.99
    },
    {
        id: 14463,
        nameOfGame: "Call of Duty: Black OPS 3",
        image: pic4,
        description: "Get ready for a new era of Black Ops with Call of Duty: Black Ops 3 on Xbox One. Call of Duty Black Ops 3 takes place in 2065, 40 years after the events of Black Ops 2, in a world facing upheaval from climate change and new technologies.",
        company: "X-Box",
        price: 19.99
    },
    {
        id: 5508,
        nameOfGame: "Judgment",
        image: pic5,
        description: "Judgment is the dramatic tale of a disgraced lawyer seeking redemption in a world rife with corruption and despair. Investigate the seedy Red-Light District of Kamurocho by stepping into the mind of private detective Takayuki Yagami. Utilize innovative investigation skills to uncover the secrets that lie deep within Kamurocho's corrupt underbelly.",
        company: "X-Box",
        price: 19.99
    },
    {
        id: 2953,
        nameOfGame: "Little Nightmares II",
        image: pic6,
        description: "Return to a world of charming horror in Little Nightmares 2 on Xbox One and Xbox Series X, a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by the humming transmission of a distant tower. With Six, the girl in the yellow raincoat, as his guide, Mono sets out to discover the dark secrets of The Signal Tower. Their journey won't be easy; Mono and Six will face a host of new threats from the terrible residents of this world. Will you dare to face this collection of new, little nightmares?",
        company: "X-Box",
        price: 18.99
    },
    {
        id: 2997,
        nameOfGame: "Gears 5",
        image: pic7,
        description: "From one of gaming's most acclaimed sagas, Gears is bigger than ever, with five thrilling modes and the deepest campaign yet. With all-out war descending, Kait Diaz breaks away to uncover her connection to the enemy and discovers the true danger to Sera - herself",
        company: "X-Box",
        price: 9.99
    },
    {
        id: 16327,
        nameOfGame: "Hogwarts Legacy",
        image: pic8,
        description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it.",
        company: "X-Box",
        price: 64.99
    },
    {
        id: 529,
        nameOfGame: "Red Dead Redemption 2",
        image: pic9,
        description: "The end of the Wild West era has begun. After a robbery gone wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        company: "X-Box",
        price: 18.99
    },
    {
        id: 1005,
        nameOfGame: "Battlefield V",
        image: pic10,
        description: "Enter mankind's greatest conflict with Battlefield™ V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.",
        company: "X-Box",
        price: 5.99
    },
];

/* export const fetchArticles = () =>
    fetch(xboxGamesArr)
        .then((res) => res.json())
        .then((json) => json.articles as GameArticle[])
        .then((articles) => {
            articles.forEach((a) => {
                a.id = v4();
                a.isGettingBuied = false
            });
            return articles;
        }); */