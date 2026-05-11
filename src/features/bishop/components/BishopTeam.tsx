import { bishopContent } from "../data/bishop-content";
import { bishopMediaAssets } from "../data/bishop-assets";

const teamMembers = [
  {
    ...bishopContent.hero.team[0],
    displayName: bishopContent.hero.team[0].name,
    image: bishopMediaAssets.team.patrick,
  },
  {
    ...bishopContent.hero.team[1],
    displayName: bishopContent.hero.team[1].name.replace(" :)", ""),
    image: bishopMediaAssets.team.shelby,
  },
];

export function BishopTeam() {
  return (
    <section className="bishop-team-section" id="bishop-case-study-start">
      <div className="bishop-team-section-content">
        <h2 className="bishop-team-section-title">The Team</h2>
        <div className="bishop-team-member-grid">
          {teamMembers.map((member) => (
            <article className="bishop-team-member-card" key={member.name}>
              <img src={member.image} alt={member.displayName} className="bishop-team-member-image" />
              <h3 className="bishop-team-member-name">{member.displayName}</h3>
              <p className="bishop-team-member-role">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
