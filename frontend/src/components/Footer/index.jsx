import TeamItem from "@components/TeamItem";
import SFooter from "./style";
import Modal from "../Modal";
import datateams from "../../assets/datateam";

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
            {datateams.map((datateam) => (
              <TeamItem
                key={datateam.name}
                name={datateam.name}
                picture={datateam.picture}
                title={datateam.title}
                link={datateam.link}
              />
            ))}
          </div>
        </Modal>
      </div>
    </SFooter>
  );
}
