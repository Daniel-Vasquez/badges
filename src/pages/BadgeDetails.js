import React from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge.js";
import DeleteBadgeModal from "../components/DeleteBadgeModal.js";
import "../components/styles/BadgeDetails.css";

function BadgeDetails(props) {
  const infoBadge = props.badge;

  return (
    <div className="container BadgeDetails">
      <div className="BadgeDetails__hero">
        <div className="col">
          <Badge
            firstName={infoBadge.firstName}
            lastName={infoBadge.lastName}
            email={infoBadge.email}
            twitter={infoBadge.twitter}
            jobTitle={infoBadge.jobTitle}
          />
        </div>
        <div className="col">
          <h2>Acciones</h2>
          <div>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${infoBadge.id}/edit`}
              >
                Editar
              </Link>
              <Link className="btn btn-primary mb-4 ml-2" to="/">
                Regresar
              </Link>
            </div>

            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Eliminar
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
