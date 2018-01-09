import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ props }) => {
  return (
    <div className="MemberCard">
      <img src={props.img} alt={props.name} className="MemberCard__img"/>
      <div className="MemberCard__info">
        <h2 className="MemberCard__name">{props.name}</h2>
        <p className="MemberCard__pos">{props.position}</p>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
}

export default UserCard;