import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar.js";
import "../components/styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Buscar Badge</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          ></input>
        </div>
        <h3>No hay ningún badge.</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Crea el tuyo.
        </Link>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="form-group">
        <label>Buscar Usuario</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
      </div>
      <ul className="list-unstyled BadgesList">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <Gravatar
                  email={badge.email}
                  alt=""
                  className="BadgesListItem__avatar"
                />
                <div>
                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </div>
                  <div className="Twitter__name">
                    <span className="Twitter__logo"></span>@{badge.twitter}
                  </div>
                  <div>{badge.jobTitle}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgesList;
