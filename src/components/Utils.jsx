  // vérifie si un objet est vide
  export const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };

  export const timeAgo = (date) => {
    const diff = new Date() - new Date(date);
    if (diff < 1000 * 60) {
      return "Il y a moins d'une minute";
    } else if (diff < 1000 * 60 * 60) {
      return `Il y a ${Math.floor(diff / (1000 * 60))} minutes`;
    } else if (diff < 1000 * 60 * 60 * 24) {
      return `Il y a ${Math.floor(diff / (1000 * 60 * 60))} heures`;
    } else if (diff < 1000 * 60 * 60 * 24 * 30) {
      return `Il y a ${Math.floor(diff / (1000 * 60 * 60 * 24))} jours`;
    } else if (diff < 1000 * 60 * 60 * 24 * 30 * 12) {
      return `Il y a ${Math.floor(diff / (1000 * 60 * 60 * 24 * 30))} mois`;
    } else {
      return `Il y a ${Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))} ans`;
    }
  };
  