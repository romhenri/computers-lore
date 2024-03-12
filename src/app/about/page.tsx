import ProfileCard from "@/components/struct/ProfileCard";
import LineTitle from "@/components/base/line-title";
import { Line } from "@/components/base/line";

const About = () => {
  return (
    <main className="pt-4 lg:border-x lg:border-b lg:p-4">
      <LineTitle>
        Grupo Desblocados
      </LineTitle>

      <div className="flex gap-2 mx-auto justify-start
       flex-col md:flex-row flex-wrap mb-4">
        <ProfileCard 
          name="Rômulo Henrique"
          bio="Fullstack Developer | GameDev"
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

        <ProfileCard
            name="Eduardo Tavares"
            bio="Programmer"
            image="https://avatars.githubusercontent.com/u/157066609?v=4"
        />

        <ProfileCard
          name="Lucas Rodrigo"
          bio="Programmer"
          image="https://avatars.githubusercontent.com/u/130937453?v=4"
        />
      </div>

      <Line />
    </main>
  )
};

export default About;