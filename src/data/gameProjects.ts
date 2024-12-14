import { ProjectList } from "../types/Project";

export const gameProjects: ProjectList = {
    projectList: [
      {
        title: "Messi vs Ronaldo",
        type: "Pong Game",
        description: `An icon of the gaming industry meets two living legends. Pong X Ronaldo & Messi combines the timeless charm of the classic Pong with football-inspired obstacles and power-ups. This game is the perfect conflict solver on the go the eternal "Who is the Goat?". Simply chose your favorite and play it out!`,
        folderName: "pong",
        img: { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/TitleScreen.png`, alt: "Pong Game" },
        year: "October 2024",
        roles: ["Tech", "Art"],
        progress: 100,
        screenshots: [
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/TitleScreen.png`, alt: "Title Screen" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Rules.png`, alt: "Rules" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/HowToPlay.png`, alt: "Controls" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, alt: "Crowd Balloon" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Knuckleball.png`, alt: "Knuckleball" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Wall.png`, alt: "The Wall" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Powershot.png`, alt: "Powershot" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Ronaldo.png`, alt: "Ronaldo Wins" },
          { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Messi.png`, alt: "Messi Wins" },
        ],
        features: [
          {
            title: "Power-ups",
            featureDetails: [{
              name: "Knuckleball",
              description: "The <b>Knuckleball</b> Powerup deflects the ball in a specific direction, making it appear as if the ball takes a sharp turn upon hitting the powerup. This feature simulates a knuckleball shot, which unpredictably changes direction.",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Knuckleball.png`, 
                alt: "Knuckleball power-up" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/Knuckleball-code.png`, 
                alt: "Knuckleball Code",
                description: "The directional deflection is achieved by increasing the ball's Y speed. The <b>if/else</b> statement in the code ensures that the ball maintains its general direction."
              }, { 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/IsSensor.png`, 
                alt: "Knuckleball Is a Sensor",
                description: "Setting <b>'Is a Sensor?'</b> to true prevents the ball from colliding with the power-up actor. As a result, the ball does not bounce back upon contact with the power-up actor but instead changes its flight angle manually upon collision."
              }], 
            }, {
              name: "Powershot",
              description: "The <b>Powershot</b> power-up increases the ball's speed, enabling it to reach the opponent's goal line faster than a regular shot.",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Powershot.png`, 
                alt: "Powershot power-up" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/Powershot-code.png`, 
                alt: "Powershot Code",
                description: "Similar to the <b>Knuckleball</b>, the <b>Powershot</b> power-up increases the ball's speed in a specific direction. In this case, it enhances the <b>x-speed</b>, which determines the ball's horizontal movement speed."
              }, { 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/IsSensor.png`, 
                alt: "Knuckleball is a Sensor",
                description: "Setting <b>'Is a Sensor?'</b> to true prevents the ball from colliding with the power-up actor. As a result, the ball does not bounce back upon contact with the power-up actor but instead changes its flight angle manually upon collision."
              }], 
            }, {
              name: "The Wall",
              description: "<b>The Wall</b> power-up is a permanent feature on the game field. Once spawned, it remains active and deflects the ball in any direction, often with unpredictable results. Players are advised to avoid shooting at <b>The Wall</b> due to the high likelihood of unfavorable outcomes.",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/Wall.png`, 
                alt: "The Wall power-up" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/BallMovement.png`, 
                alt: "Ball Movement",
                description: "This code snippet demonstrates an effective solution to prevent the ball from slowing down or glitching when interacting with <b>The Wall</b> power-up. If the ball's speed falls below a certain threshold based on its direction, it will progressively regain velocity to ensure smooth gameplay continuity."
              }, { 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/IsNotSensor.png`, 
                alt: "The Wall is not a Sensor",
                description: "<b>The Wall</b> power-up is <b>not a Sensor</b>, meaning it is a collidable actor that causes the ball to bounce upon impact."
              }], 
            }]
          }, {
            title: "Crowd Influence",
            featureDetails: [{
              name: "Crowd Balloons",
              description: "<b>Crowd Balloons</b> mimic the crowd's influence in a football game. Occasionally, fans throw obstacles onto the pitch, causing the ball to deflect and creating unexpected gameplay twists.",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "Crowd Balloons" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/BalloonSpawn.png`, 
                alt: "Crowd Balloon Spawn",
                description: "A <b>Crowd Balloon</b> spawns at the sidelines and gradually drifts onto the pitch."
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/BalloonMovement.png`, 
                alt: "Crowd Balloon Movement",
                description: "This code demonstrates how the balloons move unpredictably, randomly changing direction as they drift and come to a stop—just like real balloons."
              }], 
            }],
          },
        ],
        challenges: [{
          title: "Sideline Bug",
            featureDetails: [{
              name: "Ball Stuck in Sideline",
              description: "Occasionally, the ball could get stuck in the sideline, making it impossible for players to reach. In some cases, this could result in an infinite back-and-forth motion, depending on how far the ball became lodged.",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/SidelineBug.png`, 
                alt: "Ball Stuck in Sideline" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/code/BallSideline.png`, 
                alt: "Sideline Fix Code",
                description: "A simple solution to this bug was to forcibly increase the vertical movement of the ball until it is recovered from the sidelines."
              }], 
            }],
          },
        ],
        tools: ["Stencyl", "Photoshop"],
        rules: "Two players play against eachother. Each player is given a “Paddle” which is moved in vertical direction (Up and Down) according to their assigned keys. A ball is spawned once the initial Timer runs down. The Goal of the game is to place the ball behind the opponents paddle until it fully disappears. This counts as Goal. First Player to score 15 Goals wins the game. </br></br> Obstacles such as <b>Balloons</b> thrown in by the crowd add difficulty as they can alternate the balls direction on collision. </br> <b>Powerups</b> will spawn randomly. On collection they can either make the ball faster, alternate the balls angle or stay as obstacles throughout the game.",
        resources: [
          {
            title: "Cristiano Ronaldo playing paddle",
            url: "https://www.thesun.co.uk/sport/21379553/premier-league-table-man-utd-cristiano-ronaldo-last-game/",
            interpret: "Getty Images",
          },
          {
            title: "Lionel Messi",
            url: "https://www.deviantart.com/dma365/art/Lionel-Messi-644519907",
            interpret: "dma365",
          },
          {
            title: "Versus competition screen background blue red",
            url: "https://www.freepik.com/free-vector/versus-competition-screen-background-blue-red_7163433.htm",
            interpret: "Harryarts",
          },
          {
            title: "Fireball realistic black and white fire orb",
            url: "https://www.cleanpng.com/png-fireball-realistic-black-and-white-fire-orb-8015187/",
            interpret: "bestone",
          },
          {
            title: "Jabulani football",
            url: "https://www.pngwing.com/en/free-png-aoagz",
            interpret: "PNG Wing",
          },
          {
            title: "Red universe background",
            url: "https://xaydungso.vn/bai-viet-khac/tong-hop-741-red-background-space-dang-cap-thu-hut-moi-anh-nhin-vi-cb.html",
            interpret: "Xây dựng số",
          },
          {
            title: "Blue universe background",
            url: "https://www.freepik.com/author/designqshop",
            interpret: "Designqshop",
          },
          {
            title: "Lionel Messi PNG",
            url: "https://www.hiclipart.com/free-transparent-background-png-clipart-jrrlj",
            interpret: "HiClipart",
          },
          {
            title: "Cristiano Ronaldo PNG",
            url: "https://imgbin.com/png/gSfJn6H9/cristiano-ronaldo-real-madrid-c-f-la-liga-sevilla-fc-portugal-national-football-team-png",
            interpret: "Johnams",
          },
          {
            title: "Keyboard key W, S, Arrow up, Arrow down icons",
            url: "https://icons8.com/icons/set/keyboard-key-arrow",
            interpret: "Icons8",
          },
          {
            title: "HD beautiful single gold balloon PNG",
            url: "https://www.citypng.com/photo/6617/hd-beautiful-single-gold-balloon-png",
            interpret: "CityPNG",
          },
          {
            title: "Muscle powershot PNG",
            url: "https://www.pngwing.com/en/free-png-bytac/download",
            interpret: "PNG Wing",
          },
          {
            title: "White curved arrow (knuckleball) SVG",
            url: "https://www.svgrepo.com/svg/17993/curve-arrow",
            interpret: "SVG Repo",
          },
          {
            title: "Firewall PNG icon",
            url: "https://www.vhv.rs/viewpic/TRhbbbJ_firewall-png-icon-clipart-best-icon-transparent-png/",
            interpret: "VHV.rs",
          },
          {
            title: "Main theme song",
            url: "https://www.youtube.com/watch?v=kyuVvQiwWAs",
            interpret: "TV total",
          },
          {
            title: "Ronaldo siu",
            url: "https://www.youtube.com/watch?v=OxLIqdQG5Ig",
            interpret: "OXLIQD",
          },
          {
            title: "Ronaldo crowd chant",
            url: "https://www.youtube.com/watch?v=8Bzi5tc23po",
            interpret: "ZODIAC SOUNDS",
          },
          {
            title: "Messi - Que mira bobo",
            url: "https://www.youtube.com/watch?v=uRvEAKdOlJo",
            interpret: "ESPN Argentina",
          },
          {
            title: "Messi crowd chant",
            url: "https://www.youtube.com/watch?v=DxlFbrmj0cU",
            interpret: "CaptainArgentina",
          },
          {
            title: "Generic crowd chant",
            url: "https://www.youtube.com/watch?v=-FLgShtdxQ8&t=1598s",
            interpret: "Ultra Popcorn",
          },
          {
            title: "YouTube to MP3 converter",
            url: "https://y2mate.nu/en-FzLi/",
            interpret: "Y2Mate",
          },
          {
            title: "Audio trimmer",
            url: "https://audiotrimmer.com/#google_vignette",
            interpret: "AudioTrimmer",
          },
          {
            title: "MP3 metadata remover",
            url: "https://products.groupdocs.app/metadata/clean/mp3",
            interpret: "GroupDocs",
          },
          {
            title: "MP3 to OGG converter",
            url: "https://www.freeconvert.com/mp3-to-ogg",
            interpret: "FreeConvert",
          },
        ],
      },
      {
        title: "VietVaders",
        type: "Shoot em up",
        description: "A shoot-em-up game with procedurally generated waves and endless mode.",
        folderName: "vietVaders",
        img: { url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, alt: "Shoot-em-up Game" },
        year: "2024",
        roles: ["Tech", "Art"],
        progress: 95,
        screenshots: [
          { url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, alt: "Gameplay" },
        ],
        features: [
          {
            title: "Power-ups",
            featureDetails: [{
              name: "Knuckleball",
              description: "string",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, 
                alt: "Knuckleball" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, 
                alt: "Knuckleball",
                description: "test"
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, 
                alt: "Knuckleball",
                description: "test"
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, 
                alt: "Knuckleball",
                description: "test"
              },], 
            }]
          }, {
            title: "Crowd Influence",
            featureDetails: [{
              name: "Crowd Balloons",
              description: "string",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon",
                description: "test"
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon",
                description: "test"
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon",
                description: "test"
              },], 
            }],
          },
        ],
        challenges: [{
          title: "Crowd Influence",
            featureDetails: [{
              name: "Crowd Balloons",
              description: "string",
              screenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon" 
              }],
              codeScreenshots: [{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon",
                description: "test"
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon",
                description: "test"
              },{ 
                url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/CrowdBalloon.png`, 
                alt: "CrowdBalloon",
                description: "test"
              },], 
            }],
          },
        ],
        tools: ["Stencyl", "Photoshop", "Illustrator"],
        rules: "",
        resources: [
            { 
                title: "Blacknut Cloud Gaming. (n.d.). Men of War: Vietnam - Apocalypse Now. Retrieved November 22, 2024, from", 
                url: "https://www.blacknutlemag.com/en/men-of-war-vietnam-video-game" 
            }, { 
                title: "Ahemotion Music. (2022, March 1). Helicopter sound effect [Video]. YouTube. ", 
                url: "https://www.youtube.com/watch?v=QlGzLhnwJX4" 
            }, { 
                title: "Sound Effects Pro. (2019, July 15). Explosion sound effect [Video]. YouTube.", 
                url: "https://www.youtube.com/watch?v=LdGe-qosfRA" 
            }, { 
                title: "HD Sound Effects. (2016, November 30). Missile sound effect [Video]. YouTube.", 
                url: "https://www.youtube.com/watch?v=1qUN59Oebe0" 
            }, { 
                title: "PhantomMusic. (2014, April 12). Title song [Video]. YouTube. ", 
                url: "https://www.youtube.com/watch?v=OrPKJos3tA0" 
            }, 
        ],
      },
    ],
  };
  
  