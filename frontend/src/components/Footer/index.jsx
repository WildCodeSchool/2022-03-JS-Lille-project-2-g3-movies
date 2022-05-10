import TeamItem from "@components/TeamItem";
import SFooter from "./style";
import Modal from "../Modal";

export default function Footer() {
  return (
    <SFooter>
      <div className="entry">
        <Modal button="Show Adress">
          <h2>Own adress </h2>
          <p>CINERAMA</p>
          <p> Avenue des Peupliers 59000 Lille</p>
          <p>59000 Lille</p>
        </Modal>
      </div>
      <div className="entry">
        <Modal button="Team">
          <h2>Team</h2>
          <div div className="team">
            <TeamItem
              name="Mathéo Boumbas"
              picture="https://media-exp1.licdn.com/dms/image/C4D03AQEnaEb5BwuExQ/profile-displayphoto-shrink_200_200/0/1558365136807?e=1657152000&v=beta&t=vUBpUUTJtRjbEQ1m5QuclGWOWuXmCNIWVDhueptNn44"
              title="Web developper"
              link="https://www.linkedin.com/in/math%C3%A9o-boumbas/"
            />
            <TeamItem
              name="Juliane Casier"
              picture="https://media-exp1.licdn.com/dms/image/C4E03AQFGJ7FOF4jA9w/profile-displayphoto-shrink_100_100/0/1649929348814?e=1657152000&v=beta&t=rBxWUt0vodjAjE6U3S966DeADqEh4NTyNS-BqBQVuww"
              title="Web developper"
              link="https://www.linkedin.com/in/juliane-casier-bb642832/"
            />
            <TeamItem
              name="Samir Decambray"
              picture="https://media-exp1.licdn.com/dms/image/D4E35AQGck6EzCAPzfA/profile-framedphoto-shrink_200_200/0/1646903261317?e=1652277600&v=beta&t=Oca5sIvL6pcKgyzkomEhGBiYc1Mp1kCLPTrUz3g6eyA"
              title="Web developper"
              link="https://www.linkedin.com/in/decambray-samir-952759233/"
            />
            <TeamItem
              name="Amar Lebkiri"
              picture="https://media-exp1.licdn.com/dms/image/C4E03AQFmqxmjn_2iWg/profile-displayphoto-shrink_200_200/0/1647936636086?e=1657756800&v=beta&t=GmVIBoFGiAUDx9NkcKSL7PbB6bCmbKm47u8wH20Z8io"
              title="Web developper"
              link="https://www.linkedin.com/in/amar-lebkiri/"
            />
            <TeamItem
              name="Valentin Navarro"
              picture="https://media-exp1.licdn.com/dms/image/C5603AQERAlT2PB_W8A/profile-displayphoto-shrink_200_200/0/1648304126335?e=1657756800&v=beta&t=99je_PI5CRnJaPVx3UcyDirIxpT-Omf_E6RxP6OZo4o"
              title="Web developper"
              link="https://www.linkedin.com/in/valentin-navarro-857199139/"
            />
          </div>
        </Modal>
      </div>
    </SFooter>
  );
}
