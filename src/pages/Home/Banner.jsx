import { motion } from "motion/react"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
            <motion.img
          src={team1}
          animate= {{y: [0, 50, 0]}}
          transition={{duration: 4, repeat: Infinity}}
          className="max-w-sm rounded-lg shadow-2xl"
        />
            <motion.img
          src={team2}
          animate= {{x: [100, 150, 100]}}
          transition={{duration: 4, repeat: Infinity}}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        <div className="flex-1">
          <motion.h1
          initial={{scale:0}}
          animate={{scale: 1,
            transition:{duration: 4}
          }}
          className="text-5xl font-bold">Remotes <motion.span
          animate= {{color: ['#0a85f9', '#0af9d1', '#a59deb'],
            transition: {duration: 4, repeat: Infinity}
          }}
          >jobs</motion.span> for you!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
