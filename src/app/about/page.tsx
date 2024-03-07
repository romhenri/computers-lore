import ProfileCard from "@/components/comp/ProfileCard";
import LineTitle from "@/components/ui/line-title";

const About = () => {
  return (
    <main>
      <LineTitle>
        Grupo Desblocados
      </LineTitle>

      <div className="flex gap-2 mx-auto justify-items-center flex-col md:flex-row">
        <ProfileCard 
          name="Rômulo Henrique"
          bio="Fullstack developer | GameDev"
          image="https://avatars.githubusercontent.com/u/123867521?v=4"
          />

        <ProfileCard
          name="Antônio Carlos"
          bio="Pixel Artist | GameDev | Programmer"
          image="https://avatars.githubusercontent.com/u/89984890?v=4"
        />

        <ProfileCard
          name="Ernandes Tavares"
          bio="Programmer | GameDev"
          image="https://avatars.githubusercontent.com/u/131466882?v=4"
        />
      </div>
    </main>
  )
};

export default About;