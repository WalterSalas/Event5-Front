import React from "react";

import { EventCard } from "../../organisms";

export function GridEvents() {
  return (
    <section className="grid-events">
      <EventCard title="Mi Evento" orgName="Conejo Estelar" date="16/12/2020" />
      <EventCard title="Mi Evento" orgName="Conejo Estelar" date="16/12/2020" />
    </section>
  );
}
