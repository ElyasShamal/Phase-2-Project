import React, { useRef } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import Movie from "../movie data/Movie";

function Main() {
  const dialogRef = useRef(null);
  const handleClick = () => {
    dialogRef.current.showModal();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
    <main className="container">
      <section className="section-info">
        <h2 className="section-title">Spider-Man: Across the Spider-Verse</h2>
        <span className="section-span">2023 | PG | Adventure</span>
        <p>
          After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly
          neighborhood Spider-Man is catapulted across the Multiverse, where he
          encounters the Spider Society, a team of Spider-People charged with
          protecting the Multiverse’s very existence. But when the heroes clash
          on how to handle a new threat, Miles finds himself pitted against the
          other Spiders and must set out on his own to save those he loves most.
        </p>

        <div>
          <h2> Start your 30-day free trial </h2>
          <button onClick={handleClick} className="Watch">
            Watch Now
          </button>
        </div>
        <dialog ref={dialogRef} className="sign-up-dialog">
          <button onClick={handleClose} className="close">
            X
          </button>
          <SignUpForm />
        </dialog>
      </section>
      <section className="data">
        <Movie />
      </section>
    </main>
  );
}

export default Main;
